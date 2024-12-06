import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/prisma';
import { NextRequest } from 'next/server';
import { Prisma, Role } from '@prisma/client';
import bcrypt from 'bcrypt';

// POST: Create a new user
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validate required fields
    if (!data.name || !data.email || !data.password || !data.role) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Check if the email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existingUser) {
      return NextResponse.json({ success: false, error: 'Email already exists' }, { status: 400 });
    }

    // Hash the password
    const saltRounds = 10; // Standard number of salt rounds for bcrypt
    //const additionalSalt = process.env.NEXTAUTH_SECRET || ''; // Optional additional salt from the environment
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role,
        display_name: data.display_name || null,
      },
    });

    return NextResponse.json({ success: true, newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ success: false, error: 'Error creating user' }, { status: 500 });
  }
}

// GET: Fetch all users with optional search
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const searchQuery = url.searchParams.get('search') || '';

  try {
    const whereCondition: Prisma.UserWhereInput = searchQuery
      ? {
          OR: [
            { name: { contains: searchQuery, mode: Prisma.QueryMode.insensitive } },
            { email: { contains: searchQuery, mode: Prisma.QueryMode.insensitive } },
            { role: (Object.values(Role) as string[]).includes(searchQuery.toUpperCase())
                ? { equals: searchQuery.toUpperCase() as Role }
                : undefined },
            { display_name: { contains: searchQuery, mode: Prisma.QueryMode.insensitive } },
          ],
        }
      : {};

    const users = await prisma.user.findMany({
      where: whereCondition,
      orderBy: { created_at: 'desc' },
    });

    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ success: false, error: 'Error fetching users' }, { status: 500 });
  }
}
