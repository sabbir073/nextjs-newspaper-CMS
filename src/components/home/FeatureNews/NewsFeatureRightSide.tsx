/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Image from "next/image";

import { YouTubeEmbed } from '@next/third-parties/google'

import NewsItem from "./NewsItem";
import Btn from "../../common/Btn";

import Ad from "../../../assets/super-white-ad.webp";

import AreaNews from "../FeatureNews/AreaNews";

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("সর্বশেষ");

  const tabs = [{ name: "সর্বশেষ" }, { name: "পঠিত" }];
  const handleItemClick = (text: string) => {
    alert(`You clicked on: ${text}`);
    // You could also navigate to a new page, fetch more details, etc.
  };

  return (
    <div className="w-full h-full md:pt-2 lg:pt-0 pb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-0 gap-4 lg:flex lg:flex-col">
      <div className="flex items-center justify-center border bg-base-content shadow-md rounded-xl">
        <div className="max-w-[400px] text-white text-2xl py-2 cursor-pointer">
          ভিডিও স্টোরি
        </div>
      </div>
     
      <div className="flex flex-col space-y-1 lg:flex-col md:space-x-0 shadow p-2 rounded">
      <YouTubeEmbed videoid="KVN3fPlA_OU" />
      </div>

      <div className=" max-w-[400px] mx-auto relative right-0 rounded-md shadow-md w-full">
        <ul
          className="relative flex flex-wrap p-2 list-none rounded-t-md bg-slate-100"
          role="list"
        >
          {tabs.map((tab) => (
            <li key={tab.name} className="flex-auto text-center">
              <button
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out rounded-md cursor-pointer ${
                  activeTab === tab.name
                    ? "text-red-800 bg-white shadow-md text-center text-xl font-medium"
                    : "text-slate-600 bg-inherit text-center text-xl font-medium"
                }`}
                role="tab"
                aria-selected={activeTab === tab.name}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="bg-white rounded-md ">
          {activeTab === "সর্বশেষ" && (
            <div className="h-[450px]  overflow-y-auto">
              <NewsItem
                text="মাত্র চার মাস বয়সেই বিলিয়নিয়ার, কে সেই সৌভাগ্যবান শিশু?"
                onClick={() =>
                  handleItemClick(
                    "মাত্র চার মাস বয়সেই বিলিয়নিয়ার, কে সেই সৌভাগ্যবান শিশু?"
                  )
                }
                Icon={true}
              />
              <NewsItem
                text="বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                onClick={() =>
                  handleItemClick(
                    "বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                  )
                }
                Icon={true}
              />
              <NewsItem
                text="বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                onClick={() =>
                  handleItemClick(
                    "বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                  )
                }
                Icon={true}
              />
              <NewsItem
                text="বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                onClick={() =>
                  handleItemClick(
                    "বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                  )
                }
                Icon={true}
              />
              <NewsItem
                text="বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                onClick={() =>
                  handleItemClick(
                    "বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                  )
                }
                Icon={true}
              />
            </div>
          )}
          {activeTab === "পঠিত" && (
            <div className="h-[360px] overflow-y-auto">
              <NewsItem
                text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                onClick={() =>
                  handleItemClick(
                    "মাত্র চার মাস বয়সেই বিলিয়নিয়ার, কে সেই সৌভাগ্যবান শিশু?"
                  )
                }
                Icon={true}
              />
              <NewsItem
                text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                onClick={() =>
                  handleItemClick(
                    "বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                  )
                }
                Icon={true}
              />
            </div>
          )}
        </div>

        <div className="py-4 flex  w-full px-4">
          <Btn text="সর্বশেষ সব খবর" />
        </div>
      </div>

      <div className="max-w-[400px] mx-auto w-full">
      <div className="flex flex-col space-y-1 lg:flex-col md:space-x-0">
        <Image
          width={400}
          height={400}
          src={Ad}
          alt="Blog Image"
          className=" xl:w-full xl:h-full rounded-xl mx-auto bg-gray-50 object-cover "
          priority
        />
      </div>
      </div>


    </div>
  );
};

export default TabComponent;
