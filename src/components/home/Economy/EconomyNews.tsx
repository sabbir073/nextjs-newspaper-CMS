/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import BodyContainer from "../../common/BodyContainer";
import NewsCardHorizontal from "../HorizontalCard";
import NewsCard from "../FeatureNews/NewsCard";
import Link from "next/link";
import NewsItem2 from "../FeatureNews/NewsItem2";

const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface NewsItem {
  id: number;
  title: string;
  description?: string;
  highlight_text?: string;
  featured_image?: string;
}

const EcomomyNews: React.FC = () => {
  const [featureNews, setFeatureNews] = useState<NewsItem[]>([]);
  const [entertainmentNews, setEntertainmentNews] = useState<NewsItem[]>([]);
  const [deviceType, setDeviceType] = useState<string>("desktop");
  const [hasFetched, setHasFetched] = useState(false);
  const [loading, setLoading] = useState(true);

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
      const [featureData, entertainmentData] = await Promise.all([
        fetchCategoryNews(2, 5), // Feature category ID
        fetchCategoryNews(1, 12), // Entertainment category ID
      ]);

      setFeatureNews(featureData);
      setEntertainmentNews(entertainmentData);
      setHasFetched(true);
      setLoading(false);
    };

    fetchAllNews();
  }, [hasFetched]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setDeviceType("mobile");
      } else {
        setDeviceType("desktop");
      }
    };

    // Initialize on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return null;
  }

  return (
    <BodyContainer>
      <div className="md:space-x-4 lg:space-x-5 md:flex space-y-4 md:space-y-0 pt-2 md:pt-6">
        {/* Feature News Section */}
        <div className="w-full md:w-1/2 lg:w-[35%] xl:w-[33%]">
          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1 mt-4 sm:mt-0">
            <Link href="/category/feature" passHref>
              <div className="text-white text-2xl px-4 ml-4 cursor-pointer">ফিচার</div>
            </Link>
          </div>

          <div className="w-full space-y-2 sm:space-y-0 sm:space-x-4 pt-4 sm:flex md:flex-col md:space-x-0 md:space-y-2">
            {featureNews[0] && (
              <div className="sm:w-1/2 md:w-full">
                <Link href={`/news/details/${featureNews[0].id}`} passHref>
                  <NewsCard
                    title={featureNews[0].title}
                    highlight={featureNews[0].highlight_text || ""}
                    description={featureNews[0].description || ""}
                    imageSrc={`${imageBaseURL}/${featureNews[0]?.featured_image}`}
                    clamp={3}
                    maxLength={180}
                  />
                </Link>
              </div>
            )}
            <div className="space-y-2 sm:w-1/2 md:w-full">
              {featureNews.slice(1, deviceType === "mobile" ? 5 : 3).map((item) => (
                <Link href={`/news/details/${item.id}`} key={item.id} passHref>
                  <NewsItem2 highlight={item.highlight_text} text={item.title} Icon={false} onClick={() => {}} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Entertainment News Section */}
        <div className="block md:w-1/2 lg:w-[65%] xl:w-[66%]">
          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
            <Link href="/category/entertainment" passHref>
              <div className="text-white text-2xl px-4 ml-4 cursor-pointer">বিনোদন</div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 pt-4">
            {entertainmentNews.slice(0, deviceType === "mobile" ? 8 : entertainmentNews.length).map((item) => (
              <Link href={`/news/details/${item.id}`} key={item.id} passHref>
                <NewsCardHorizontal
                  imageSrc={`${imageBaseURL}/${item.featured_image}`}
                  highlight={item.highlight_text || ""}
                  title={item.title}
                  right={false}
                  left={true}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </BodyContainer>
  );
};

export default EcomomyNews;
