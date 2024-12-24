// api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";
import bcrypt from "bcrypt";

// PATCH: Update a user by ID
export async function PATCH(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();

    if (!id || typeof id !== "number") {
      return NextResponse.json(
        { success: false, error: "Invalid or missing user ID" },
        { status: 400 }
      );
    }

    const updatedData: Record<string, any> = {
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
      where: { id },
      data: updatedData,
    });

    return NextResponse.json({ success: true, updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ success: false, error: "Error updating user" }, { status: 500 });
  }
}
