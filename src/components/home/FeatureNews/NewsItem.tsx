"use client"


import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface NewsItemProps {
    text: string;
    Icon:boolean;
    onClick: () => void;
}

const NewsItem: React.FC<NewsItemProps> = ({ text,Icon, onClick }) => {
    return (
        <div 
            onClick={onClick} 
            className="flex w-full px-4 items-start py-2 border-b border-gray-300 cursor-pointer hover:bg-gray-100"
        >
            {
                Icon && 
                <FaChevronRight className="text-gray-600 mt-1.5" />

            }
            <div className="ml-2 w-full text-2xl font-medium text-gray-800 leading-tight line-clamp-2 hover:text-red-500">
                {text}
            </div>
        </div>
    );
};

export default NewsItem;

