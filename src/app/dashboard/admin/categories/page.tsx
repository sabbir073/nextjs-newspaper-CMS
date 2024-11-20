"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner";

const Categories: React.FC = () => {
  const { data: session, status } = useSession(); // Get session data and status
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      // Redirect to login if the user is not authenticated
      router.replace("/login");
      return;
    } else if (status === "authenticated" && session?.user.role !== "ADMIN") {
      // Redirect to the appropriate role-based dashboard
      router.replace(`/dashboard/${session?.user.role.toLowerCase()}`);
    }
  }, [session, status, router]);

  // Guard rendering: Show loading spinner while the session is loading
  if (status === "loading") {
    return <LoadingSpinner />;
  }

  // Guard rendering: Prevent showing the dashboard content if unauthenticated
  if (status === "unauthenticated" || session?.user.role !== "ADMIN") {
    return null;
  }
  return (
    <DashboardLayout>
      <h6>Categories</h6>
    </DashboardLayout>
  );
};

export default Categories;
