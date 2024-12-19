/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json(); // Parse JSON body
    const { categoryId, newsItem, video } = body; // Extract data

    const whereClause: any = {
      publish_status: "PUBLISHED",
      featuredSections: {
        none: {},
      },
    };

    if (categoryId) {
      whereClause.categories = {
        some: {
          id: Number(categoryId),
        },
      };
    }

    if (video === true) {
      whereClause.video_url = { not: null };
    } else if (video === false) {
      whereClause.video_url = null;
    }

    const news = await prisma.news.findMany({
      where: whereClause,
      select: {
        id: true,
        title: true,
        description: true,
        highlight_text: true,
        featured_image: true,
        video_url: true,
      },
      orderBy: {
        created_at: "desc",
      },
      take: Number(newsItem),
    });

    return NextResponse.json(news, { status: 200 });
  } catch (error) {
    console.error("Error fetching category news:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching category news." },
      { status: 500 }
    );
  }
}
