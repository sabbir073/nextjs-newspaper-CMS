import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";


export async function GET() {
  try {
    const defaultFields = Array.from({ length: 9 }, (_, index) => ({
      title: `Featured News ${index + 1}`,
      news_id: null,
    }));

    // Fetch all existing featured sections from the database
    const existingSections = await prisma.featuredSection.findMany();

    // Merge existing sections with default fields
    const fields = defaultFields.map((defaultField) => {
      const existingField = existingSections.find(
        (section) => section.title === defaultField.title
      );
      return {
        ...defaultField,
        news_id: existingField?.news_id || null,
        id: existingField?.id || undefined,
      };
    });

    return NextResponse.json(fields, { status: 200 });
  } catch (error) {
    console.error("Error fetching featured sections:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching featured sections." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  console.log("Prisma.featuredSection:", prisma.featuredSection);
  try {
    const body = await request.json();
    const { fields } = body;

    if (!Array.isArray(fields)) {
      return NextResponse.json(
        { error: "Invalid input format. Expected an array of fields." },
        { status: 400 }
      );
    }

    for (const field of fields) {
      const { title, news_id } = field;

      if (!title) {
        return NextResponse.json(
          { error: "Each field must include a title." },
          { status: 400 }
        );
      }

      


      console.log(`Processing title: ${title}`);

      // Check if the entry exists using findFirst (fallback to avoid findUnique issues)
      const existingEntry = await prisma.featuredSection.findFirst({
        where: { title },
      });

      if (existingEntry) {
        console.log(`Updating entry for title: ${title}`);
        // If the entry exists, update it
        await prisma.featuredSection.update({
          where: { id: existingEntry.id },
          data: { news_id },
        });
      } else {
        console.log(`Creating new entry for title: ${title}`);
        // If the entry does not exist, create it
        await prisma.featuredSection.create({
          data: { title, news_id },
        });
      }
    }

    return NextResponse.json(
      { success: true, message: "Featured sections processed successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing featured sections:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the featured sections." },
      { status: 500 }
    );
  }
}
