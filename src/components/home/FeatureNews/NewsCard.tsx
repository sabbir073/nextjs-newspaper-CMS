
// "use client"
// import React from 'react';
// import Image from 'next/image';

// interface BlogCardProps {
//     imageSrc: string;
//     title?: string;
//     description?: string;
//     clamp?: number;
//     onClick?: () => void;
// }

// const truncateString = (input: string, maxLength: number): string => {
//     return input.length > maxLength ? `${input.substring(0, maxLength)}...` : input;
//   };
  

// const NewsCard: React.FC<BlogCardProps> = ({ imageSrc, title, description,clamp, onClick }) => {
//     return (
//         <div
//             className="w-full pb-4 cursor-pointer bg-white rounded-lg shadow-xl"
//             onClick={onClick}
//         >
//             <Image
//                 width={200}
//                 height={200}
//                 src={imageSrc}
//                 alt="Blog Image"
//                 className="w-full h-auto aspect-[4/3] object-cover rounded-lg"
//                 priority
//             />
//             <h1 className="text-black pt-3 px-2 text-2xl xl:text-4xl font-bold hover:text-red-500	">
//                 {title}
//             </h1>
//             <article className="text-wrap px-2 py-2 ">
//                 <p className={`line-clamp-${clamp} text-xl`}>{truncateString(description, 20)} </p>
//             </article>
//         </div>
//     );
// };

// export default NewsCard;


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
            className="w-full pb-4 cursor-pointer bg-white rounded-lg shadow-xl"
            onClick={onClick}
        >
            <Image
                width={200}
                height={200}
                src={imageSrc}
                alt="Blog Image"
                className="w-full h-auto aspect-[4/3] object-cover rounded-lg"
                priority
            />
            <h1 className="text-black pt-3 px-2 text-2xl xl:text-4xl font-bold hover:text-red-500">
                {title}
            </h1>
            <article className="text-wrap px-2 py-2">
                <p className={`line-clamp-${clamp} text-xl`}>
                    {truncateString(description, maxLength)}
                </p>
            </article>
        </div>
    );
};

export default NewsCard;
