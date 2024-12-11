// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function GET() {
  try {
    // Fetch featured sections with related news data
    const featuredNews = await prisma.featuredSection.findMany({
      include: {
        news: {
          select: {
            id: true,
            title: true,
            description: true,
            featured_image: true,
          },
        },
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
