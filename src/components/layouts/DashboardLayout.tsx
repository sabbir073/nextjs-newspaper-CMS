"use client";

import { ReactNode, useState ,useEffect} from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Footer from "../layout/adminFooter";
import Header from "../layout/adminHeader";
import { usePathname } from "next/navigation";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RiAddCircleLine } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";

import {
  FaBars,
  FaCalendar,
  FaChartPie,
  FaCopy,
  FaFolder,
  FaHome,
  FaTimes,
  FaUsers,
} from "react-icons/fa";

type NavigationItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  current: boolean;
};

type TeamItem = {
  id: number;
  name: string;
  href: string;
  initial: string;
  current: boolean;
};

const navigation = [
  {
    name: "Dashboard",
    href: "/Dashboard",
    icon: FaHome,
  },
 
  {
    name: "View All News",
    href: "/dashboard/admin/viewallnews",
    icon: RxDashboard,
  },
  {
    name: "Add New News",
    href: "/dashboard/admin/addnews",
    icon: RiAddCircleLine,
  },
  {
    name: "News Categories",
    href: "/dashboard",
    icon: HiOutlineShoppingCart,
  },
  { name: "News Scroll", href: "/dashboard", icon: CiViewList },
  { name: "Event News", href: "/dashboard", icon: CiViewList },
  { name: "Featured News", href: "/dashboard", icon: CiViewList },
];



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);


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
    <>
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-gray-900 opacity-75"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div className="relative flex flex-col w-64 bg-white shadow-xl">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-0 right-0 m-4 text-gray-700"
            >
              <FaTimes className="h-6 w-6" />
            </button>
            <div className="flex items-center justify-center h-16">
              <Link href="/">
                <Image
                  className="md:w-[160px] w-[160px] mx-auto ml-0"
                  src={logo}
                  alt="logo"
                  priority={true}
                />
              </Link>
            </div>
            <nav className="mt-5 flex flex-col space-y-4 px-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      isActive
                        ? "bg-gray-50 text-indigo-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                      "flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md"
                    )}
                  >
                    <item.icon className="h-6 w-6 text-gray-400" />
                    {item.name}
                  </Link>
                );
              })}
              


            </nav>
          </div>
        </div>
      )}

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:fixed lg:inset-y-0 lg:w-64 lg:bg-white lg:border-r lg:shadow-lg">
        <div className="flex w-full flex-col h-full">
          <div className="flex items-center justify-center h-16">
            <Link href="/">
              <Image
                className="md:w-[160px] w-[160px] mx-auto ml-0"
                src={logo}
                alt="logo"
                priority={true}
              />
            </Link>
          </div>

          <nav className="flex-1 mt-5 flex flex-col w-full space-y-4 px-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    isActive
                      ? "bg-gray-50 w-full text-indigo-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                    "flex items-center w-full gap-x-3 p-2 text-sm font-semibold rounded-md"
                  )}
                >
                  <item.icon className="h-6 w-6 text-gray-400" />
                  {item.name}
                </Link>
              );
            })}
         
          </nav>
        </div>
      </div>

      {/* Top bar */}
      <div className="lg:hidden flex items-center gap-x-6 bg-white p-4 shadow-md sticky top-0 z-50">
        <button onClick={() => setSidebarOpen(true)} className="text-gray-700">
          <FaBars className="h-6 w-6" />
        </button>
        <div className="flex-1 text-sm font-semibold text-gray-900">
          Dashboard
        </div>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="h-8 w-8 rounded-full bg-gray-50"
        />
      </div>

      {/* Main content area */}
      <main className="lg:pl-64 pt-4 lg:pt-0">
        <Header/>
        <div className="p-4 lg:px-8 lg:py-6">{children}</div>

        <Footer/>
      </main>
    </>
  );
}
