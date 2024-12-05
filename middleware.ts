import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define role-based paths
const rolePaths: Record<string, string> = {
  ADMIN: "/dashboard/admin",
  EDITOR: "/dashboard/editor",
  USER: "/dashboard/user",
};

export default withAuth(
  async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Handle caching for /api/public/*
    if (pathname.startsWith("/api/public")) {
      const response = NextResponse.next();
      const cacheControlValue =
        process.env.NODE_ENV === "development"
          ? "no-store"
          : "s-maxage=3600, stale-while-revalidate=59";
      response.headers.set("Cache-Control", cacheControlValue);
      return response;
    }

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // If user is not authenticated, let withAuth handle it (redirect to login)
    if (!token) return NextResponse.next();

    const userRole = token.role as string;

    // Redirect users to their appropriate dashboard if accessing unauthorized routes
    if (
      pathname.startsWith("/dashboard") &&
      !pathname.startsWith(rolePaths[userRole])
    ) {
      return NextResponse.redirect(new URL(rolePaths[userRole], req.url));
    }

    return NextResponse.next(); // Allow access if everything is valid
  },
  {
    pages: {
      signIn: "/login", // Redirect unauthenticated users to login
    },
  }
);

// Match only the necessary routes
export const config = {
  matcher: ["/dashboard/:path*", "/api/public/:path*"], // Apply middleware to /dashboard and /api/public/*
};
