


"use client"
import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
    imageSrc: string;
    title?: string;
    description?: string;
    clamp?: number;
    maxLength?: number;
    onClick?: () => void;
}

const truncateString = (input: string, maxLength: number): string => {
    return input.length > maxLength ? `${input.substring(0, maxLength)}...` : input;
};

const NewsCard: React.FC<BlogCardProps> = ({ imageSrc, title, description = '', clamp = 2,maxLength=100 , onClick }) => {
    return (
        <div
            className="w-full md:w-[380px] pb-4 group cursor-pointer  shadow-md rounded-xl "
            onClick={onClick}
        >
            <Image
                width={900}
                height={900}
                src={imageSrc}
                alt="Blog Image"
                className="w-full md:w-[380px] h-[200px] md:h-[250px] object-fill rounded-t-xl"
                priority
            />
           <div className="px-2">
           <h1 
            className="text-black pt-3 px-2 text-2xl xl:text-4xl font-bold group-hover:text-red-500 line-clamp-2">
                {title}
            </h1>
            <article className="text-wrap px-2 py-2">
                <p className={`line-clamp-${clamp} text-xl`}>
                    {truncateString(description, maxLength)}
                </p>
            </article>
           </div>
        </div>
    );
};


export default NewsCard;
