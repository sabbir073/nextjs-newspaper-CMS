"use client";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RiAddCircleLine } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";
import logo from '@/assets/logo.png';


const Sidebar = () => {
    const pathname = usePathname();

    // console.log("pathname",pathname);

    const navigation = [
        { name: "View All News", href: "/dashboard/admin/viewallnews", icon: RxDashboard },
        { name: "Add New News", href: "/dashboard/admin/addnews", icon: RiAddCircleLine },
        {
            name: "News Categories",
            href: "/dashboard",
            icon: HiOutlineShoppingCart,
        },
        { name: "News Scroll", href: "/dashboard", icon: CiViewList },
        { name: "Event News", href: "/dashboard", icon: CiViewList },
        { name: "Featured News", href: "/dashboard", icon: CiViewList },
    ];

    const userNavigation = [
        { name: 'Your profile', href: '#' },
        { name: 'Sign out', href: '#' },
      ]

    const renderNavItems = (items: any) =>
        items.map((item: any) => {
            const isActive = pathname === item.href;
            return (
                <li key={item.name}>
                    <a
                        href={item.href}
                        className={classNames(
                            isActive ? "bg-gray-50 text-black" : "",
                            "px-4 text-center  group hover:bg-indigo-50 rounded my-auto py-2 flex text-xs lg:text-sm leading-6 font-semibold"
                        )}
                    >
                        <item.icon
                            className={classNames(
                                isActive
                                    ? "text-indigo-600"
                                    : "text-gray-400 group-hover:text-indigo-600",
                                "w-4 h-4 lg:h-6 lg:w-6 my-auto shrink-0"
                            )}
                            aria-hidden="true"
                        />
                        <span className="my-auto ml-2 lg:ml-4">{item.name}</span>
                    </a>
                </li>
            );
        });

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <div className="dark">
            <nav className="sidebar fixed top-0 bottom-0 z-50 h-full w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 text-white-dark">
                <div className="h-full bg-white dark:bg-black flex flex-col">
                    <div className="flex items-center justify-between px-4 py-3">
                        <Link href='/'><Image className='md:w-[160px] w-[160px] mx-auto ml-0' src={logo} alt='logo' priority={true} /></Link>
                        <button
                            type="button"
                            className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
                        // onClick={() => dispatch(toggleSidebar())}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto h-5 w-5">
                                <path d="M13 19L7 12L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Scrollable content using native CSS */}
                    <div className="overflow-y-auto overflow-x-hidden flex-1 pr-4 border-r w-full">
                        <div className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                {/* News Section */}
                                <li>
                                    <h2 className="-mx-4 mb-1 flex items-center bg-gray-100 py-3 px-7 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                        <span>{"News"}</span>
                                    </h2>
                                    <ul role="list" className="space-y-2">
                                        {renderNavItems(navigation)}
                                    </ul>
                                </li>

                                {/* Galleries Section */}
                                {/* <li>
                                    <h2 className="-mx-4 mb-1 flex items-center bg-red-100 py-3 px-7 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                        <span>{"Galleries"}</span>
                                    </h2>
                                    <ul role="list" className="space-y-2">
                                        {renderNavItems(navigation)}
                                    </ul>
                                </li> */}


                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;