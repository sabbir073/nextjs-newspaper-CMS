// types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";

// Define Role type matching the Prisma schema
export type Role = "ADMIN" | "EDITOR" | "USER";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    role: Role;
    display_name: string; // Add display_name to User
  }

  interface Session {
    user: {
      id: string;
      role: Role;
      display_name: string; // Add display_name to Session
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    role: Role;
    display_name: string; // Add display_name to JWT
  }
}
