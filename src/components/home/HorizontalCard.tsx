"use client";
import React from "react";
import Image from "next/image";

interface BlogCardProps {
  imageSrc: string;
  title: string;
  highlight?: string;
  left?: boolean;
  right?: boolean;
  onClick?: () => void;
}

const ShortNewsCard: React.FC<BlogCardProps> = ({
  imageSrc,
  title,
  highlight,
  onClick,
  left,
  right,
}) => {
  const SideImage = (
    <div className="relative flex-shrink-0 w-[120px] h-[90px] overflow-hidden rounded-lg flex items-center">
      <Image
        src={imageSrc}
        alt="Blog Image"
        width={130}
        height={100}
        className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        quality={100}
        priority
      />
    </div>
  );

  return (
    <div
      className="flex items-center w-full cursor-pointer bg-white border rounded-lg shadow-md group pt-1 pb-1 pl-1"
      onClick={onClick}
    >
      {left && SideImage}

      <div className="flex-grow flex flex-col justify-center px-2">
        {highlight && (
          <h5 className="text-red-500 text-md md:text-md font-semibold line-clamp-1 mb-1">
            {highlight}
          </h5>
        )}
        <h2 className="text-medium text-xl md:text-xl lg:text-2xl font-medium line-clamp-3 group-hover:text-red-500">
          {title}
        </h2>
      </div>

      {right && SideImage}
    </div>
  );
};

export default ShortNewsCard;
