// api/people/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const newsId = parseInt(params.id);
  
    try {
      await prisma.news.delete({
        where: { id: newsId },
      });
  
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error("Error deleting news:", error);
      return NextResponse.json({ success: false, error: "Error deleting news" }, { status: 500 });
    }
  }