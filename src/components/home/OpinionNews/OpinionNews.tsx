"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BodyContainer from "@/components/common/BodyContainer";
import Link from "next/link";

const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

interface OpinionCardProps {
  imageUrl: string;
  title: string;
  reporter_name: string;
  highlight_text: string;
}

const OpinionCard: React.FC<OpinionCardProps> = ({
  imageUrl,
  title,
  reporter_name,
  highlight_text,
}) => {
  return (
    <div className="flex p-1 rounded-lg shadow-md bg-white border cursor-pointer">
      <div className="relative h-[100px] w-[120px] rounded-lg overflow-hidden border-4 border-red-500 flex-shrink-0 my-auto">
        <Image
          src={imageUrl}
          alt={title}
          width={150}
          height={150}
          className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="ml-2 py-2 my-auto flex-1">
        <h3 className="text-medium text-xl md:text-xl lg:text-2xl font-medium line-clamp-3 hover:text-red-500">
          {title}
        </h3>
        <span className="text-red-500 text-xl mt-1 cursor-pointer">{highlight_text}</span>
        <span className="text-gray-500 text-xl mt-1 cursor-pointer"> * {reporter_name}</span>
      </div>
    </div>
  );
};


interface OpinionItem {
  id: number;
  title: string;
  reporter_name?: string;
  featured_image?: string;
  highlight_text?: string;
}

const OpinionSection: React.FC = () => {
  const [opinions, setOpinions] = useState<OpinionItem[]>([]);
  const [hasFetched, setHasFetched] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hasFetched) return; // Prevent multiple API calls

    const fetchOpinions = async () => {
      try {
        const response = await fetch(`/api/public/news/category`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryId: 7, // Replace with the category ID for opinions
            newsItem: 6,
            video: false,
          }),
        });

        if (!response.ok) throw new Error("Failed to fetch opinion news");
        const data: OpinionItem[] = await response.json();
        setOpinions(data);
        setHasFetched(true); // Mark as fetched
      } catch (error) {
        console.error("Error fetching opinion news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOpinions();
  }, [hasFetched]);

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <BodyContainer>
      <div className="pt-6">
        <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
          <Link href="/category/opinion" passHref>
            <div className="text-white text-2xl px-4 ml-4 cursor-pointer">মতামত</div>
          </Link>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mt-3">
          {opinions.map((opinion) => (
            <Link href={`/news/details/${opinion.id}`} key={opinion.id} passHref>
              <OpinionCard
                imageUrl={`${imageBaseURL}/${opinion?.featured_image}`} // Replace with default image if none exists
                title={opinion.title}
                reporter_name={opinion.reporter_name || ""}
                highlight_text={opinion.highlight_text || ""}
              />
            </Link>
          ))}
        </div>
      </div>
    </BodyContainer>
  );
};

export default OpinionSection;
