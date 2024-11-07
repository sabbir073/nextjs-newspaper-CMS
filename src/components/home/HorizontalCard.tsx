// "use client"
// import React from 'react';
// import Image from 'next/image';

// interface BlogCardProps {
//     imageSrc: string;
//     title: string;
//     highlight: string;
//     left: boolean;
//     right: boolean;
//     onClick?: () => void;
// }

// const ShortNewsCard: React.FC<BlogCardProps> = ({ imageSrc, title, highlight, onClick, left, right }) => {
//     return (
//         <div
//             className='w-full h-32 flex cursor-pointer bg-white rounded-lg shadow-lg '
//             onClick={onClick}
//         >
//             {
//                 left && <div className='h-full min-w-[120px] md:min-w-[145px]'>
//                     <Image
//                         width={200}
//                         height={200}
//                         alt="Blog Image"
//                         src={imageSrc}
//                         className=' h-full rounded-lg'
//                         priority
//                     />
//                 </div>
//             }

//             <div className='mt-4'>
//                 {
//                     highlight &&
//                     <h1 className="text-red-500  px-2 text-2xl xl:text-xl font-bold line-clamp-1	">
//                         {highlight}
//                     </h1>

//                 }
//                 <h1 className="text-black  px-2 text-2xl xl:text-xl font-bold line-clamp-2 text-wrap ">
//                     {title}
//                 </h1>
//             </div>

//             {

//                 right && <div className='h-full min-w-[120px] md:min-w-[145px]'>
//                     <Image
//                         width={200}
//                         height={200}
//                         alt="Blog Image"
//                         src={imageSrc}
//                         className=' h-full rounded-lg'
//                         priority
//                     />
//                 </div>

//             }

//         </div>
//     );
// };

// export default ShortNewsCard;

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
    <div className="relative flex-shrink-0 overflow-hidden w-[150px]">
      {/* <Image
        src={imageSrc}
        alt="Blog Image"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust as needed
        className="object-fill rounded-l-lg"
        priority
      /> */}

      <Image
        src={imageSrc}
        alt="Blog Image"
        layout="fill" // Use fill to make the image occupy the entire div
        objectFit="object-fill" // Ensures the image covers the space while maintaining its aspect ratio
        sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vw, 20vw" // Adjust the size for different breakpoints
        className="rounded-lg"
        quality={85}
        priority
      />
    </div>
  );

  return (
    <div
      className="flex w-full h-28 md:h-[100px] cursor-pointer bg-white border rounded-lg shadow-md group"
      onClick={onClick}
    >
      {left && SideImage}

      <div className="flex-grow flex flex-col justify-center px-4">
        {highlight && (
          <h1 className="text-red-500 text-lg md:text-xl font-bold line-clamp-1 mb-1">
            {highlight}
          </h1>
        )}
        <h2 className="text-black text-base md:text-lg lg:text-xl font-semibold line-clamp-2 group-hover:text-red-500">
          {title}
        </h2>
      </div>

      {right && SideImage}
    </div>
  );
};

export default ShortNewsCard;
