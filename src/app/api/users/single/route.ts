// api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

// GET: Fetch a single user by ID
export async function GET(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id || typeof id !== "number") {
      return NextResponse.json(
        { success: false, error: "Invalid or missing user ID" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        display_name: true,
        created_at: true,
        updated_at: true,
      },
    });

    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ success: false, error: "Error fetching user" }, { status: 500 });
  }
}