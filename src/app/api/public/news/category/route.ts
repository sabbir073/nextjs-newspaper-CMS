import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function GET(request: NextRequest) {
  try {
    // Extract categoryId from query parameters
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");
    const newsItem = searchParams.get("newsItem");

    if (!categoryId) {
      return NextResponse.json(
        { error: "Category ID is required" },
        { status: 400 }
      );
    }

    // Fetch the latest 7 news items that are not in the featured section and match the categoryId
    const news = await prisma.news.findMany({
      where: {
        publish_status: "PUBLISHED", // Only published news
        categories: {
          some: {
            id: Number(categoryId), // Match with categoryId
          },
        },
        featuredSections: {
          none: {}, // Exclude news with a relation in FeaturedSection
        },
      },
      select: {
        id:true,
        title: true,
        description: true,
        highlight_text: true,
        featured_image: true,
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
