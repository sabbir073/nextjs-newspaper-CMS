// api/users/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";
import bcrypt from "bcrypt";

// DELETE: Delete a user by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = parseInt(params.id);

  try {
    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ success: false, error: "Error deleting user" }, { status: 500 });
  }
}

// GET: Fetch a single user by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = parseInt(params.id);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
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

// PATCH: Update a user by ID
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = parseInt(params.id);
  const data = await req.json();

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatedData: any = {
      name: data.name,
      email: data.email,
      role: data.role,
      display_name: data.display_name,
      updated_at: new Date(), // Automatically update `updated_at`
    };

    // Hash the password if provided
    if (data.password) {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      updatedData.password = hashedPassword;
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updatedData,
    });

    return NextResponse.json({ success: true, updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ success: false, error: "Error updating user" }, { status: 500 });
  }
}
