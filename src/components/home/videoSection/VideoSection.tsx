"use client";
import React, { useEffect, useState } from "react";
import BodyContainer from "@/components/common/BodyContainer";
import VideoCard from "./VideoCard";
import Link from "next/link";

interface VideoNewsItem {
  id: number;
  title: string;
  video_url: string;
  featured_image?: string;
}

const VideoSection: React.FC = () => {
  const [videos, setVideos] = useState<VideoNewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false); // Prevent multiple API calls

  useEffect(() => {
    if (hasFetched) return; // Prevent additional API calls if already fetched
  
    const fetchVideoNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/public/news/category`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryId: null, // Empty category as per your query
            newsItem: 4, // Limit the number of news items
            video: true, // Fetch only video news
          }),
        });
  
        if (!response.ok) throw new Error("Failed to fetch video news");
        const data: VideoNewsItem[] = await response.json();
        setVideos(data); // Store the fetched data
        setHasFetched(true); // Mark as fetched
      } catch (error) {
        console.error("Error fetching video news:", error);
      } finally {
        setIsLoading(false); // Stop the loading indicator
      }
    };
  
    fetchVideoNews();
  }, [hasFetched]);
  

  if (isLoading) {
    return null; // Optionally, return a spinner or loader component here
  }

  return (
    <BodyContainer>
      <div className="pt-5">
        <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
          <Link href="/videos" passHref>
            <div className="text-white text-2xl px-4 ml-4 cursor-pointer">ভিডিও নিউজ</div>
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-4 mt-5">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              videoUrl={video?.video_url}
              title={video.title}
              imgSrc={video.featured_image ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${video.featured_image}` : ""}
              linkTo={video.id}
            />
          ))}
        </div>
      </div>
    </BodyContainer>
  );
};

export default VideoSection;
