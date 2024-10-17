import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

function isError(error: unknown): error is Error {
  return error instanceof Error;
}

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error('Error fetching users:', error);

    // Use the type guard to safely access the error message
    const errorMessage = isError(error) ? error.message : 'Unknown error occurred';

    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
