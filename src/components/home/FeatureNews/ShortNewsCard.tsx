"use client";
import React from "react";
import Image from "next/image";

interface BlogCardProps {
  imageSrc: string;
  title: string;
  highlight: string;
  onClick?: () => void;
}

const ShortNewsCard: React.FC<BlogCardProps> = ({
  imageSrc,
  title,
  highlight,
  onClick,
}) => {
  return (
    <div
      className="mx-auto w-full md:h-[280px] xl:w-full cursor-pointer bg-white rounded-xl shadow-md group"
      onClick={onClick}
    >
      <div className="relative w-full md:w-full h-[180px] md:h-[180px] xl:w-full rounded-t-lg overflow-hidden">
        <Image
          src={imageSrc} // Path to your image
          alt="Blog Image"
          width={350} // Actual width of the image in pixels
          height={350} // Actual height of the image in pixels
          priority // Prioritizes this image for faster loading (ideal for LCP images)
          quality={100} // Adjusts quality for WebP/JPEG compression
          sizes="(max-width: 768px) 200px, (max-width: 1200px) 400px, 900px" // Responsive breakpoints
          className="object-fill w-full h-full rounded-t-xl transform transition-transform duration-300 group-hover:scale-105" // Adds hover zoom effect
        />
      </div>
      <div className="py-4">
        {highlight && (
          <h1 className="text-red-500 text-xl lg:text-2xl font-bold line-clamp-2">
            {highlight}
          </h1>
        )}
        <h2 className="text-light mt-1 text-lg md:text-xl lg:text-2xl font-semibold group-hover:text-red-500">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ShortNewsCard;
