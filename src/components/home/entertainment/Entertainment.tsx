"use client";
import React, { useEffect, useState } from "react";
import NewsCard from "../FeatureNews/NewsCard";
import NewsCardHorizontal from "../HorizontalCard";
import BodyContainer from "@/components/common/BodyContainer";
import Link from "next/link";

const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface NewsItem {
  id: number;
  title: string;
  description?: string;
  highlight_text?: string;
  featured_image?: string;
}

const EntertainmentNews: React.FC = () => {
  const [entertainmentNews, setEntertainmentNews] = useState<NewsItem[]>([]);
  const [hasFetched, setHasFetched] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hasFetched) return; // Prevent multiple API calls
  
    const fetchNews = async () => {
      try {
        const response = await fetch(`/api/public/news/category`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryId: 1,
            newsItem: 9,
            video: false,
          }),
        });
  
        if (!response.ok) throw new Error("Failed to fetch news");
        const data: NewsItem[] = await response.json();
        setEntertainmentNews(data);
        setHasFetched(true); // Mark as fetching
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchNews();
  }, [hasFetched]);

  if (loading) {
    return null;
  }

  return (
    <BodyContainer>
      <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1 my-3 mt-6">
        <Link href="/category/sports" passHref>
          <div className="text-white text-2xl px-4 ml-4 cursor-pointer">খেলাধুলা</div>
        </Link>
      </div>

      <div className="lg:flex space-y-3 md:space-y-0 pt-2 lg:space-x-4">
        {/* Left Side */}
        <div className="w-full lg:w-[30%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
          {entertainmentNews.slice(1, 5).map((news) => (
            <Link href={`/news/details/${news.id}`} key={news.id} passHref>
              <NewsCardHorizontal
                imageSrc={`${imageBaseURL}/${news.featured_image}`}
                highlight={news.highlight_text || ""}
                title={news.title}
                right={false}
                left={true}
              />
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="space-y-3 md:space-y-0 md:space-x-4 md:flex md:pt-6 lg:pt-0 lg:w-[70%]">
          {/* Main News */}
          {entertainmentNews[0] && (
            <div className="w-full md:w-[50%] lg:w-[55%]">
              <Link href={`/news/details/${entertainmentNews[0].id}`} passHref>
                <NewsCard
                  title={entertainmentNews[0].title}
                  description={entertainmentNews[0].description || ""}
                  imageSrc={`${imageBaseURL}/${entertainmentNews[0].featured_image}`}
                  clamp={4}
                  maxLength={140}
                  highlight={entertainmentNews[0].highlight_text || ""}
                  onClick={() => {}}
                />
              </Link>
            </div>
          )}

          {/* Additional News */}
          <div className="block md:w-[50%] space-y-2 md:space-y-3 grid gap-2">
            {entertainmentNews.slice(5, 9).map((news) => (
              <Link href={`/news/details/${news.id}`} key={news.id} passHref>
                <NewsCardHorizontal
                  imageSrc={`${imageBaseURL}/${news.featured_image}`}
                  highlight={news.highlight_text || ""}
                  title={news.title}
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

export default EntertainmentNews;
