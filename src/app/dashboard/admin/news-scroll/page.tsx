/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import { BiEdit } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import DataTable from "react-data-table-component";
import debounce from "lodash.debounce";

type NewsListType = {
  title: string;
  Categories: string;
  Reporter: string;
  Status: string;
  PostedBy: string;
  PublishedBy: string;
  ModifiedBy: string;
  Id: string;
  PosTime: string;
  PublishedTime: string;
  ModifyTime: string;
};

const initialNewsList: NewsListType[] = [
  {
    title: "বোরকা পরে নারীর বেশে ভিক্ষা করছিলেন পুরুষ, অতঃপর..",
    Categories: "ভিন্নরকম",
    Reporter: "ডেস্ক রিপোর্ট",
    Status: "Published",
    PostedBy: "Jahid dsfjkdf",
    PublishedBy: "Jahid",
    ModifiedBy: "Jahid",
    Id: "65fb578345e806a518162d8b",
    PosTime: "2024-03-20T21:42:31.049Z",
    PublishedTime: "2024-03-20T21:42:31.049Z",
    ModifyTime: "2024-03-20T21:42:31.049Z ",
  },
  // Additional entries...
];

const NewsScroll: React.FC = () => {
  const { data: session, status } = useSession(); // Get session data and status
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const [filteredNews, setFilteredNews] = useState(initialNewsList);

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

  const handleSearch = debounce((value: string) => {
    setSearch(value);
  }, 500);

  const columns = [
    {
      name: "ID",
      selector: (row: NewsListType) => row.Id,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row: NewsListType) => row.title,
      sortable: true,
      grow: 0,
    },
    // {
    //   name: "Categories",
    //   selector: (row: NewsListType) => row.Categories,
    //   sortable: true,
    // },
    // {
    //   name: "Reporter",
    //   selector: (row: NewsListType) => row.Reporter || "N/A",
    //   sortable: true,
    //   grow: 0,
    // },
    {
      name: "Status",
      selector: (row: NewsListType) => row.Status || "N/A",
      sortable: true,
    },
    // {
    //   name: "Posted By",
    //   selector: (row: NewsListType) => row.PostedBy || "N/A",
    //   sortable: true,
    // },
    // {
    //   name: "Published By",
    //   selector: (row: NewsListType) => row.PublishedBy || "N/A",
    //   sortable: false,
    // },

    // {
    //   name: "PosTime",
    //   selector: (row: NewsListType) =>
    //     row.PosTime
    //       ? new Date(row.PosTime).toLocaleDateString("en-US", {
    //           day: "numeric",
    //           month: "long",
    //           year: "numeric",
    //         })
    //       : "N/A",
    //   sortable: true,
    // },
    // {
    //   name: "PublishedTime",
    //   selector: (row: NewsListType) =>
    //     row.PublishedTime
    //       ? new Date(row.PublishedTime).toLocaleDateString("en-US", {
    //           day: "numeric",
    //           month: "long",
    //           year: "numeric",
    //         })
    //       : "N/A",
    //   sortable: true,
    // },
    // {
    //   name: "ModifyTime",
    //   selector: (row: NewsListType) =>
    //     row.ModifyTime
    //       ? new Date(row.ModifyTime).toLocaleDateString("en-US", {
    //           day: "numeric",
    //           month: "long",
    //           year: "numeric",
    //         })
    //       : "N/A",
    //   sortable: true,
    // },

    {
      name: "Actions",
      cell: () => (
        <div className="flex space-x-3 text-lg">
          <FaRegEye className="text-green-600 cursor-pointer" />
          <BiEdit className="text-blue-600 cursor-pointer" />
          <MdDelete className="text-red-600 cursor-pointer" />
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      grow: 0,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "rgb(44, 62, 80 / var(--tw-bg-opacity))",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  };

  return (
    <DashboardLayout>
      <div className="w-full flex flex-col md:flex-row space-x-5">
        <div className="w-full md:w-1/3 ">
          <div className="max-w-sm mx-auto bg-white shadow-md rounded-md p-6">
            <form>
              {/* Title Input */}
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="News Title"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Scroll Status Dropdown */}
              <div className="mb-4">
                <label
                  htmlFor="scroll-status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Scroll Status
                </label>
                <select
                  id="scroll-status"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Choose...</option>
                  <option>ON</option>
                  <option>OFF</option>
                </select>
              </div>

              {/* Add Now Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Add Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="w-full bg-white shadow-md rounded-md ">
            <div className="flex flex-col md:flex-row justify-between items-center w-full mt-4 md:mt-0 py-4 px-4 ">
              <h6 className="text-base  text-gray-900">Scroll Items </h6>
              <input
                type="text"
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search..."
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* News Table */}

            {loadingSearch && (
              <p className="text-gray-600 mb-4">Searching...</p>
            )}

            <div className="mt-8 py-3  grid lg:grid-cols-1 grid-cols-1 ">
              <DataTable
                columns={columns}
                data={filteredNews}
                pagination
                highlightOnHover
                pointerOnHover={false}
                responsive
                striped
                customStyles={customStyles}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NewsScroll;
