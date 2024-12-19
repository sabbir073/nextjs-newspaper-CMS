/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BodyContainer from "../../common/BodyContainer";
import NewsCard from "../FeatureNews/NewsCard";
import NewsCardHorizontal from "../HorizontalCard";

import Ad from "../../common/Ad";
import ad from "../../../assets/bangla-bid-ad.jpg";
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

const NationalNewsSection: React.FC = () => {
  const [categoryTwoNews, setCategoryTwoNews] = useState<NewsItem[]>([]);
  const [categoryThreeNews, setCategoryThreeNews] = useState<NewsItem[]>([]);
  const [hasFetched, setHasFetched] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hasFetched) return; // Prevent multiple API calls
  
    const fetchCategoryNews = async (categoryId: number, item: number) => {
      try {
        const response = await fetch(`/api/public/news/category`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryId: categoryId,
            newsItem: item,
            video: false, // Pass additional parameters as needed
          }),
        });
  
        if (!response.ok) throw new Error(`Failed to fetch news for category ${categoryId}`);
        const data: NewsItem[] = await response.json();
        return data;
      } catch (error) {
        console.error(`Error fetching news for category ${categoryId}:`, error);
        return [];
      } finally {
        setLoading(false);
      }
    };
  
    const fetchAllNews = async () => {
      const [newsForCategoryTwo, newsForCategoryThree] = await Promise.all([
        fetchCategoryNews(2, 5), // Category ID 2 with 5 items
        fetchCategoryNews(3, 5), // Category ID 3 with 5 items
      ]);
      setCategoryTwoNews(newsForCategoryTwo);
      setCategoryThreeNews(newsForCategoryThree);
      setHasFetched(true); // Mark as fetched
    };
  
    fetchAllNews();
  }, [hasFetched]);
  

  if (loading) {
    return null;
  }

  return (
    <BodyContainer>
      <div className="pt-2 md:pt-2">
        <div className="xl:flex xl:space-x-5">
          {/* Category Two Section */}
          <div className="w-full xl:w-[67%]">
            <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
              <Link href="/category/politics" passHref>
                <div className="text-white text-2xl px-4 ml-4 cursor-pointer">রাজনীতি</div>
              </Link>
            </div>
            <div className="space-y-1 md:space-y-0 w-full md:flex md:space-x-4 pt-5">
              {/* Main NewsCard */}
              <div className="w-full md:w-1/2">
                {categoryTwoNews[0] && (
                  <Link href={`/news/details/${categoryTwoNews[0].id}`} passHref>
                    <NewsCard
                      title={categoryTwoNews[0].title}
                      description={categoryTwoNews[0].description}
                      imageSrc={`${imageBaseURL}/${categoryTwoNews[0].featured_image}`}
                      highlight={categoryTwoNews[0].highlight_text}
                      clamp={3}
                      maxLength={140}
                    />
                  </Link>
                )}
              </div>

              {/* Horizontal NewsCards */}
              <div className="w-full md:w-1/2 grid grid-cols-1 gap-2 md:pt-0 px-0 pr-0">
                {categoryTwoNews.slice(1).map((news, index) => (
                  <Link className="m-0 p-0" href={`/news/details/${news.id}`} key={index} passHref>
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

          {/* Category Three Section */}
          <div className="w-full xl:w-[33%] pt-4 md:pt-4 xl:pt-0">
            <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
              <Link href="/category/economy" passHref>
                <div className="text-white text-2xl px-4 ml-4 cursor-pointer">অর্থনীতি</div>
              </Link>
            </div>

            <div className="w-full grid grid-cols-1 gap-2 pt-4">
              {categoryThreeNews.map((news, index) => (
                <Link href={`/news/details/${news.id}`} key={index} passHref>
                  <NewsItem2 text={news.title} highlight={news?.highlight_text} onClick={() => {}} Icon={false} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BodyContainer>
        <Ad image={ad} link={"#"} />
      </BodyContainer>
    </BodyContainer>
  );
};

export default NationalNewsSection;
