"use client";

import React, { useEffect, useState } from "react";
import BodyContainer from "../../common/BodyContainer";
import Ad from "../../common/Ad";
import NewsCardHorizontal from "../HorizontalCard";
import NewsItem2 from "../FeatureNews/NewsItem2";
import NewsCard from "../FeatureNews/NewsCard";
import Link from "next/link";

const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface NewsItem {
  id: number;
  title: string;
  description?: string;
  highlight_text?: string;
  featured_image?: string;
}

const DynamicNewsSection: React.FC = () => {
  const [leftSectionNews, setLeftSectionNews] = useState<NewsItem[]>([]);
  const [rightSectionNews, setRightSectionNews] = useState<NewsItem[]>([]);
  const [hasFetched, setHasFetched] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hasFetched) return; // Prevent multiple API calls

    const fetchCategoryNews = async (categoryId: number, limit: number) => {
      try {
        const response = await fetch(
          `/api/public/news/category?categoryId=${categoryId}&newsItem=${limit}&video=false`
        );
        if (!response.ok) throw new Error(`Failed to fetch news for category ${categoryId}`);
        const data: NewsItem[] = await response.json();
        return data;
      } catch (error) {
        console.error(`Error fetching news for category ${categoryId}:`, error);
        return [];
      }
    };

    const fetchAllNews = async () => {
      const [newsForLeftSection, newsForRightSection] = await Promise.all([
        fetchCategoryNews(4, 6), // Category ID for left section
        fetchCategoryNews(20, 5), // Category ID for right section
      ]);
      setLeftSectionNews(newsForLeftSection);
      setRightSectionNews(newsForRightSection);
      setHasFetched(true);
      setLoading(false);
    };

    fetchAllNews();
  }, [hasFetched]);

  if (loading) {
    return null;
  }

  return (
    <BodyContainer>
      <div className="pt-2">
        <div className="xl:flex space-y-4 md:space-y-0 xl:space-x-5 pt-2 md:pt-5">
          {/* Left Section */}
          <div className="w-full mx-auto xl:w-[68%]">
            <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
              <Link href="/category/international" passHref>
                <div className="text-white text-2xl px-4 ml-4 cursor-pointer">আন্তর্জাতিক</div>
              </Link>
            </div>

            <div className="space-y-1 md:space-y-0 2xl:pt-10 w-full md:flex md:space-x-4">
              <div className="w-full md:w-1/2 mt-5">
                {/* Main NewsCard */}
                {leftSectionNews[0] && (
                  <Link href={`/news/details/${leftSectionNews[0].id}`} passHref>
                    <NewsCard
                      title={leftSectionNews[0].title}
                      description={leftSectionNews[0].description}
                      imageSrc={`${imageBaseURL}/${leftSectionNews[0].featured_image}`}
                      highlight={leftSectionNews[0].highlight_text}
                      clamp={3}
                      maxLength={260}
                    />
                  </Link>
                )}
              </div>

              <div className="w-full md:w-1/2 grid grid-cols-1 gap-2 pt-4 md:pt-5 px-0">
                {leftSectionNews.slice(1).map((news, index) => (
                  <Link href={`/news/details/${news.id}`} key={index} passHref>
                    <NewsCardHorizontal
                      imageSrc={`${imageBaseURL}/${news.featured_image}`}
                      highlight={news.highlight_text || ""}
                      title={news.title}
                      right={false}
                      left={false}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full xl:w-[32%] pt-4 md:pt-4 xl:pt-0">
            <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
              <Link href="/category/law" passHref>
                <div className="text-white text-2xl px-4 ml-4 cursor-pointer">আইন-আদালত</div>
              </Link>
            </div>

            <div className="gap-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 mt-5">
              {rightSectionNews.map((news, index) => (
                <Link href={`/news/details/${news.id}`} key={index} passHref>
                  <NewsItem2
                    text={news.title}
                    highlight={news?.highlight_text}
                    Icon={false}
                    onClick={() => {}}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BodyContainer>
  );
};

export default DynamicNewsSection;
