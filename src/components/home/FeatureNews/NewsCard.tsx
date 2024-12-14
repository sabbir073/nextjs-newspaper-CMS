"use client";
import React from "react";
import Image from "next/image";

interface BlogCardProps {
  imageSrc: string;
  highlight?: string;
  title?: string;
  description?: string;
  clamp?: number;
  maxLength?: number;
  onClick?: () => void;
}

const truncateString = (input: string, maxLength: number): string => {
  return input.length > maxLength ? `${input.substring(0, maxLength)}...` : input;
};

const NewsCard: React.FC<BlogCardProps> = ({
  imageSrc,
  highlight,
  title,
  description = "",
  clamp = 2,
  maxLength = 100,
  onClick,
}) => {
  return (
    <div
      className="w-full pb-4 group cursor-pointer shadow-md rounded-xl"
      onClick={onClick}
    >
      <div className="relative w-full h-[250px] sm:h-[220px] md:h-[250px] lg:h-[250px] overflow-hidden rounded-t-xl">
        <Image
          width={400}
          height={250}
          src={imageSrc}
          alt="Blog Image"
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="px-1">
      {highlight && (
          <h5 className="text-red-500 text-md md:text-md font-semibold line-clamp-1 mt-2">
            {highlight}
          </h5>
        )}
        <h1 className="text-medium text-2xl xl:text-4xl font-medium group-hover:text-red-500 line-clamp-3 pt-2">
          {title}
        </h1>
        <article className="text-wrap py-2">
          <p className={`line-clamp-${clamp} text-xl`}>
            {truncateString(description, maxLength)}
          </p>
        </article>
      </div>
    </div>
  );
};

export default NewsCard;
