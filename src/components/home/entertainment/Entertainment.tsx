

"use client";
import React from 'react';
import Image from 'next/image';
import NewsCard from '../FeatureNews/NewsCard'

import NewsCardHorizontal from '../HorizontalCard'


const EntertainmentNews: React.FC = () => {
    return (
        <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3 mt-6 ">

            <div className="border-l-8 border-red-500 mb-2 mt-2">
                <h1 className="text-black text-2xl md:text-4xl ml-4 cursor-pointer hover:text-red-500">
                    বিনোদন
                </h1>
            </div>

            <div className='border-b-2 border-gray-500 mb-2 '></div>

            <div className=" lg:flex space-y-5 md:space-y-0 pt-4 " >

                <div className=" w-full lg:w-1/3 space-y-5 pr-2">
                    {/* left side  */}

                    <NewsCardHorizontal
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        highlight=""
                        title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                        right={false}
                        left={true}
                    />
                    <NewsCardHorizontal
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        highlight=""
                        title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                        right={false}
                        left={true}
                    />
                    <NewsCardHorizontal
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        highlight=""
                        title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                        right={false}
                        left={true}
                    />
                    <NewsCardHorizontal
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        highlight=""
                        title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                        right={false}
                        left={true}
                    />


                </div>

                <div className="w-full md:w-1/3 md:px-4 ">
                    {/* Main  */}
                    <NewsCard
                        title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                        description="
                        বাংলাদেশ ফুটবল দল বর্তমানে কুয়েতে অবস্থান করছে। আগামীকাল কুয়েতের সময় রাত সাড়ে নয়টায় মাঠে ফিলিস্তিনের বিপক্ষে বিশ্বকাপের বাছাইপর্বের ম্যাচ খেলবেন জামাল ভূঁইয়ারা। সৌদিতে দুই সপ্তাহ ক্যাপ শেষে এবার কুয়েতের আবহাওয়া কন্ডিশনে এবং ফিলিস্তিনের বিপক্ষে ম্যাচকে সামনে রেখে শেষবারের মতো নিজেদের ঝালিয়ে নিতে অনুশীলনে ব্যস্ত সময় পার করছে বাংলাদেশ দল। আসন্ন ম্যাচে ফিলিস্তিনের আক্রমণভাগই ... "
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        clamp={4}
                        maxLength={148}
                        onClick={() => alert('News card clicked!')}
                    />

                </div>

                <div className="block lg:w-1/3  space-y-5 md:pl-2">
                    {/* right side  */}
                    <NewsCardHorizontal
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        highlight=""
                        title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                        right={true}
                        left={false}
                    />
                    <NewsCardHorizontal
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        highlight=""
                        title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                        right={true}
                        left={false}
                    />
                    <NewsCardHorizontal
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        highlight=""
                        title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                        right={true}
                        left={false}
                    />
                    <NewsCardHorizontal
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        highlight=""
                        title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                        right={true}
                        left={false}
                    />

                </div>


            </div>

        </div>
    );
};

export default EntertainmentNews;