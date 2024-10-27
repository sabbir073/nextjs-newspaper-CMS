// types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";

// Define Role type matching the Prisma schema
export type Role = "ADMIN" | "EDITOR" | "USER";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string; // Ensure id is a string
    role: Role; // Role-based access control
  }

  interface Session {
    user: {
      id: string;
      role: Role;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    role: Role;
  }
}
