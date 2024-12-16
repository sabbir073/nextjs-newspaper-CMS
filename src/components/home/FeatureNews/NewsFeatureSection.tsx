/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ShortNewsCard from "./ShortNewsCard";
import BodyContainer from "../../common/BodyContainer";
import NewsFeatureRightSide from "./NewsFeatureRightSide";
import Ad from "../../common/Ad";
import ad from "../../../assets/bangla-bid-ad.jpg";

interface NewsData {
  id: number;
  title: string;
  highlight_text?: string;
  description?: string;
  featured_image?: string;
}

interface FeaturedNews {
  id: number;
  news: NewsData | null;
}

const truncateString = (input: string | undefined, maxLength: number): string => {
  if (!input) return "";
  return input.length > maxLength ? `${input.substring(0, maxLength)}...` : input;
};

const NewsFeatureSection: React.FC = () => {
  const [featuredNews, setFeaturedNews] = useState<FeaturedNews[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiCalled, setApiCalled] = useState(false);
  const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

  const fetchFeaturedNews = async () => {
    if (apiCalled) return; // Ensure the API is only called once if successful
    setApiCalled(true);
    try {
      const response = await fetch("/api/public/featured");
      if (!response.ok) throw new Error("Failed to fetch featured news");
      const data: FeaturedNews[] = await response.json();
      setFeaturedNews(data);
    } catch (error) {
      console.error("Error fetching featured news:", error);
      setApiCalled(false); // Reset `apiCalled` if the fetch fails
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedNews();
  }, []); // Dependency array ensures this runs once

  if (loading) {
    return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>;
  }

  return (
    <BodyContainer>
      <div className="pt-2 w-full lg:flex lg:space-x-4 bg-red-30">
        <div className="w-full lg:w-[75%]">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
            {/* Featured News 1 */}
            <div className="w-full md:col-span-2">
              {featuredNews[0]?.news && (
                <Link href={`/news/details/${featuredNews[0].news.id}`} passHref>
                  <div className="w-full pb-4 group cursor-pointer shadow-car shadow-md rounded-xl">
                    <div className="overflow-hidden rounded-t-xl">
                      <Image
                        width={600}
                        height={400}
                        src={`${imageBaseURL}/${featuredNews[0].news.featured_image}`}
                        alt="Featured News"
                        className="w-full h-[260px] md:h-[380px] object-fill transform transition-transform duration-300 group-hover:scale-105"
                        priority
                      />
                    </div>
                    <div className="px-2">
                      <h5 className="text-red-500 font-semibold text-md md:text-md line-clamp-1 mb-1 pt-3">
                        {featuredNews[0].news.highlight_text}
                      </h5>
                      <h1 className="text-medium text-3xl xl:text-4xl group-hover:text-red-500 line-clamp-2">
                        {featuredNews[0].news.title}
                      </h1>
                      <article className="text-wrap py-2">
                        <p className="line-clamp-3 text-xl">
                          {truncateString(featuredNews[0].news.description, 150)}
                        </p>
                      </article>
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* Short News Cards 2 & 3 */}
            <div className="w-full grid grid-cols-2 md:grid-cols-1 gap-2">
              {featuredNews.slice(1, 3).map(
                (item) =>
                  item.news && (
                    <Link href={`/news/details/${item.news.id}`} passHref key={item.id}>
                      <ShortNewsCard
                        title={item.news.title}
                        imageSrc={`${imageBaseURL}/${item.news.featured_image}`}
                        highlight={item.news.highlight_text}
                      />
                    </Link>
                  )
              )}
            </div>
          </div>

          {/* Short News Cards 4-9 */}
          <div className="py-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-2">
              {featuredNews.slice(3, 9).map(
                (item) =>
                  item.news && (
                    <Link href={`/news/details/${item.news.id}`} passHref key={item.id}>
                      <ShortNewsCard
                        title={item.news.title}
                        imageSrc={`${imageBaseURL}/${item.news.featured_image}`}
                        highlight={item.news.highlight_text}
                      />
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>

        <div className="block lg:w-[25%] mt-4 lg:mt-0 bg-purple-40">
          {/* Right Side */}
          <NewsFeatureRightSide />
        </div>
      </div>

      <BodyContainer>
        <Ad image={ad} link="#" />
      </BodyContainer>
    </BodyContainer>
  );
};

export default NewsFeatureSection;
