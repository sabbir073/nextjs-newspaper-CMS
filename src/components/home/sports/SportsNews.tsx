"use client";
import React from 'react';
import Image from 'next/image';

import BodyContainer from '../../common/BodyContainer';
import Ad from '../../common/Ad';
import ad from "@/assets/bangla-bid-ad.jpg";
import NewsCard from '../FeatureNews/NewsCard'
import NewsItem from "../FeatureNews/NewsItem"
import NewsCardHorizontal from '../HorizontalCard'

import ShortNewsCard from '../FeatureNews/ShortNewsCard'

const SportsNewsSection: React.FC = () => {
    return (
        <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3 ">
            <div className="border-l-8 border-red-500 mb-2 mt-2">
                <h1 className="text-black text-2xl md:text-4xl ml-4 cursor-pointer hover:text-red-500">
                    খেলা
                </h1>
            </div>
            <div className='border-b-2 border-gray-500 mb-2 '></div>


            <div
                className=" lg:flex md:space-x-2 lg:space-x-4 space-y-4 md:space-y-0 pt-4 " >

                <div className=" w-full lg:w-1/3">
                    {/* left side  */}
                    <NewsCard
                        title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                        description="
                        বাংলাদেশ ফুটবল দল বর্তমানে কুয়েতে অবস্থান করছে। আগামীকাল কুয়েতের সময় রাত সাড়ে নয়টায় মাঠে ফিলিস্তিনের বিপক্ষে বিশ্বকাপের বাছাইপর্বের ম্যাচ খেলবেন জামাল ভূঁইয়ারা। সৌদিতে দুই সপ্তাহ ক্যাপ শেষে এবার কুয়েতের আবহাওয়া কন্ডিশনে এবং ফিলিস্তিনের বিপক্ষে ম্যাচকে সামনে রেখে শেষবারের মতো নিজেদের ঝালিয়ে নিতে অনুশীলনে ব্যস্ত সময় পার করছে বাংলাদেশ দল। আসন্ন ম্যাচে ফিলিস্তিনের আক্রমণভাগই আগামীকাল কুয়েতের সময় রাত   আগামীকাল কুয়েতের সময় রাত 
                        
                                 "
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        clamp={6}
                        maxLength={410}
                        onClick={() => alert('News card clicked!')}
                    />
                </div>

                <div className="block lg:w-2/3 ">
                    {/* right side  */}

                    <div className="  2xl:pt-10 w-full md:flex">
                        <div className="w-full md:w-5/12 space-y-5 px-0 md:px-4 ">
                            <ShortNewsCard
                                title="ইসরায়েলি হামলায় এক সপ্তাহে শতাধিক ত্রাণকর্মী নিহত"
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                onClick={() => alert('News card clicked!')}
                                highlight=''
                            />
                            <ShortNewsCard
                                title="ইসরায়েলি হামলায় এক সপ্তাহে শতাধিক ত্রাণকর্মী নিহত"
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                onClick={() => alert('News card clicked!')}
                                highlight=''
                            />

                        </div>
                        <div className=" w-full md:w-7/12 grid grid-cols-1 pt-4 md:pt-0 md:pl-4  space-y-4">

                            <NewsCardHorizontal
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                highlight=""
                                title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                right={false}
                                left={false}
                            />
                            <NewsCardHorizontal
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                highlight=""
                                title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                right={false}
                                left={false}
                            />
                            <NewsCardHorizontal
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                highlight=""
                                title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                right={false}
                                left={false}
                            />
                            <NewsCardHorizontal
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                highlight="এমভি আবদুল্লাহ"
                                title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                right={false}
                                left={false}
                            />
                            <NewsCardHorizontal
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                highlight=""
                                title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                right={false}
                                left={false}
                            />


                        </div>


                    </div>

                </div>


            </div>
        </div>
    );
};

export default SportsNewsSection;