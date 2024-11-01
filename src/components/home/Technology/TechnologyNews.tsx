"use client";
import React from 'react';
import Image from 'next/image';

import Ad from "@/assets/super-white-ad.webp";
import ShortNewsCard from '../FeatureNews/ShortNewsCard'


const TechnologyNews: React.FC = () => {
    return (
        <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3 mt-12 ">

            <div className='border-l-8 border-red-500 mb-2 mt-2 '>
                <h1 className='text-black text-2xl md:text-4xl ml-4 hover:text-red-500 cursor-pointer'> প্রযুক্তি </h1>
            </div>
            <div className='border-b-2 border-gray-500 mb-2 '></div>

            <div className=" lg:flex space-y-5 md:space-y-0 pt-4 ">

                <div className=" w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4  md:pr-4">
                    {/* left side  */}

                    <ShortNewsCard
                        title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        onClick={() => alert('News card clicked!')}
                        highlight=''
                    />
                    <ShortNewsCard
                        title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        onClick={() => alert('News card clicked!')}
                        highlight=''
                    />
                    <ShortNewsCard
                        title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        onClick={() => alert('News card clicked!')}
                        highlight=''
                    />



                </div>

                <div className="block lg:w-1/4  ">
                    {/* right side  */}
                    <Image
                        width={200}
                        height={200}
                        src={Ad}
                        alt="Blog Image"
                        className="w-full h-[192px]   aspect-video  bg-gray-50 oobject-fill mb-4 cursor-pointer"
                        priority
                    />

                </div>


            </div>

        </div>
    );
};

export default TechnologyNews;