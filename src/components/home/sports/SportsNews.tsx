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
        <BodyContainer className="mt-5 ">
            <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
            <div className="bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
            খেলা
            </div>
           
            <div className="bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
              আরও
            </div>
          </div>

            <div
                className=" lg:flex space-y-4 md:space-y-0 pt-4 md:space-x-4 " >

                <div className=" w-full lg:w-1/3">
                    {/* left side  */}
                    <NewsCard
                        title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                        description="
                        বাংলাদেশ ফুটবল দল বর্তমানে কুয়েতে অবস্থান করছে। আগামীকাল কুয়েতের সময় রাত সাড়ে নয়টায় মাঠে ফিলিস্তিনের বিপক্ষে বিশ্বকাপের বাছাইপর্বের ম্যাচ খেলবেন জামাল ভূঁইয়ারা। সৌদিতে দুই সপ্তাহ ক্যাপ শেষে এবার কুয়েতের আবহাওয়া কন্ডিশনে এবং ফিলিস্তিনের বিপক্ষে ম্যাচকে সামনে রেখে শেষবারের মতো নিজেদের ঝালিয়ে নিতে অনুশীলনে ব্যস্ত সময় পার করছে বাংলাদেশ দল। আসন্ন ম্যাচে ফিলিস্তিনের আক্রমণভাগই আগামীকাল কুয়েতের সময় রাত   আগামীকাল কুয়েতের সময় রাত আগামীকাল কুয়েতের সময় রাত আগামীকাল কুয়েতের সময় রাত আগামীকাল কুয়েতের সময় রাত "
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        clamp={6}
                        maxLength={495}
                        onClick={() => alert('News card clicked!')}
                    />
                </div>

                <div className="block lg:w-2/3 ">
                    {/* right side  */}
                    <div className="  2xl:pt-10 w-full md:flex md:pt-">
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md:w-[50%] gap-4  ">
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

                        <div className=" w-full md:w-[50%] grid grid-cols-1 pt-4 md:pt-0 md:pl-4  space-y-4">

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
        </BodyContainer>
    );
};

export default SportsNewsSection;