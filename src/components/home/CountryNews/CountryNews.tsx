"use client";
import React from 'react';
import Image from 'next/image';

import BodyContainer from '../../common/BodyContainer';
import Ad from '../../common/Ad';
import ad2 from "@/assets/super-white-ad.webp";
import ad from "@/assets/bangla-bid-ad.jpg";
import NewsCard from '../FeatureNews/NewsCard'
import NewsCardHorizontal from '../HorizontalCard'


const CountryNewsSection: React.FC = () => {
    return (
        <div>
            <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3 pt-4 mb-4 ">
                <div className='border-l-8 border-red-500 mb-2 mt-2 '>
                    <h1 className='text-black text-2xl md:text-4xl ml-4'> সারাদেশ </h1>
                </div>
                <div className='border-b-2 border-gray-500 mb-2 '></div>

                <div className=" lg:flex md:space-x-2 lg:space-x-4 space-y-4 md:space-y-0 pt-2 md:pt-5">

                    <div className=" w-full lg:w-3/4 ">
                        {/* left side  */}
                        <div className="space-y-1 md:space-y-0 md:space-x-1 2xl:pt-10 w-full md:flex">
                            <div className="w-full md:w-5/12  ">
                                {/* Main Image */}
                                <NewsCard
                                    title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                                    description="অভ্যন্তরীণ বাজারে সরবরাহ ঠিক রাখতে গত ৭ ডিসেম্বর পেঁয়াজ রপ্তানি বন্ধ করে ভারত সরকার। এই ঘোষণার পরপরই অস্থিতিশীল হতে শুরু করে বাংলাদেশের পেঁয়াজের বাজার। হু হু করে বাড়তে থাকে দাম। কেজিপ্রতি দাম গিয়ে ঠেকে ২৪০ টাকায়। রমজান মাসে আরও বাড়তে পারে পেঁয়াজের দাম- এমন শঙ্কা থেকে ফেব্রুয়ারির মাঝামাঝি ভারত থেকে পেঁয়াজ আমদানির সিদ্ধান্ত নেয় সরকার। ভারত সরকারও এতে নীতিগত সম্মতি দেয়। সরকারের পক্ষ থেকে বলা হয়, রোজার আগেই দেশে আসবে ভারতীয় পেঁয়াজ। তবে ঘোষণার মাস পেরিয়ে গেলেও এখনো সরকারিভাবে দেশে আসেনি ভারতীয় পেঁয়াজ।

                                 তবে সীমান্ত দিয়ে চোরাইপথে আসা পেঁয়াজে ভরে গেছে চট্টগ্রামের খাতুনগঞ্জের আড়ত। এতে মাত্র ১০ দিনের ব্যবধানে ভোগ্যপণ্যে দেশের দ্বিতীয় বৃহৎ পাইকারি বাজারটিতে ভারতীয় পেঁয়াজের দাম কমেছে কেজিপ্রতি ৫৫-৬০ টাকা। কমেছে দেশি পেঁয়াজের দামও।"
                                    imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                    clamp={3}
                                    maxLength={150}

                                    onClick={() => alert('News card clicked!')}
                                />


                            </div>
                            <div className=" w-full md:w-7/12 grid grid-cols-1 gap-4 pt-4 md:pt-0 px-0 md:px-8 ">

                                <NewsCardHorizontal
                                    imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                    highlight=""
                                    title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                    right={true}
                                    left={false}
                                />
                                <NewsCardHorizontal
                                    imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                    highlight="এমভি আবদুল্লাহ"
                                    title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                    right={true}
                                    left={false}
                                />
                                <NewsCardHorizontal
                                    imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                    highlight="এমভি আবদুল্লাহ"
                                    title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                    right={true}
                                    left={false}
                                />
                                <NewsCardHorizontal
                                    imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                    highlight="এমভি আবদুল্লাহ"
                                    title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                                    right={true}
                                    left={false}
                                />

                            </div>


                        </div>

                    </div>

                    <div className="block lg:w-1/4 ">
                        {/* right side  */}

                        <Image
                            width={200}
                            height={200}
                            src={ad2}
                            alt="Blog Image"
                            className="w-full h-[192px]   aspect-video  bg-gray-50 oobject-fill mb-4"
                            priority
                        />

                        <div className='space-y-4 '>

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
            </div>

            <BodyContainer>
                <Ad image={ad} link={'#'} />
            </BodyContainer>
        </div>
    );
};

export default CountryNewsSection;