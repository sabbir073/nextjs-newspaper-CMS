"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner"; // Import the spinner

export default function EditorDashboard() {
  const { data: session, status } = useSession(); // Get session status and data
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      // Redirect to login if the user is not authenticated
      router.replace("/login");
      return;
    } else if (status === "authenticated" && session?.user.role !== "EDITOR") {
      // Redirect to the appropriate dashboard based on the user's role
      router.replace(`/dashboard/${session?.user.role.toLowerCase()}`);
    }
  }, [session, status, router]);

  // Display loading spinner while the session is being fetched
  if (status === "loading") {
    return <LoadingSpinner />;
  }

  // Prevent rendering if user is not authenticated or being redirected
  if (status === "unauthenticated" || session?.user.role !== "EDITOR") {
    return null; // Prevent unwanted rendering while redirecting
  }

  return (
    <DashboardLayout>
      <h1>Editor Dashboard</h1>
      <p>Welcome, {session?.user.email}</p>
    </DashboardLayout>
  );
}
