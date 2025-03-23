import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const id = Number(body.id); // 🔥 Force cast to number

    if (!id || isNaN(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid or missing news ID" },
        { status: 400 }
      );
    }

    await prisma.news.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting news:", error.message, error);
    return NextResponse.json(
      { success: false, error: error.message || "Error deleting news" },
      { status: 500 }
    );
  }
}
