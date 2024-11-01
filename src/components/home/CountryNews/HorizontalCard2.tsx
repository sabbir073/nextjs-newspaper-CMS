"use client";

import React from 'react';
import Image from 'next/image';

interface NewsCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const NewsCardH: React.FC<NewsCardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="flex border-b border-gray-300 py-2">
            {/* Left Side Image */}
            <div className="w-1/3">
                <Image 
                    src={imageSrc} 
                    alt="News Image" 
                    width={100} 
                    height={100} 
                    className="w-full h-auto object-cover rounded-md"
                />
            </div>

            {/* Right Side Text */}
            <div className="w-2/3 pl-4">
                <h2 className="text-red-600 font-semibold text-md">{title}</h2>
                <p className="text-gray-800 text-sm leading-tight">{description}</p>
            </div>
        </div>
    );
};

export default NewsCardH;
