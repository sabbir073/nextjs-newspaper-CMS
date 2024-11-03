"use client";
import Image from "next/image";


interface CardProps {
    title: string;
    description: string;
    customClass?: string;
    author: string;
    timeAgo: string;
    imageUrl: string;
    imagePosition?: "left" | "right"; // New prop to control image position
  }

  
  const CategoryCard: React.FC<CardProps> = ({
    title,
    description,
    author,
    timeAgo,
    imageUrl,
    customClass,
    imagePosition = "right", // Default position for larger screens
  }) => {
    return (
      <div
        className={`bg-white rounded-lg shadow-md flex flex-col md:flex-row ${
          imagePosition === "left" ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image section */}
        <div className={`${customClass} rounded overflow-hidden border border-gray-200 mb-4 md:mb-0`}>
          <img src={imageUrl} alt="News" className="object-cover w-full h-full" />
        </div>
  
        {/* Text Content */}
        
        <div className="flex-1 px-4">
          <h2 className=" text-xl md:text-3xl font-semibold text-gray-800 cursor-pointer hover:text-red-500">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-2 line-clamp-1 md:line-clamp-4">
            {description}
          </p>
          <div className="text-gray-500 text-xs  py-2 flex items-center">
            <span className="text-base">{author}</span>
            <span className="mx-1">•</span>{" "}
            <span className="text-base">{timeAgo}</span>
          </div>
        </div>
      </div>
    );
  };

  export default CategoryCard;