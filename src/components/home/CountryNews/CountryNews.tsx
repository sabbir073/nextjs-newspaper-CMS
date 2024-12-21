"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BodyContainer from "../../common/BodyContainer";
import Ad from "../../common/Ad";
import NewsCardHorizontal from "../HorizontalCard";
import NewsCard from "../FeatureNews/NewsCard";
import ad2 from "@/assets/super-white-ad.webp";
import ad from "@/assets/bangla-bid-ad.jpg";

const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface NewsItem {
  id: number; // Add id for navigation
  title: string;
  description?: string;
  highlight_text?: string;
  featured_image?: string;
}

const CountryNewsSection: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);

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
            newsItem: 7,
            video: false,
          }),
        });
  
        if (!response.ok) throw new Error("Failed to fetch news");
        const data: NewsItem[] = await response.json();
        setNews(data);
        setHasFetched(true); // Mark as fetching
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchNews();
  }, [hasFetched]);

  if (isLoading) {
    return null;
  }

  return (
    <BodyContainer>
      <div className="pt-2 md:pt-2">
        <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
          <Link href="/category/national" passHref>
            <div className="text-white text-2xl px-4 ml-4 cursor-pointer">জাতীয়</div>
          </Link>
        </div>

        <div className="xl:flex space-y-4 md:space-y-0 xl:space-x-4 pt-4 md:pt-5">
          {/* Left Side */}
          <div className="w-full xl:w-[68%]">
            <div className="space-y-1 md:space-y-0 w-full md:flex md:space-x-5">
              {/* Main NewsCard */}
              <div className="w-full md:w-1/2">
                {news[0] && (
                  <Link href={`/news/details/${news[0].id}`} passHref>
                      <NewsCard
                        title={news[0].title}
                        highlight={news[0].highlight_text}
                        description={news[0].description}
                        imageSrc={`${imageBaseURL}/${news[0].featured_image}`}
                        clamp={3}
                        maxLength={180}
                      />
                  </Link>
                )}
              </div>

              {/* Horizontal NewsCards */}
              <div className="w-full md:w-1/2 grid grid-cols-1 gap-2 md:pt-0 px-0 pr-0">
                {news.slice(1, 5).map((item, index) => (
                  <Link href={`/news/details/${item.id}`} key={index} passHref>
                   
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

          {/* Right Side */}
          <div className="w-full flex flex-col justify-between xl:w-[32%] md:pt-4 xl:pt-0">
          
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
              {news.slice(5).map((item, index) => (
                <Link href={`/news/details/${item.id}`} key={index} passHref>
                 
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


            <center>
              <Image
                width={250}
                height={220}
                src={ad2}
                alt="Ad"
                className="object-cover w-[250px] h-[220px] mt-5"
                priority
              />
            </center>
          </div>
        </div>
      </div>

      <div>
        <Ad image={ad} link="#" />
      </div>
    </BodyContainer>
  );
};

export default CountryNewsSection;
