

"use client";
import React from 'react';
import Image from 'next/image';
import ShortNewsCard from '../FeatureNews/ShortNewsCard'

import SubtitleTitle from '../SubtitleTitle'
import NewsCardHorizontal from '../HorizontalCard'

import Ad from "@/assets/super-white-ad.webp";

const LiteratureNews: React.FC = () => {
    return (
        <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3 mt-6 ">
            <div className="border-l-8 border-red-500 mb-2 mt-2">
                <h1 className="text-black text-2xl md:text-4xl ml-4 cursor-pointer hover:text-red-500">
                    সাহিত্য
                </h1>
            </div>
            <div className='border-b-2 border-gray-500 mb-2 '></div>

            <div className=" lg:flex space-y-5 md:space-y-0 pt-4 " >

                <div className=" w-full lg:w-2/3  md:pr-2 grid grid-cols-1 md:grid-cols-2 gap-5">

                    {
                        ['', '', '', '', '',''].map((item,index)=>(
                            <NewsCardHorizontal
                            imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                            highlight="এমভি আবদুল্লাহ"
                            title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                            right={false}
                            left={true}
                        />
                        ))
                    }

                </div>

                <div className="w-full md:w-1/3 space-y-5 md:px-4 ">

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

export default LiteratureNews;
