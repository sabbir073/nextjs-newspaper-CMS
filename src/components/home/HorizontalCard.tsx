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
  highlight: string;
  left: boolean;
  right: boolean;
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
    <div className="relative flex-shrink-0 overflow-hidden w-40 lg:w-[180px]">
      <Image
        src={imageSrc}
        alt="Blog Image"
        fill
        className="object-fill rounded-l-lg"
        priority
      />
    </div>
  );

  return (
    <div
      className="flex w-full h-28 md:h-[120px] cursor-pointer bg-white border rounded-lg shadow-md group"
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
