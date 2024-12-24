import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json(); // Parse the request body
    const { id } = body;

    if (!id || typeof id !== "number") {
      return NextResponse.json(
        { success: false, error: "Invalid or missing news ID" },
        { status: 400 }
      );
    }

    await prisma.news.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting news:", error);
    return NextResponse.json(
      { success: false, error: "Error deleting news" },
      { status: 500 }
    );
  }
}
