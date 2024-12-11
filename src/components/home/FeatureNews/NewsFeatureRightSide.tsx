"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { YouTubeEmbed } from "@next/third-parties/google";

import NewsItem from "./NewsItem";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Btn from "../../common/Btn";

import Ad from "../../../assets/super-white-ad.webp";

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


  const tabs = [{ name: "সর্বশেষ" }, { name: "পঠিত" }];

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleItemClick = (text: string) => {
    alert(`You clicked on: ${text}`);
  };

  return (
    <div className="w-full h-full md:pt-2 lg:pt-0 pb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:flex lg:flex-col">
      {/* Video Story Section */}
      <div className="shadow-md">
        <div className="bg-base-content text-white text-xl md:text-2xl p-2 text-center rounded-t-xl rounded-xl my-2 lg:my-0">
          ভিডিও স্টোরি
        </div>
        <div className="flex flex-col py-3">
          {videoUrl ? (
            <YouTubeEmbed videoid={videoUrl} />
          ) : (
            <div/>
          )}
        </div>

        {/* Ad Section for Tablet */}
        <div className="shadow-md rounded-xl hidden sm:block md:block lg:hidden mt-1">
          <Image
            width={250}
            height={250}
            src={Ad}
            alt="Ad"
            className="rounded-xl object-cover w-full"
            priority
          />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="relative shadow-md rounded-md">
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
                    ? "text-red-800 bg-white shadow-md text-xl font-medium"
                    : "text-slate-600 bg-inherit text-xl font-medium"
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
            <div className="h-[490px] overflow-y-auto p-2">
              {latestNews.length > 0 ? (
                latestNews.map((news) => (
                  <NewsItem
                    key={news.id}
                    text={news.title}
                    onClick={() => handleItemClick(news.title)}
                    Icon={true}
                  />
                ))
              ) : (
                <div/>
              )}
            </div>
          )}
          {activeTab === "পঠিত" && (
            <div className="h-[490px] overflow-y-auto p-2">
              <NewsItem
                text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                onClick={() =>
                  handleItemClick(
                    "৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                  )
                }
                Icon={true}
              />
            </div>
          )}
        </div>
      </div>

      {/* Ad Section for Desktop and Mobile */}
      <div className="shadow-md rounded-xl block md:hidden sm:hidden lg:block">
        <Image
          width={250}
          height={250}
          src={Ad}
          alt="Ad"
          className="rounded-xl object-cover w-full sm:w-[300px] sm:h-[300px]"
          priority
        />
      </div>
    </div>
  );
};

export default NewsFeatureRightSide;
