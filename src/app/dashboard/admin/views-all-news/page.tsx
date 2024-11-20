/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";

import DataTable from "react-data-table-component";
import debounce from "lodash.debounce";

interface NewsListType {
  Id: string;
  title: string;
  Categories: string;
  Reporter: string;
  Status: string;
  PostedBy: string;
  PublishedBy: string | null;
  ModifiedBy: string;
  PosTime: string | null;
  PublishedTime: string | null;
  ModifyTime: string | null;
}

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

export default function AdminDashboardAllNews() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [filteredNews, setFilteredNews] = useState(initialNewsList);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    } else if (status === "authenticated" && session?.user.role !== "ADMIN") {
      router.replace(`/dashboard/${session?.user.role.toLowerCase()}`);
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "unauthenticated" || session?.user.role !== "ADMIN") {
    return null;
  }

  const handleSearch = debounce((value: string) => {
    setSearch(value);
  }, 500);

  const columns = [
    {
      name: "Title",
      selector: (row: NewsListType) => row.title,
      sortable: true,
      grow: 0,
    },
    {
      name: "Categories",
      selector: (row: NewsListType) => row.Categories,
      sortable: true,
    },
    {
      name: "Reporter",
      selector: (row: NewsListType) => row.Reporter || "N/A",
      sortable: true,
      grow: 0,
    },
    {
      name: "Status",
      selector: (row: NewsListType) => row.Status || "N/A",
      sortable: true,
    },
    {
      name: "Posted By",
      selector: (row: NewsListType) => row.PostedBy || "N/A",
      sortable: true,
    },
    {
      name: "Published By",
      selector: (row: NewsListType) => row.PublishedBy || "N/A",
      sortable: false,
    },
    {
      name: "ID",
      selector: (row: NewsListType) => row.Id,
      sortable: true,
    },

    {
      name: "PosTime",
      selector: (row: NewsListType) =>
        row.PosTime
          ? new Date(row.PosTime).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "N/A",
      sortable: true,
    },
    {
      name: "PublishedTime",
      selector: (row: NewsListType) =>
        row.PublishedTime
          ? new Date(row.PublishedTime).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "N/A",
      sortable: true,
    },
    {
      name: "ModifyTime",
      selector: (row: NewsListType) =>
        row.ModifyTime
          ? new Date(row.ModifyTime).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "N/A",
      sortable: true,
    },

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
      <div className=" w-full">
        <div className="lg:flex lg:items-center w-full">
          <div className="lg:flex-auto">
            <h6 className="text-base  text-gray-900">All News</h6>
          </div>

          <div className="mt-2 mb-4 md:mb-0 lg:flex-none">
            <Link
              href={"/dashboard/admin/add-news"}
              className="block rounded-md shadow-md bg-white   px-3 py-2 text-center   text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add News
            </Link>
          </div>
        </div>
        {/* Search Input */}
        <div className=" mb-4">
          <input
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search..."
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* News Table */}
        {loadingSearch && <p className="text-gray-600 mb-4">Searching...</p>}

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
    </DashboardLayout>
  );
}
