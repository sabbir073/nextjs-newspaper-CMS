import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id || typeof id !== "number") {
      return NextResponse.json(
        { success: false, error: "Invalid or missing user ID" },
        { status: 400 }
      );
    }

    // Prevent deleting the fallback user (id = 1)
    if (id === 1) {
      return NextResponse.json(
        { success: false, error: "Cannot delete the default user (ID 1)" },
        { status: 400 }
      );
    }

    // Reassign all News entries created by this user to user ID 1
    await prisma.news.updateMany({
      where: { created_by_id: id },
      data: { created_by_id: 1 },
    });

    // Reassign all News entries updated by this user to user ID 1 (optional)
    await prisma.news.updateMany({
      where: { updated_by_id: id },
      data: { updated_by_id: 1 },
    });

    // Delete the user
    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { success: false, error: "Error deleting user" },
      { status: 500 }
    );
  }
}
