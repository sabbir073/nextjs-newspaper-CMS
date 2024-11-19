"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import { BiEdit } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Pagination from "../../../../components/common/Pagination";

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
  const [searchTerm, setSearchTerm] = useState("");

  const [sortConfig, setSortConfig] = useState<{
    key: keyof NewsListType;
    direction: "asc" | "desc";
  } | null>(null);
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
  useEffect(() => {
    let sortedNews = [...initialNewsList];

    // Filter news based on search term
    if (searchTerm) {
      sortedNews = sortedNews.filter((news) =>
        Object.values(news).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Sort news based on sortConfig
    if (sortConfig) {
      sortedNews.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key])
          return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key])
          return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    setFilteredNews(sortedNews);
  }, [searchTerm, sortConfig]);

  // Guard rendering: Show loading spinner while the session is loading
  if (status === "loading") {
    return <LoadingSpinner />;
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key: keyof NewsListType) => {
    setSortConfig((prevSortConfig) => {
      if (prevSortConfig && prevSortConfig.key === key) {
        return {
          key,
          direction: prevSortConfig.direction === "asc" ? "desc" : "asc",
        };
      } else {
        return { key, direction: "asc" };
      }
    });
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
          <div className=" w-full">
            <div className="flex flex-col md:flex-row justify-between items-center w-full mt-4 md:mt-0">
              <h6 className="text-base  text-gray-900">Scroll Items </h6>

              <input
                type="text"
                placeholder="Search by title, ID, etc."
                className="border border-gray-300 rounded-md p-2 w-full lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            {/* News Table */}
            <div className=" py-3  grid lg:grid-cols-1 grid-cols-1 ">
              <div className=" overflow-x-auto  ">
                <div className="inline-block  py-2 align-middle ">
                  <div className="overflow-hidden ring-1 ring-black ring-opacity-5 shadow-md rounded-md ">
                    <table className="min-w-full divide-y divide-gray-300 ">
                      <thead className="bg-gray-50">
                        <tr>
                          {["ID", "Title", "Status"].map((heading, index) => (
                            <th
                              key={index}
                              onClick={() =>
                                handleSort(heading as keyof NewsListType)
                              }
                              className="px-3 min-w-[150px] py-3.5 text-left  text-gray-600"
                            >
                              <h6> {heading}</h6>
                            </th>
                          ))}
                          <th className="px-3 py-3.5 text-left  text-gray-700">
                            Action
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-100 bg-white">
                        {filteredNews.map((news) => (
                          <tr key={news.Id} className="hover:bg-gray-50">
                            <td className=" whitespace-nowrap py-4 pl-4 pr-3 text-lg font-medium text-gray-900 lg:pl-6">
                              {news.Id}
                            </td>
                            <td className=" whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                              {news.title}
                            </td>

                            <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                              {news.Status}
                            </td>

                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-lg font-medium lg:pr-6">
                              <div className="flex space-x-3">
                                <BiEdit className="w-6 h-6 cursor-pointer" />
                                <MdDelete className="w-6 h-6 cursor-pointer" />
                                <FaRegEye className="w-6 h-6 cursor-pointer" />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NewsScroll;
