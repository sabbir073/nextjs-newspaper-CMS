import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

// GET: Fetch the latest 10 news items with publish_status PUBLISHED
export async function GET() {
  try {
    const latestNews = await prisma.news.findMany({
      where: {
        publish_status: "PUBLISHED", // Only fetch published news
      },
      take: 10,
      orderBy: {
        created_at: "desc", // Order by creation date in descending order
      },
      select: {
        id: true,
        title: true,
      },
    });

    return NextResponse.json(latestNews, { status: 200 });
  } catch (error) {
    console.error("Error fetching latest news:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the latest news." },
      { status: 500 }
    );
  }
}