// src/app/api/users/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function GET(): Promise<NextResponse> {
  try {
    // Query PostgreSQL directly using Prisma
    const users = await prisma.user.findMany();

    // Return the result as a JSON response
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma client disconnects properly
  }
}
