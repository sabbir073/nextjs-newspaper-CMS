"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner"; // Import the spinner

import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";

import Pagination from '../../../../components/common/Pagination'



type NewsListType = {
  title: string;
  Categories: string;
  Reporter: string;
  Status: string;
  PostedBy: string;
  PublishedBy: string;
  ModifiedBy: string;
  ID: string;
  PosTime: string;
  PublishedTime: string;
  ModifyTime: string;
};

const NewsList: NewsListType[] = [
  {
    title: "বোরকা পরে নারীর বেশে ভিক্ষা করছিলেন পুরুষ, অতঃপর..",
    Categories: "ভিন্নরকম",
    Reporter: "ডেস্ক রিপোর্ট",
    Status: "Published",
    PostedBy: "Jahid dsfjkdf",
    PublishedBy: "Jahid",
    ModifiedBy: "Jahid",
    ID: "65fb578345e806a518162d8b",
    PosTime: "2024-03-20T21:42:31.049Z",
    PublishedTime: "2024-03-20T21:42:31.049Z",
    ModifyTime: "2024-03-20T21:42:31.049Z ",
  },
  {
    title: "বোরকা পরে নারীর বেশে ভিক্ষা করছিলেন পুরুষ, অতঃপর..",
    Categories: "ভিন্নরকম",
    Reporter: "ডেস্ক রিপোর্ট",
    Status: "Published",
    PostedBy: "Jahid dsfjkdf",
    PublishedBy: "Jahid",
    ModifiedBy: "Jahid",
    ID: "65fb578345e806a518162d8b",
    PosTime: "2024-03-20T21:42:31.049Z",
    PublishedTime: "2024-03-20T21:42:31.049Z",
    ModifyTime: "2024-03-20T21:42:31.049Z ",
  },
  {
    title: "বোরকা পরে নারীর বেশে ভিক্ষা করছিলেন পুরুষ, অতঃপর..",
    Categories: "ভিন্নরকম",
    Reporter: "ডেস্ক রিপোর্ট",
    Status: "Published",
    PostedBy: "Jahid dsfjkdf",
    PublishedBy: "Jahid",
    ModifiedBy: "Jahid",
    ID: "65fb578345e806a518162d8b",
    PosTime: "2024-03-20T21:42:31.049Z",
    PublishedTime: "2024-03-20T21:42:31.049Z",
    ModifyTime: "2024-03-20T21:42:31.049Z ",
  },
];

export default function AdminDashboardAllNews() {
  const { data: session, status } = useSession(); // Get session data and status
  const router = useRouter();

  // console.log("session news",session);

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
      <div className="w-full">
        <div className="px-4  ">
          <div className="lg:flex lg:items-center">
            <div className="lg:flex-auto">
              <h1 className="text-base font-semibold text-gray-900">
                All News
              </h1>
            </div>
            <div className="mt-4 lg:ml-16 lg:mt-0 lg:flex-none">
              <button
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add News
              </button>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto  lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle  lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 lg:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 lg:pl-6"
                        >
                          Categories
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                        >
                          Reporter
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5  text-left text-lg font-semibold text-gray-900"
                        >
                          Posted By
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                        >
                          Published By
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                        >
                          Modified By
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                        >
                          PosTime
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                        >
                          PublishedTime
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                        >
                          ModifyTime
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 lg:pr-6"
                        >
                          <span className="">Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {NewsList.map((person) => (
                        <tr key={person.Reporter}>
                          <td className="min-w-32 whitespace-nowrap py-4 pl-4 pr-3 text-lg font-medium text-gray-900 lg:pl-6">
                            {person.title}
                          </td>
                          <td className="min-w-32 whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                            {person.Categories}
                          </td>
                          <td className="min-w-32 whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                            {person.Reporter}
                          </td>
                          <td className=" min-w-32 whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                            {person.Status}
                          </td>
                          <td className=" min-w-32 whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                            {person.PostedBy}
                          </td>
                          <td className=" min-w-32 whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                            {person.PublishedBy}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                            {person.ID}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                            {person.PosTime}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                            {person.PublishedTime}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                            {person.ModifyTime}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                            {person.ModifyTime}
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
        </div>

        <Pagination />
      </div>
    </DashboardLayout>
  );
}
