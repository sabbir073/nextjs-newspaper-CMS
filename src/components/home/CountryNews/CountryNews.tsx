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
      <div className="pt-6 md:pt-9">
        <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
          <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
            সারাদেশ
          </div>
          <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
            আরও
          </div>
        </div>
        
        <div className=" xl:flex space-y-4 md:space-y-0 xl:space-x-4 pt-4 md:pt-5">
         
          <div className=" w-full xl:w-[68%]">
            {/* left side  */}
            <div className="space-y-1 md:space-y-0 w-full md:flex md:space-x-5 ">
              <div className="w-full md:w-1/2 ">
                {/* Main Image */}
                <NewsCard
                  title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                  description="অভ্যন্তরীণ বাজারে সরবরাহ ঠিক রাখতে গত ৭ ডিসেম্বর পেঁয়াজ রপ্তানি বন্ধ করে ভারত সরকার। এই ঘোষণার পরপরই অস্থিতিশীল হতে শুরু করে বাংলাদেশের পেঁয়াজের বাজার। হু হু করে বাড়তে থাকে দাম। কেজিপ্রতি দাম গিয়ে ঠেকে ২৪০ টাকায়। রমজান মাসে আরও বাড়তে পারে পেঁয়াজের দাম- এমন শঙ্কা থেকে ফেব্রুয়ারির মাঝামাঝি ভারত থেকে পেঁয়াজ আমদানির সিদ্ধান্ত নেয় সরকার। ভারত সরকারও এতে নীতিগত সম্মতি দেয়। সরকারের পক্ষ থেকে বলা হয়, রোজার আগেই দেশে আসবে ভারতীয় পেঁয়াজ। তবে ঘোষণার মাস পেরিয়ে গেলেও এখনো সরকারিভাবে দেশে আসেনি ভারতীয় পেঁয়াজ।

                                 তবে সীমান্ত দিয়ে চোরাইপথে আসা পেঁয়াজে ভরে গেছে চট্টগ্রামের খাতুনগঞ্জের আড়ত। এতে মাত্র ১০ দিনের ব্যবধানে ভোগ্যপণ্যে দেশের দ্বিতীয় বৃহৎ পাইকারি বাজারটিতে ভারতীয় পেঁয়াজের দাম কমেছে কেজিপ্রতি ৫৫-৬০ টাকা। কমেছে দেশি পেঁয়াজের দামও।"
                  imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                  clamp={3}
                  maxLength={180}
                  onClick={() => alert("News card clicked!")}
                />
              </div>

              <div className=" w-full md:w-1/2 grid grid-cols-1 gap-7  pt-4 md:pt-0 px-0 pr-0 ">
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
            </div>
          </div>

          <div className=" w-full flex flex-col justify-between xl:w-[32%] md:pt-4 xl:pt-0  ">
            {/* right side  */}

            <Image
              width={500}
              height={500}
              src={ad2}
              alt="Blog Image"
              className="w-full h-[180px] mb-4 xl:w-full xl:h-[240px] rounded-md shadow-md"
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

      <div>
        <Ad image={ad} link={"#"} />
      </div>
    </BodyContainer>
  );
};

export default CountryNewsSection;
