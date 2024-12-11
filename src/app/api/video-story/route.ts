import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

// GET: Fetch the video story
export async function GET() {
  try {
    // Fetch the video story record
    const videoStory = await prisma.videoStory.findFirst({
      select: {
        id: true,
        title: true,
        video_url: true,
      },
    });

    return NextResponse.json(videoStory, { status: 200 });
  } catch (error) {
    console.error("Error fetching video story:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the video story." },
      { status: 500 }
    );
  }
}

// POST: Create or update the video story
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { video_url } = body;

    if (!video_url) {
      return NextResponse.json(
        { error: "Video URL is required." },
        { status: 400 }
      );
    }

    // Upsert the video story record
    const videoStory = await prisma.videoStory.upsert({
      where: { title: "Video story" },
      update: { video_url },
      create: { title: "Video story", video_url },
    });

    return NextResponse.json(
      { success: true, message: "Video story updated successfully.", videoStory },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating video story:", error);
    return NextResponse.json(
      { error: "An error occurred while updating the video story." },
      { status: 500 }
    );
  }
}
