"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Footer from "../layout/adminFooter";
import Header from "../layout/adminHeader";
import Sidebar from '../common/Sidebar'
interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Wait for session to load

    if (status === "unauthenticated") {
      router.push("/login"); // Redirect if not logged in
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (

    <div className="dashboard-layout">

      <div className="dashboard-layout">
        <Header />
        <div className="py-6 sm:py-6 max-w-7x mx-auto md:flex ">
          <div className="hidden md:block w-[25%] ">
            <Sidebar />
          </div>
          <main className="w-full">
            {/* <p>Welcome, {session?.user.email}</p> */}
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>

  );
}


