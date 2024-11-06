
// "use client"
// import React from 'react';
// import Image from 'next/image';

// interface BlogCardProps {
//     imageSrc: string;
//     title: string;
//     highlight: string;
//     onClick?: () => void;
// }

// const ShortNewsCard: React.FC<BlogCardProps> = ({ imageSrc, title,highlight, onClick }) => {
//     return (
//         <div
//             className="w-full cursor-pointer bg-white rounded-lg shadow-xl "
//             onClick={onClick}
//         >
//             <Image
//                 width={200}
//                 height={200}
//                 src={imageSrc}
//                 alt="Blog Image"
//                 className="w-full h-[192px]   aspect-video  bg-gray-50 oobject-fill  rounded-lg"
//                 priority
//             />
//             {
//                 highlight &&
//                 <h1 className="text-red-500 py-1 px-2 text-2xl xl:text-xl font-bold line-clamp-1">
//                 {title}
//             </h1>
                
//             }
          
//             <h1 className="text-black py-2 px-2 text-2xl xl:text-xl font-bold line-clamp-2 text-wrap ">
//                 {title}
//             </h1>
           
//         </div>
//     );
// };

// export default ShortNewsCard;


"use client"
import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
    imageSrc: string;
    title: string;
    highlight: string;
    onClick?: () => void;
}

const ShortNewsCard: React.FC<BlogCardProps> = ({ imageSrc, title, highlight, onClick }) => {
    return (
        <div
            className="w-full cursor-pointer bg-white rounded-xl shadow-md group"
            onClick={onClick}
        >
            <div className="relative w-full h-[180px]  rounded-t-lg overflow-hidden">
                <Image
                    width={800}
                    height={840}
                    src={imageSrc}
                    alt="Blog Image"
                    className="object-fill w-full h-full rounded-t-xl"
                    priority
                />
            </div>
            <div className="p-4">
                {highlight && (
                    <h1 className="text-red-500 text-xl lg:text-2xl font-bold line-clamp-2">
                        {highlight}
                    </h1>
                )}
                <h2 className=" md:h-[70px] text-black mt-1 text-lg md:text-xl lg:text-2xl font-semibold line-clamp-2 group-hover:text-red-500">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default ShortNewsCard;



