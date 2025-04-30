import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";         // adjust to your alias/relative path

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  // ② await it to get the real value
  const { slug } = await params;

  // optional: keep your validation logic
  const numericId = Number(slug);
  if (Number.isNaN(numericId)) {
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
        select: { id: true, title: true, slug: true },
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
}
