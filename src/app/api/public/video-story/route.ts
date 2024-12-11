import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

// GET: Fetch the video story
export async function GET() {
  try {
    const videoStory = await prisma.videoStory.findFirst({
      select: {
        video_url: true,
      },
    });

    return NextResponse.json(videoStory || { video_url: null }, { status: 200 });
  } catch (error) {
    console.error("Error fetching video story:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the video story." },
      { status: 500 }
    );
  }
}
