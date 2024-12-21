/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import NewsCard from "../FeatureNews/NewsCard";
import NewsItem2 from "../FeatureNews/NewsItem2";
import BodyContainer from "@/components/common/BodyContainer";
import Link from "next/link";

const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface NewsItem {
  id: number;
  title: string;
  highlight_text?: string;
  featured_image?: string;
}

const LifestyleNews: React.FC = () => {
  const [healthNews, setHealthNews] = useState<NewsItem[]>([]);
  const [lifestyleNews, setLifestyleNews] = useState<NewsItem[]>([]);
  const [expatNews, setExpatNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (hasFetched) return;

    const fetchCategoryNews = async (categoryId: number, limit: number) => {
      try {
        const response = await fetch(`/api/public/news/category`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryId: categoryId,
            newsItem: limit,
            video: false,
          }),
        });

        if (!response.ok) throw new Error(`Failed to fetch news for category ${categoryId}`);
        const data: NewsItem[] = await response.json();
        return data;
      } catch (error) {
        console.error(`Error fetching news for category ${categoryId}:`, error);
        return [];
      }
    };

    const fetchAllNews = async () => {
      const [healthData, lifestyleData, expatData] = await Promise.all([
        fetchCategoryNews(1, 4), // Health category ID
        fetchCategoryNews(2, 4), // Lifestyle category ID
        fetchCategoryNews(3, 4), // Expatriate category ID
      ]);

      setHealthNews(healthData);
      setLifestyleNews(lifestyleData);
      setExpatNews(expatData);
      setHasFetched(true);
      setLoading(false);
    };

    fetchAllNews();
  }, [hasFetched]);

  if (loading) {
    return null;
  }

  const renderCategorySection = (title: string, link: string, news: NewsItem[]) => (
    <div className="w-full sm:pt-">
      <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1 my-2 sm:my-0">
        <Link href={link} passHref>
          <div className="text-white text-2xl px-4 ml-4 cursor-pointer">{title}</div>
        </Link>
      </div>

      <div className="space-y-2 sm:mt-4">
        {/* First News Item */}
        {news[0] && (
          <Link href={`/news/details/${news[0].id}`} passHref>
            <NewsCard
              title={news[0].title}
              imageSrc={`${imageBaseURL}/${news[0].featured_image}`}
              highlight={news[0].highlight_text || ""}
              onClick={() => {}}
            />
          </Link>
        )}

        {/* Bottom News Items */}
        <div className="space-y-4">
          {news.slice(1).map((item) => (
            <Link href={`/news/details/${item.id}`} key={item.id} passHref>
              <NewsItem2
                text={item.title}
                highlight={item.highlight_text || ""}
                Icon={false}
                onClick={() => {}}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <BodyContainer>
      <div className="pt-5 md:pt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First Two Categories */}
        <div className="col-span-1">{renderCategorySection("স্বাস্থ্য", "/category/health", healthNews)}</div>
        <div className="col-span-1">{renderCategorySection("লাইফস্টাইল", "/category/lifestyle", lifestyleNews)}</div>
        
        {/* Third Category */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">{renderCategorySection("প্রবাসে বাংলাদেশ", "/category/expat", expatNews)}</div>
      </div>
    </BodyContainer>
  );
};

export default LifestyleNews;
