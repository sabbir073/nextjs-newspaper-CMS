
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {  useEffect, useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import Pagination from "../../../../components/common/Pagination";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";
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

export default function AdminDashboardAllNews() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof NewsListType;
    direction: "asc" | "desc";
  } | null>(null);
  const [filteredNews, setFilteredNews] = useState(initialNewsList);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    } else if (status === "authenticated" && session?.user.role !== "ADMIN") {
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

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "unauthenticated" || session?.user.role !== "ADMIN") {
    return null;
  }

  return (
    <DashboardLayout>
      <div className=" w-full">
        <div className="lg:flex lg:items-center w-full">
          <div className="lg:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">All News</h1>
          </div>
          <div className="mt-2 mb-4 md:mb-0 lg:flex-none">
            <Link
            href={"/dashboard/admin/add-news"}
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add News
            </Link>
          </div>
        </div>
        {/* Search Input */}
        <div className=" mb-4">
          <input
            type="text"
            placeholder="Search by title, ID, etc."
            className="border border-gray-300 rounded-md p-2 w-full lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* News Table */}     
         <div className="mt-8 py-3  grid lg:grid-cols-1 grid-cols-1 ">
          <div className=" overflow-x-auto  ">
            <div className="inline-block  py-2 align-middle ">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 lg:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 ">
                  <thead className="bg-gray-50">
                    <tr>
                      {[
                        "Title",
                        "Categories",
                        "Reporter",
                        "Status",
                        "Posted By",
                        "Published By",
                        "ID",
                        "PosTime",
                        "PublishedTime",
                        "ModifyTime",
                      ].map((heading, index) => (
                        <th
                          key={index}
                          onClick={() =>
                            handleSort(heading as keyof NewsListType)
                          }
                          className="px-3 min-w-[150px] py-3.5 text-left text-lg font-semibold text-gray-900"
                        >
                          {heading}
                        </th>
                      ))}
                      <th className="px-3 py-3.5 text-left font-semibold text-gray-700">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100 bg-white">
                    {filteredNews.map((news) => (
                      <tr key={news.Id} className="hover:bg-gray-50">
                        <td className=" whitespace-nowrap py-4 pl-4 pr-3 text-lg font-medium text-gray-900 lg:pl-6">
                          {news.title}
                        </td>
                        <td className=" whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                          {news.Categories}
                        </td>
                        <td className=" whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                          {news.Reporter}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                          {news.Status}
                        </td>
                        <td className=" whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                          {news.PostedBy}
                        </td>
                        <td className="  whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                          {news.PublishedBy}
                        </td>
                        <td className=" whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                          {news.Id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                          {news.PosTime}
                        </td>
                        <td className=" whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                          {news.PublishedTime}
                        </td>
                        <td className=" whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                          {news.ModifyTime}
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
              </div>
            </div>
          </div>
        </div> 


        <Pagination />
      </div>
    </DashboardLayout>
  );
}





