"use client";
import React from 'react';
import Image from 'next/image';

import BodyContainer from '../../common/BodyContainer';
import Ad from '../..//common/Ad';
import ad from "@/assets/bangla-bid-ad.jpg";
import ShortNewsCard from '../FeatureNews/ShortNewsCard'
import NewsCardHorizontal from '../HorizontalCard'
import NewsCard from '../FeatureNews/NewsCard'

import SubtitleTitle from '../SubtitleTitle'





const EcomomyNews: React.FC = () => {
    return (
        <div className="">
            <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3  lg:flex md:space-x-2 lg:space-x-4 space-y-4 md:space-y-0 pt-2 md:pt-6">
                <div className=" w-full lg:w-1/3 ">

                    <div className='border-l-8 border-red-500 mb-2 mt-2 '>
                        <h1 className='text-black text-2xl md:text-4xl ml-4 hover:text-red-500 cursor-pointer'> অর্থনীতি </h1>
                    </div>
                    <div className='border-b-2 border-gray-500 mb-2 '></div>

                    <div className="w-full space-y-2.5 pt-4 ">

                        <ShortNewsCard
                            title="ইসরায়েলি হামলায় এক সপ্তাহে শতাধিক ত্রাণকর্মী নিহত"
                            imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                            onClick={() => alert('News card clicked!')}
                            highlight=''
                        />
                        <SubtitleTitle
                            title="শ্রমিকদের ১৮ দফা দাবি বাস্তবায়নে সম্মত হয়েছে"

                        />
                        <SubtitleTitle
                            subtitle="মালিকপক্ষ: উপদেষ্টা আসিফ"
                            title="শ্রমিকদের ১৮ দফা দাবি বাস্তবায়নে সম্মত হয়েছে"
                        />




                    </div>

                </div>

                <div className="block lg:w-2/3 ">
                    <div className='border-l-8 border-red-500 mb-2 mt-2 '>
                        <h1 className='text-black text-2xl md:text-4xl ml-4 hover:text-red-500  cursor-pointer'> ফিচার </h1>
                    </div>
                    <div className='border-b-2 border-gray-500 mb-2 '></div>

                    <div className="grid grid-cols-1 md:grid-cols-2  gap-6 pt-4">
                        {['', '', '', '', '', '', '', ''].map((item, index) => (
                            <NewsCardHorizontal
                                key={index}
                                imageSrc="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
                                highlight=""
                                title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                right={true}
                                left={false}
                            />
                        ))}
                    </div>

                </div>


            </div>

        </div>
    );
};

export default EcomomyNews;