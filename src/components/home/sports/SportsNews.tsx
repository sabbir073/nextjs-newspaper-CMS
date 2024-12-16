"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import BodyContainer from "../../common/BodyContainer";
import NewsCard from "../FeatureNews/NewsCard";
import NewsCardHorizontal from "../HorizontalCard";
import ShortNewsCard from "../FeatureNews/ShortNewsCard";
import SideAds from "../../../assets/sideAd.png";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  description?: string;
  highlight_text?: string;
  featured_image?: string;
}

const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

const SportsNewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1); // Default active tab is সারাদেশ
  const [newsData, setNewsData] = useState<{ [key: number]: NewsItem[] }>({});
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Toggle for mobile menu

  const categories = [
    { id: 1, name: "সারাদেশ" },
    { id: 2, name: "ঢাকা" },
    { id: 3, name: "চট্টগ্রাম" },
    { id: 4, name: "খুলনা" },
    { id: 5, name: "বরিশাল" },
    { id: 6, name: "রাজশাহী" },
    { id: 7, name: "রংপুর" },
    { id: 8, name: "ময়মনসিংহ" },
    { id: 9, name: "সিলেট" },
  ];

  const fetchCategoryNews = useCallback(
    async (categoryId: number) => {
      if (newsData[categoryId]) return; // Skip API call if data is already cached

      setLoading(true);
      try {
        const response = await fetch(`/api/public/news/category?categoryId=${categoryId}&newsItem=9&video=false`);
        if (!response.ok) throw new Error(`Failed to fetch news for category ${categoryId}`);
        const data: NewsItem[] = await response.json();
        setNewsData((prevData) => ({ ...prevData, [categoryId]: data }));
      } catch (error) {
        console.error(`Error fetching news for category ${categoryId}:`, error);
      } finally {
        setLoading(false);
      }
    },
    [newsData]
  );

  useEffect(() => {
    // Fetch data for the default active tab
    fetchCategoryNews(activeTab);
  }, [activeTab, fetchCategoryNews]);

  const handleTabClick = (categoryId: number) => {
    setActiveTab(categoryId);
    fetchCategoryNews(categoryId); // Fetch data for the selected category if not already fetched
    setShowMenu(false); // Hide the menu on mobile after selecting a tab
  };

  return (
    <BodyContainer>
      {/* Tabs Section */}
      <div className="flex flex-wrap items-center border bg-base-content shadow-md rounded-xl py-1 my-3 gap-2 px-4">
        <button
          onClick={() => handleTabClick(1)}
          className={`text-white text-2xl px-4 cursor-pointer ${
            activeTab === 1 ? "bg-gray-700 rounded-md" : ""
          }`}
        >
          সারাদেশ
        </button>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex-1 text-right">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-white text-xl p-2"
          >
            <FaBars />
          </button>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:flex gap-2">
          {categories.slice(1).map((category) => (
            <button
              key={category.id}
              onClick={() => handleTabClick(category.id)}
              className={`text-white text-xl px-3 mx-3 cursor-pointer ${
                activeTab === category.id ? "bg-gray-700 rounded-md" : ""
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="lg:hidden flex flex-col gap-2 bg-gray-800 text-white rounded-md p-4">
          {categories.slice(1).map((category) => (
            <button
              key={category.id}
              onClick={() => handleTabClick(category.id)}
              className={`text-xl ${
                activeTab === category.id ? "bg-gray-700 rounded-md" : ""
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}

      {/* Loading Indicator */}
      {loading && <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>}
      

      {/* Content Section */}
      {!loading && newsData[activeTab] && (
        <div className="lg:flex space-y-4 md:space-y-4 lg:space-y-0 pt-4 lg:space-x-4">
          <div className="w-full lg:w-1/3">
            {/* Left Side */}
            {newsData[activeTab]?.[0] && (
              <>
                <Link href={`/news/details/${newsData[activeTab][0].id}`} passHref key={newsData[activeTab][0].id}>
                  <NewsCard
                    title={newsData[activeTab][0].title}
                    description={newsData[activeTab][0]?.description}
                    imageSrc={`${imageBaseURL}/${newsData[activeTab][0]?.featured_image}`}
                    highlight={newsData[activeTab][0]?.highlight_text}
                    clamp={3}
                    maxLength={150}
                  />
                </Link>
                {/* Ad Section */}
                <div className="hidden w-full lg:block mt-4">
                  <Image
                    src="https://placehold.co/400X80/png"
                    alt="Advertisement"
                    width={450}
                    height={100}
                    className="rounded-md shadow-md"
                    priority
                  />
                </div>
              </>
            )}
          </div>

          <div className="block lg:w-2/3 bg-red-40 md:flex">
            {/* Right Side */}
            <div className="w-full md:w-[60%] lg:w-[60%] xl:w-full">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-2">
                  {newsData[activeTab]?.slice(1, 3).map((newsItem) => (
                    <Link href={`/news/details/${newsItem.id}`} passHref key={newsItem.id}>
                      <ShortNewsCard
                        title={newsItem.title}
                        imageSrc={`${imageBaseURL}/${newsItem?.featured_image}`}
                        highlight={newsItem?.highlight_text}
                      />
                    </Link>
                  ))}
                </div>
                <Image
                  width={400}
                  height={400}
                  src={SideAds}
                  alt="Blog Image"
                  className="hidden md:flex md:w-[100px] lg:w-[90px] xl:w-[110px] object-fill mb-4"
                  priority
                />
              </div>
            </div>

            <div className="w-full md:w-[50%] lg:w-[40%] xl:w-full grid grid-cols-1 md:pt-0 md:pl-4">
              {newsData[activeTab]?.slice(3).map((newsItem) => (
                <Link href={`/news/details/${newsItem.id}`} passHref key={newsItem.id}>
                  <NewsCardHorizontal
                    imageSrc={`${imageBaseURL}/${newsItem?.featured_image}`}
                    highlight={newsItem?.highlight_text}
                    title={newsItem.title}
                    right={false}
                    left={false}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </BodyContainer>
  );
};

export default SportsNewsSection;
