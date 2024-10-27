"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner"; // Import spinner

export default function UserDashboard() {
  const { data: session, status } = useSession(); // Fetch session data and status
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      // Redirect to login if the user is not authenticated
      router.replace("/login");
      return;
    }
    
    if (status === "authenticated" && session?.user.role !== "USER") {
      // Redirect to the correct role-based dashboard if role is mismatched
      router.replace(`/dashboard/${session?.user.role.toLowerCase()}`);
    }
  }, [session, status, router]);

  // Display spinner while session is being fetched
  if (status === "loading") {
    return <LoadingSpinner />;
  }

  // Prevent rendering if session state is unauthenticated or user role is incorrect
  if (status === "unauthenticated" || session?.user.role !== "USER") {
    return null;
  }

  return (
    <DashboardLayout>
      <h1>User Dashboard</h1>
      <p>Welcome, {session?.user.email}</p>
    </DashboardLayout>
  );
}
