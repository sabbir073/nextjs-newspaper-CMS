import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const numericId = parseInt(params.slug, 10);
    if (isNaN(numericId)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const news = await prisma.news.findUnique({
      where: { id: numericId },
      select: {
        id: true,
        title: true,
        description: true,
        reporter_name: true,
        tag: true,
        featured_image: true,
        meta_title: true,
        meta_description: true,
        meta_image: true,
        focus_keyword: true,
        video_url: true,
        created_at: true,
        updated_at: true,
        categories: {
          take: 1,
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
    });

    if (!news) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(news, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=600",
      },
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
