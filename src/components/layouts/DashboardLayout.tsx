"use client";
import { ReactNode, useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {
  FiHome,
  FiList,
  FiPlusSquare,
  FiX,
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";
import { FaUserCircle, FaRegNewspaper } from "react-icons/fa";
import { PiNewspaper } from "react-icons/pi";

import { LuBoxSelect } from "react-icons/lu";

import LoadingSpinner from "@/components/LoadingSpinner";
import Footer from "../layout/adminFooter";
import { usePathname } from "next/navigation";

interface User {
  role: string;
  display_name: string;
}

interface SessionType {
  user: User;
}

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const pathname = usePathname();
  // Redirect if not logged in
  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Type assertion for session data
  const typedSession = session as SessionType | null;

  // Define role-based menu items
  const menuItems = useMemo(() => {
    if (status === "authenticated" && typedSession?.user.role) {
      const basePath = `/dashboard/${typedSession.user.role.toLowerCase()}`;
      const items = [
        { title: "Dashboard", icon: FiHome, path: `${basePath}` },
        // { title: "Lists", icon: FiList, path: `${basePath}/lists` },
      ];

      if (typedSession.user.role === "ADMIN") {
        items.push({
          title: "views-all-news",
          icon: FiList,
          path: `${basePath}/views-all-news`,
        });
        items.push({
          title: "Add News",
          icon: FiPlusSquare,
          path: `${basePath}/add-news`,
        });
        items.push({
          title: "News Categories",
          icon: LuBoxSelect,
          path: `${basePath}/categories`,
        });
        items.push({
          title: "News Scroll",
          icon: FaRegNewspaper,
          path: `${basePath}/news-scroll`,
        });

        items.push({
          title: "Event News",
          icon: FaRegNewspaper,
          path: `${basePath}/event-news`,
        });
        items.push({
          title: "featured-news",
          icon: PiNewspaper,
          path: `${basePath}/featured-news`,
        });
      }

      return items;
    }
    return [];
  }, [status, typedSession]);

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "authenticated" && typedSession) {
    const { user } = typedSession;

    return (
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 z-50 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <div className="p-6 pt-4 flex justify-between items-center">
            <button
              onClick={toggleSidebar}
              className="md:hidden text-white focus:outline-none"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Role-based Dashboard Label */}
          <div className="px-8 pb-3 text-gray-300 text-lg  font-normal">
          Hi, {session?.user.display_name}
          </div>
          {/* Sidebar Menu */}
          {/* <div className={`bg-gray-500   flex items-cente  py-2 `}>
            <h1 className="my-auto text-cente mt-1.5 ml-5  font-normal">
              {" "}
              NEWS{" "}
            </h1>
          </div> */}

          <nav className="space-y-1 px-4 ">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.title}
                  href={item.path}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-white text-gray-900 shadow-md"
                      : "bg-transparent text-gray-50 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 transition-colors duration-200 ${
                      isActive
                        ? "text-gray-900"
                        : "text-gray-50 group-hover:text-gray-900"
                    }`}
                  />
                  <span className="text-sm font-normal">{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 ml-0 md:ml-64 flex flex-col min-h-screen">
          {/* Header */}
          <header className="flex items-center justify-between bg-white py-4 px-4 md:px-8 ">
            <button
              onClick={toggleSidebar}
              className="md:hidden  focus:outline-none"
            >
              <FiMenu size={24} />
            </button>

            <span className="hidden md:block md:text-base  font-normal">
              {user.role} Dashboard
            </span>

            <div className="mx-auto">
              <input
                type="text"
                placeholder="Type to search..."
                className="w-64 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-gray-100 text-black"
              />
            </div>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 focus:outline-none"
              >
                <FaUserCircle size={24} />
                <FiChevronDown size={20} />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow-lg z-20">
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </header>

          <main className="flex-1 p-6 bg-gray-100">{children}</main>

          <Footer />
        </div>
      </div>
    );
  }
  return null;
}
