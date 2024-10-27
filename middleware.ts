import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt"; // Import getToken from next-auth/jwt
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define role-based paths
const rolePaths: Record<string, string> = {
  ADMIN: "/dashboard/admin",
  EDITOR: "/dashboard/editor",
  USER: "/dashboard/user",
};

// Extend withAuth to include role-based redirection
export default withAuth(
  async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // If user is not authenticated, let withAuth handle it (redirect to login)
    if (!token) return NextResponse.next();

    const userRole = token.role as string;
    const { pathname } = req.nextUrl;

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

export const config = {
  matcher: ["/dashboard/:path*"], // Apply middleware to all dashboard routes
};
