import NextAuth from "next-auth";
import authOptions from "@/lib/authOptions"; // Import authOptions from lib

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
