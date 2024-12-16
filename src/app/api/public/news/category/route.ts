/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function GET(request: NextRequest) {
  try {
    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");
    const newsItem = searchParams.get("newsItem");
    const video = searchParams.get("video"); // Get the 'video' parameter

    // Build the where clause dynamically
    const whereClause: any = {
      publish_status: "PUBLISHED", // Only published news
      featuredSections: {
        none: {}, // Exclude news with a relation in FeaturedSection
      },
    };

    // Add category filtering if categoryId is provided
    if (categoryId) {
      whereClause.categories = {
        some: {
          id: Number(categoryId),
        },
      };
    }

    // Add video conditions based on the 'video' parameter
    if (video === "true") {
      whereClause.video_url = {
        not: null, // Video URL must not be null
      };
    } else if (video === "false") {
      whereClause.video_url = null; // Video URL must be null
    }

    // Fetch the latest news based on the dynamically built where clause
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
        created_at: "desc", // Order by creation date
      },
      take: Number(newsItem), // Limit to news items
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
