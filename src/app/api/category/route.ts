import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
      },
      cacheStrategy: {
        ttl: 300, // Cache for 5 minutes (300 seconds)
      },
    });

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching categories." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { success: false, message: "Title and slug are required." },
        { status: 400 }
      );
    }

    // Check for duplicate slug
    const existingCategory = await prisma.category.findUnique({
      where: { slug },
    });

    if (existingCategory) {
      return NextResponse.json(
        { success: false, message: "The slug already exists. Please choose a different slug." },
        { status: 400 }
      );
    }

    const newCategory = await prisma.category.create({
      data: {
        title,
        slug,
      },
    });

    return NextResponse.json(
      { success: true, category: newCategory },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while creating the category." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID is required to delete a category." },
        { status: 400 }
      );
    }

    await prisma.category.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { success: true, message: "Category deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting the category." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, slug } = body;

    if (!id || !title || !slug) {
      return NextResponse.json(
        { success: false, message: "ID, title, and slug are required." },
        { status: 400 }
      );
    }

    // Check for duplicate slug excluding the current category
    const existingCategory = await prisma.category.findFirst({
      where: {
        slug,
        NOT: { id: Number(id) }, // Exclude the current category from the check
      },
    });

    if (existingCategory) {
      return NextResponse.json(
        { success: false, message: "The slug already exists. Please choose a different slug." },
        { status: 400 }
      );
    }

    // Update the category
    const updatedCategory = await prisma.category.update({
      where: { id: Number(id) },
      data: { title, slug },
    });

    return NextResponse.json(
      { success: true, category: updatedCategory },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while updating the category." },
      { status: 500 }
    );
  }
}
