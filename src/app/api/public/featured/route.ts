// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function GET() {
  try {
    // Fetch featured sections with related published news data
    const featuredNews = await prisma.featuredSection.findMany({
      include: {
        news: {
          where: {
            publish_status: "PUBLISHED", // Filter by published status
          },
          select: {
            id: true,
            title: true,
            description: true,
            featured_image: true,
            highlight_text: true, // Include highlight_text
          },
        },
      },
      cacheStrategy: {
        ttl: 300, // Cache for 5 minutes (300 seconds)
      },
    });

    return NextResponse.json(featuredNews, { status: 200 });
  } catch (error) {
    console.error("Error fetching featured news:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching featured news." },
      { status: 500 }
    );
  }
}
