"use client";
import React from 'react';
import Image from 'next/image';

import BodyContainer from '../../common/BodyContainer';

import Ad from '../../common/Ad';
import ad from "@/assets/bangla-bid-ad.jpg";


import NewsCard from '../FeatureNews/NewsCard'
import NewsCardHorizontal from '../HorizontalCard'
import NewsItem from "../FeatureNews/NewsItem"


const NationalNewsSection: React.FC = () => {

    const handleItemClick = (text: string) => {
        alert(`You clicked on: ${text}`);
        // You could also navigate to a new page, fetch more details, etc.
    };
    return (
        <div className="">
            <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3  lg:flex md:space-x-2 lg:space-x-4 space-y-4 md:space-y-0 pt-2 md:pt-0">
                <div className=" w-full lg:w-3/">
                    {/* left side  */}

                    <div className='border-l-8 border-red-500 mb-2 mt-2 '>
                        <h1 className='text-black text-2xl md:text-4xl ml-4 hover:text-red-500 cursor-pointer'> জাতীয় </h1>
                    </div>
                    <div className='border-b-2 border-gray-500 mb-2 '>

                    </div>

                    <div className="space-y-1 md:space-y-0 md:space-x-1 pt-4 2xl:pt-10 w-full md:flex">
                        <div className="w-full md:w-5/12 ">
                            {/* Main Image */}

                            <NewsCard
                                title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                                description="অভ্যন্তরীণ বাজারে সরবরাহ ঠিক রাখতে গত ৭ ডিসেম্বর পেঁয়াজ রপ্তানি বন্ধ করে ভারত সরকার। এই ঘোষণার পরপরই অস্থিতিশীল হতে শুরু করে বাংলাদেশের পেঁয়াজের বাজার। হু হু করে বাড়তে থাকে দাম। কেজিপ্রতি দাম গিয়ে ঠেকে ২৪০ টাকায়। রমজান মাসে আরও বাড়তে পারে পেঁয়াজের দাম- এমন শঙ্কা থেকে ফেব্রুয়ারির মাঝামাঝি ভারত থেকে পেঁয়াজ আমদানির সিদ্ধান্ত নেয় সরকার। ভারত সরকারও এতে নীতিগত সম্মতি দেয়। সরকারের পক্ষ থেকে বলা হয়, রোজার আগেই দেশে আসবে ভারতীয় পেঁয়াজ। তবে ঘোষণার মাস পেরিয়ে গেলেও এখনো সরকারিভাবে দেশে আসেনি ভারতীয় পেঁয়াজ।

                                 তবে সীমান্ত দিয়ে চোরাইপথে আসা পেঁয়াজে ভরে গেছে চট্টগ্রামের খাতুনগঞ্জের আড়ত। এতে মাত্র ১০ দিনের ব্যবধানে ভোগ্যপণ্যে দেশের দ্বিতীয় বৃহৎ পাইকারি বাজারটিতে ভারতীয় পেঁয়াজের দাম কমেছে কেজিপ্রতি ৫৫-৬০ টাকা। কমেছে দেশি পেঁয়াজের দামও।"
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                clamp={3}
                                maxLength={160}
                                onClick={() => alert('News card clicked!')}
                            />

                        </div>
                        <div className=" w-full md:w-7/12 grid grid-cols-1 space-y-5 pt-4 md:pt-0 md:px-8 ">

                            <NewsCardHorizontal
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                highlight="এমভি আবদুল্লাহ"
                                title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                right={false}
                                left={true}
                            />
                            <NewsCardHorizontal
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                highlight="এমভি আবদুল্লাহ"
                                title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                right={false}
                                left={true}
                            />
                            <NewsCardHorizontal
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                highlight="এমভি আবদুল্লাহ"
                                title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                right={false}
                                left={true}
                            />
                            <NewsCardHorizontal
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                highlight="এমভি আবদুল্লাহ"
                                title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                right={false}
                                left={true}
                            />

                        </div>


                    </div>

                </div>

                <div className="block lg:w-1/4">
                    {/* right side  */}
                    <div className='border-l-8 border-red-500 mb-2 mt-2 '>
                        <h1 className='text-black text-2xl md:text-4xl ml-4 hover:text-red-500 cursor-pointer'> রাজনীতি </h1>
                    </div>
                    <div className='border-b-2 border-gray-500 mb-2 '>

                    </div >

                    <div className=" w-full grid grid-cols-1 gap-1 pt-4  ">

                        <NewsItem
                            text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                            onClick={() => handleItemClick("মাত্র চার মাস বয়সেই বিলিয়নিয়ার, কে সেই সৌভাগ্যবান শিশু?")}
                            Icon={false}
                        />
                        <NewsItem
                            text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                            onClick={() => handleItemClick("বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর...")}
                            Icon={false}
                        />
                        <NewsItem
                            text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                            onClick={() => handleItemClick("বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর...")}
                            Icon={false}
                        />

                    </div>




                </div>


            </div>
            <BodyContainer>
                <Ad image={ad} link={'#'} />
            </BodyContainer>
        </div>
    );
};

export default NationalNewsSection;