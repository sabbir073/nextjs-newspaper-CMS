"use client";

import React from "react";
import { FaChevronRight } from "react-icons/fa";

interface NewsItemProps {
  text: string;
  highlight?: string;
  Icon: boolean;
  onClick: () => void;
}

const NewsItem2: React.FC<NewsItemProps> = ({ text, Icon, highlight, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex w-full px-2 py-2 shadow-md rounded-xl cursor-pointer"
    >
      {Icon && (
        <div className="mr-2 mt-1.5">
          <FaChevronRight className="text-gray-600" />
        </div>
      )}
      <div>
        {highlight && (
          <h5 className="text-red-500 text-md md:text-md font-semibold mb-1 line-clamp-1">
            {highlight}
          </h5>
        )}
        <div className="text-medium text-xl md:text-xl lg:text-2xl font-medium line-clamp-3 hover:text-red-500">
          {text}
        </div>
      </div>
    </div>
  );
};

export default NewsItem2;
