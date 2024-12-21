/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Ad from "@/assets/super-white-ad.webp";
import ShortNewsCard from "../FeatureNews/ShortNewsCard";
import BodyContainer from "@/components/common/BodyContainer";
import Link from "next/link";

const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface NewsItem {
  id: number;
  title: string;
  highlight_text?: string;
  featured_image?: string;
}

const TechnologyNews: React.FC = () => {
  const [technologyNews, setTechnologyNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (hasFetched) return;

    const fetchTechnologyNews = async () => {
      try {
        const response = await fetch(`/api/public/news/category`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryId: 1, // Example category ID for technology
            newsItem: 8, // Fetch enough news items for both layouts
            video: false,
          }),
        });

        if (!response.ok) throw new Error("Failed to fetch technology news");
        const data: NewsItem[] = await response.json();
        setTechnologyNews(data);
        setHasFetched(true);
      } catch (error) {
        console.error("Error fetching technology news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologyNews();
  }, [hasFetched]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Adjust the breakpoint for desktop
    };

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  if (loading) {
    return null;
  }

  // Determine the number of news items to display based on the device type
  const newsToDisplay = isDesktop ? technologyNews.slice(0, 7) : technologyNews.slice(0, 8);

  return (
    <BodyContainer>
      <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1 mt-6">
        <Link href="/category/technology" passHref>
          <div className="text-white text-2xl px-4 ml-4 cursor-pointer">প্রযুক্তি</div>
        </Link>
      </div>

      <div className="lg:flex space-y-5 md:space-y-0 pt-5">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
          {/* Render technology news */}
          {newsToDisplay.map((news) => (
            <Link href={`/news/details/${news.id}`} key={news.id} passHref>
              <ShortNewsCard
                title={news.title}
                imageSrc={`${imageBaseURL}/${news.featured_image}`}
                onClick={() => {}} // Empty function as requested
                highlight={news.highlight_text || ""}
              />
            </Link>
          ))}
          {/* Ad Image */}
          
            <div className="hidden md:block">
              <Image
                width={250}
                height={250}
                src={Ad}
                alt="Ad Image"
                className="object-cover w-[250px] h-[220px]"
                priority
              />
            </div>
        </div>
      </div>
    </BodyContainer>
  );
};

export default TechnologyNews;
