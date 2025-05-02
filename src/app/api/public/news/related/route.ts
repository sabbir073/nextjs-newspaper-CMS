import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";  

export const revalidate = 300;                     // 5‑minute edge‑cache (ISR)

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const categoryId = Number(searchParams.get("category"));
  const excludeId  = Number(searchParams.get("exclude") || "0");
  const limit      = Number(searchParams.get("limit")   || "8");
  const videoMode  = searchParams.get("video");        // "1" → only‑video, "0" → only non‑video

  if (!categoryId) {
    return NextResponse.json({ error: "Missing category ID" }, { status: 400 });
  }

  try {
    const relatedNews = await prisma.news.findMany({
      where: {
        id: { not: excludeId },
        publish_status: "PUBLISHED",
        categories: { some: { id: categoryId } },
        ...(videoMode === "1" && { video_url: { not: null } }),
        ...(videoMode === "0" && { video_url: null }),
      },

      orderBy: { created_at: "desc" },
      take: limit,

      select: {
        id: true,
        title: true,
        featured_image: true,
        video_url: true,
        highlight_text: true,
      },
    });

    return NextResponse.json(relatedNews, { 
        status: 200,
        headers: {
            "Cache-Control": "public, s-maxage=600",
        }, 
    });
  } catch (error) {
    console.error("Error fetching related news:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
