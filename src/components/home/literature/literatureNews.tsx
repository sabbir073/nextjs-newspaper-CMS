/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import NewsCardHorizontal from "../HorizontalCard";
import BodyContainer from "@/components/common/BodyContainer";
import Link from "next/link";

const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface NewsItem {
  id: number;
  title: string;
  highlight_text?: string;
  featured_image?: string;
}

const LiteratureNews: React.FC = () => {
  const [literatureNews, setLiteratureNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (hasFetched) return;

    const fetchLiteratureNews = async () => {
      try {
        const response = await fetch(`/api/public/news/category`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryId: 1, // Replace with the actual category ID for Literature
            newsItem: 9, // Number of news items to fetch
            video: false,
          }),
        });

        if (!response.ok) throw new Error("Failed to fetch literature news");
        const data: NewsItem[] = await response.json();
        setLiteratureNews(data);
        setHasFetched(true);
      } catch (error) {
        console.error("Error fetching literature news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLiteratureNews();
  }, [hasFetched]);

  if (loading) {
    return null;
  }

  return (
    <BodyContainer>
      <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1 my-2 mt-6 md:mt-8">
        <Link href="/category/literature" passHref>
          <div className="text-white text-2xl px-4 ml-4 cursor-pointer">সাহিত্য</div>
        </Link>
      </div>

      <div className="lg:flex pt-3 sm:pb-5 md:pb-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {literatureNews.map((news) => (
            <Link href={`/news/details/${news.id}`} key={news.id} passHref>
              <NewsCardHorizontal
                imageSrc={`${imageBaseURL}/${news.featured_image}`}
                title={news.title}
                highlight={news.highlight_text || ""}
                right={false}
                left={true}
              />
            </Link>
          ))}
        </div>

        
      </div>
    </BodyContainer>
  );
};

export default LiteratureNews;
