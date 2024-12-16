/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { YouTubeEmbed } from "@next/third-parties/google";

import NewsItem from "./NewsItem";

import Ad from "../../../assets/super-white-ad.webp";

import TailwindDatePicker from "../../common/Datepicker";

interface LatestNews {
  id: number;
  title: string;
}

const NewsFeatureRightSide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("সর্বশেষ");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [latestNews, setLatestNews] = useState<LatestNews[]>([]);
  const [hasFetchedVideoStory, setHasFetchedVideoStory] = useState(false);
  const [hasFetchedLatestNews, setHasFetchedLatestNews] = useState(false);
  const router = useRouter(); // Next.js router for navigation

  const [selectedDate, setSelectedDate] = useState<any>(null);

  
  const tabs = [{ name: "সর্বশেষ" }, { name: "জনপ্রিয়" }];

  const fetchVideoStory = async () => {
    if (hasFetchedVideoStory) return; // Skip fetch if already fetched
    try {
      const response = await fetch("/api/public/video-story");
      if (response.ok) {
        const data = await response.json();
        setVideoUrl(data.video_url);
      } else {
        console.error("Failed to fetch video story.");
      }
    } catch (error) {
      console.error("Error fetching video story:", error);
    } finally {
      setHasFetchedVideoStory(true); // Mark as fetched
    }
  };

  const fetchLatestNews = async () => {
    if (hasFetchedLatestNews) return; // Skip fetch if already fetched
    try {
      const response = await fetch("/api/public/latest-news");
      if (response.ok) {
        const data = await response.json();
        setLatestNews(data);
      } else {
        console.error("Failed to fetch latest news.");
      }
    } catch (error) {
      console.error("Error fetching latest news:", error);
    } finally {
      setHasFetchedLatestNews(true); // Mark as fetched
    }
  };

  useEffect(() => {
    fetchVideoStory();
    fetchLatestNews();
  }, []);

  const handleDateSubmit = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toString(); // Parse and convert date to string
      alert("You have selected:" + formattedDate);
      //router.push(`/archive/${formattedDate}`); // Navigate without reloading the page
    }
  };

  return (
    <div className="w-full h-full md:pt-2 lg:pt-0 pb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:flex lg:flex-col">
      {/* Video Story Section */}
      <div className="shadow-md px-2">
        <div className="bg-base-content text-white text-xl md:text-2xl p-2 text-center rounded-t-xl rounded-xl my-2 lg:my-0">
          ভিডিও স্টোরি
        </div>
        <div className="flex flex-col py-3 px-1">
          {videoUrl ? (
            <YouTubeEmbed videoid={videoUrl} />
          ) : (
            <div />
          )}
        </div>

        {/* Ad Section for Tablet */}
        <div className="hidden sm:block md:block lg:hidden mt-1">
          <center>
            <Image
              width={250}
              height={220}
              src={Ad}
              alt="Ad"
              className="object-cover w-[250px] h-[220px]"
              priority
              quality={100}
            />
          </center>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="relative shadow-md rounded-md px-1 pb-3">
        <ul
          className="flex justify-between bg-slate-100 rounded-t-md p-2"
          role="list"
        >
          {tabs.map((tab) => (
            <li key={tab.name} className="flex-auto text-center">
              <button
                onClick={() => setActiveTab(tab.name)}
                className={`w-full px-2 py-2 rounded-md ${
                  activeTab === tab.name
                    ? "text-red-800 bg-white shadow-md text-2xl font-medium"
                    : "text-slate-600 bg-inherit text-2xl font-medium"
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
        <div className="bg-white rounded-b-md">
          {activeTab === "সর্বশেষ" && (
            <div className="h-[350px] overflow-y-auto p-2">
              {latestNews.length > 0 ? (
                latestNews.map((news) => (
                  <Link href={`/news/details/${news.id}`} key={news.id} passHref>
                    <NewsItem text={news.title} Icon={true} />
                  </Link>
                ))
              ) : (
                <div />
              )}
            </div>
          )}
          {activeTab === "জনপ্রিয়" && (
            <div className="h-[350px] overflow-y-auto p-2">
              <NewsItem
                text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                Icon={true}
              />
            </div>
          )}
        </div>

        <Link href="/latest" passHref>
          <button className="btn w-full btn-outline text-xl font-medium mt-3">
            সর্বশেষ সব খবর
          </button>
        </Link>
      </div>

      {/* Ad Section for Desktop and Mobile */}
      <div className="block md:hidden sm:hidden lg:block">
        <center>
          <Image
            width={250}
            height={220}
            src={Ad}
            alt="Ad"
            className="object-cover w-[250px] h-[220px]"
            priority
          />
        </center>
      </div>

      {/* Archive Section */}
      <TailwindDatePicker />


    </div>
  );
};

export default NewsFeatureRightSide;
