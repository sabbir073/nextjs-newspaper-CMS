/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import ShortNewsCard from "../FeatureNews/ShortNewsCard";
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

const ReligionNews: React.FC = () => {
  const [categories, setCategories] = useState<Record<string, NewsItem[]>>({
    religion: [],
    different: [],
    education: [],
    tourism: [],
  });
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
      const [religionData, differentData, educationData, tourismData] = await Promise.all([
        fetchCategoryNews(1, 4), // Religion category ID
        fetchCategoryNews(2, 4), // Different category ID
        fetchCategoryNews(3, 4), // Education category ID
        fetchCategoryNews(4, 4), // Tourism category ID
      ]);

      setCategories({
        religion: religionData,
        different: differentData,
        education: educationData,
        tourism: tourismData,
      });
      setHasFetched(true);
      setLoading(false);
    };

    fetchAllNews();
  }, [hasFetched]);

  if (loading) {
    return null;
  }

  const renderCategorySection = (title: string, link: string, news: NewsItem[]) => (
    <div className="w-full">
      <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
        <Link href={link} passHref>
          <div className="text-white text-2xl px-4 ml-4 cursor-pointer">{title}</div>
        </Link>
        
      </div>

      <div className="space-y-4 mt-3">
        {/* Top News Item */}
        {news[0] && (
          <Link href={`/news/details/${news[0].id}`} passHref>
            <ShortNewsCard
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
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 my-2">
        {renderCategorySection("ধর্ম", "/category/religion", categories.religion)}
        {renderCategorySection("ভিন্নরকম", "/category/different", categories.different)}
        {renderCategorySection("শিক্ষা", "/category/education", categories.education)}
        {renderCategorySection("পর্যটন", "/category/tourism", categories.tourism)}
      </div>
    </BodyContainer>
  );
};

export default ReligionNews;
