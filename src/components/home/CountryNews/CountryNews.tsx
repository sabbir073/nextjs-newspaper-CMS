"use client";
import React from "react";
import Image from "next/image";

import BodyContainer from "../../common/BodyContainer";
import Ad from "../../common/Ad";
import ad2 from "@/assets/super-white-ad.webp";
import ad from "@/assets/bangla-bid-ad.jpg";
import NewsCardHorizontal from "../HorizontalCard";

import NewsCard from "../FeatureNews/NewsCard";

const CountryNewsSection: React.FC = () => {
  return (
    <BodyContainer>
      <div className=" pt-4 mb-4 ">
        <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
          <div className="bg-gray-100 border-l-4 border-r-4 border-indigo-500 text-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer hover:bg-red-500 hover:text-white">
            সারাদেশ
          </div>
          <div className="bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
            আরও
          </div>
        </div>

        <div className=" xl:flex md:space-x-2 xl:space-x-4 space-y-4 md:space-y-0 pt-2 md:pt-5">
          <div className=" w-full xl:w-[68%] ">
            {/* left side  */}
            <div className="space-y-1 md:space-y-0 2xl:pt-10 w-full md:flex md:space-x-4">
              <div className="w-full md:w-1/2 ">
                {/* Main Image */}
                <NewsCard
                  title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                  description="অভ্যন্তরীণ বাজারে সরবরাহ ঠিক রাখতে গত ৭ ডিসেম্বর পেঁয়াজ রপ্তানি বন্ধ করে ভারত সরকার। এই ঘোষণার পরপরই অস্থিতিশীল হতে শুরু করে বাংলাদেশের পেঁয়াজের বাজার। হু হু করে বাড়তে থাকে দাম। কেজিপ্রতি দাম গিয়ে ঠেকে ২৪০ টাকায়। রমজান মাসে আরও বাড়তে পারে পেঁয়াজের দাম- এমন শঙ্কা থেকে ফেব্রুয়ারির মাঝামাঝি ভারত থেকে পেঁয়াজ আমদানির সিদ্ধান্ত নেয় সরকার। ভারত সরকারও এতে নীতিগত সম্মতি দেয়। সরকারের পক্ষ থেকে বলা হয়, রোজার আগেই দেশে আসবে ভারতীয় পেঁয়াজ। তবে ঘোষণার মাস পেরিয়ে গেলেও এখনো সরকারিভাবে দেশে আসেনি ভারতীয় পেঁয়াজ।

                                 তবে সীমান্ত দিয়ে চোরাইপথে আসা পেঁয়াজে ভরে গেছে চট্টগ্রামের খাতুনগঞ্জের আড়ত। এতে মাত্র ১০ দিনের ব্যবধানে ভোগ্যপণ্যে দেশের দ্বিতীয় বৃহৎ পাইকারি বাজারটিতে ভারতীয় পেঁয়াজের দাম কমেছে কেজিপ্রতি ৫৫-৬০ টাকা। কমেছে দেশি পেঁয়াজের দামও।"
                  imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                  clamp={3}
                  maxLength={260}
                  onClick={() => alert("News card clicked!")}
                />
              </div>

              <div className=" w-full md:w-1/2 grid grid-cols-1 gap-4 pt-4 md:pt-0 px-0 ">
                <NewsCardHorizontal
                  imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                  highlight=""
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

          <div className=" w-full xl:w-[32%] md:pt-4 xl:pt-0">
            {/* right side  */}

            <Image
              width={500}
              height={500}
              src={ad2}
              alt="Blog Image"
              className="w-full h-[180px] mb-4 xl:w-full xl:h-[270px] rounded-md shadow-md"
              priority
            />

            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
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
          </div>
        </div>
      </div>

      <BodyContainer>
        <Ad image={ad} link={"#"} />
      </BodyContainer>
    </BodyContainer>
  );
};

export default CountryNewsSection;
