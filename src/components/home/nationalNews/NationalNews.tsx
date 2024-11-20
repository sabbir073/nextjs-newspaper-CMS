/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import Image from "next/image";
import BodyContainer from "../../common/BodyContainer";
import NewsCard from "../FeatureNews/NewsCard";
import NewsCardHorizontal from "../HorizontalCard";
import NewsItem from "../FeatureNews/NewsItem";

import Ad from '../../common/Ad'
import ad from '../../../assets/bangla-bid-ad.jpg'

const NationalNewsSection: React.FC = () => {
  const handleItemClick = (text: string) => {
    alert(`You clicked on: ${text}`);
  };
  return (
    <BodyContainer>
      <div className="pt-5 md:pt-8">
        <div className=" xl:flex xl:space-x-5">
        
          <div className=" w-full xl:w-[67%]">
            <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1 ">
              <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
                জাতীয়
              </div>
              <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
                আরও
              </div>
            </div>
            <div className="space-y-1 md:space-y-0 w-full md:flex md:space-x-4 pt-5 ">
              <div className="w-full md:w-1/2 ">
                {/* Main Image */}
                <NewsCard
                  title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                  description="অভ্যন্তরীণ বাজারে সরবরাহ ঠিক রাখতে গত ৭ ডিসেম্বর পেঁয়াজ রপ্তানি বন্ধ করে ভারত সরকার। এই ঘোষণার পরপরই অস্থিতিশীল হতে শুরু করে বাংলাদেশের পেঁয়াজের বাজার। হু হু করে বাড়তে থাকে দাম। কেজিপ্রতি দাম গিয়ে ঠেকে ২৪০ টাকায়। রমজান মাসে আরও বাড়তে পারে পেঁয়াজের দাম- এমন শঙ্কা থেকে ফেব্রুয়ারির মাঝামাঝি ভারত থেকে পেঁয়াজ আমদানির সিদ্ধান্ত নেয় সরকার। ভারত সরকারও এতে নীতিগত সম্মতি দেয়। সরকারের পক্ষ থেকে বলা হয়, রোজার আগেই দেশে আসবে ভারতীয় পেঁয়াজ। তবে ঘোষণার মাস পেরিয়ে গেলেও এখনো সরকারিভাবে দেশে আসেনি ভারতীয় পেঁয়াজ।

                                 তবে সীমান্ত দিয়ে চোরাইপথে আসা পেঁয়াজে ভরে গেছে চট্টগ্রামের খাতুনগঞ্জের আড়ত। এতে মাত্র ১০ দিনের ব্যবধানে ভোগ্যপণ্যে দেশের দ্বিতীয় বৃহৎ পাইকারি বাজারটিতে ভারতীয় পেঁয়াজের দাম কমেছে কেজিপ্রতি ৫৫-৬০ টাকা। কমেছে দেশি পেঁয়াজের দামও।"
                  imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                  clamp={3}
                  maxLength={140}
                  onClick={() => alert("News card clicked!")}
                />
              </div>

              <div className=" w-full md:w-1/2 grid grid-cols-1 gap-[20px]  pt-4 md:pt-0 ">
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

          <div className=" w-full xl:w-[33%] pt-4 md:pt-4 xl:pt-0  ">
            {/* right side  */}
            <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
              <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
                রাজনীতি
              </div>
              <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
                আরও
              </div>
            </div>

            <div className=" w-full grid grid-cols-1 gap-[20.5px] pt-4  ">
              <NewsItem
                text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                onClick={() =>
                  handleItemClick(
                    "মাত্র চার মাস বয়সেই বিলিয়নিয়ার, কে সেই সৌভাগ্যবান শিশু?"
                  )
                }
                Icon={false}
              />
              <NewsItem
                text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                onClick={() =>
                  handleItemClick(
                    "বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                  )
                }
                Icon={false}
              />
              <NewsItem
                text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                onClick={() =>
                  handleItemClick(
                    "বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                  )
                }
                Icon={false}
              />
              <NewsItem
                text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                onClick={() =>
                  handleItemClick(
                    "বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                  )
                }
                Icon={false}
              />
              <NewsItem
                text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                onClick={() =>
                  handleItemClick(
                    "বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                  )
                }
                Icon={false}
              />
             
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-5 lg:flex md:space-x-2 lg:space-x-4 space-y-4 md:space-y-0 pt-2 md:pt-0">
        <div className=" w-full lg:w-3/">

          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              জাতীয়
            </div>
          
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
            আরও
            </div>
          </div>

          <div className="space-y-1 md:space-y-0 md:space-x-4 pt-4 2xl:pt-10 w-full md:flex">
            <div className="w-full md:w-1/2 ">
              <NewsCard
                title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                description="অভ্যন্তরীণ বাজারে সরবরাহ ঠিক রাখতে গত ৭ ডিসেম্বর পেঁয়াজ রপ্তানি বন্ধ করে ভারত সরকার। এই ঘোষণার পরপরই অস্থিতিশীল হতে শুরু করে বাংলাদেশের পেঁয়াজের বাজার। হু হু করে বাড়তে থাকে দাম। কেজিপ্রতি দাম গিয়ে ঠেকে ২৪০ টাকায়। রমজান মাসে আরও বাড়তে পারে পেঁয়াজের দাম- এমন শঙ্কা থেকে ফেব্রুয়ারির মাঝামাঝি ভারত থেকে পেঁয়াজ আমদানির সিদ্ধান্ত নেয় সরকার। ভারত সরকারও এতে নীতিগত সম্মতি দেয়। সরকারের পক্ষ থেকে বলা হয়, রোজার আগেই দেশে আসবে ভারতীয় পেঁয়াজ। তবে ঘোষণার মাস পেরিয়ে গেলেও এখনো সরকারিভাবে দেশে আসেনি ভারতীয় পেঁয়াজ।

                                 তবে সীমান্ত দিয়ে চোরাইপথে আসা পেঁয়াজে ভরে গেছে চট্টগ্রামের খাতুনগঞ্জের আড়ত। এতে মাত্র ১০ দিনের ব্যবধানে ভোগ্যপণ্যে দেশের দ্বিতীয় বৃহৎ পাইকারি বাজারটিতে ভারতীয় পেঁয়াজের দাম কমেছে কেজিপ্রতি ৫৫-৬০ টাকা। কমেছে দেশি পেঁয়াজের দামও।"
                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                clamp={3}
                maxLength={340}
                onClick={() => alert("News card clicked!")}
              />
            </div>

            <div className=" w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 pt-4 md:pt-0 gap-4 ">
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

        <div className="block lg:w-1/4 pt-5 lg:pt-0">
         

          <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
            <div className="bg-gray-100 border-l-4 border-r-4 border-indigo-500 text-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer hover:bg-red-500 hover:text-white">
            রাজনীতি
            </div>
            <div className="  bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
              আরও
            </div>
          </div>

          <div className=" w-full grid grid-cols-1 gap-1 pt-4  ">
            <NewsItem
              text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
              onClick={() =>
                handleItemClick(
                  "মাত্র চার মাস বয়সেই বিলিয়নিয়ার, কে সেই সৌভাগ্যবান শিশু?"
                )
              }
              Icon={false}
            />
            <NewsItem
              text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
              onClick={() =>
                handleItemClick(
                  "বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                )
              }
              Icon={false}
            />
            <NewsItem
              text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
              onClick={() =>
                handleItemClick(
                  "বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                )
              }
              Icon={false}
            />
          </div>
        </div>
      </div> */}

      <BodyContainer>
        <Ad image={ad} link={"#"} />
      </BodyContainer>
    </BodyContainer>
  );
};

export default NationalNewsSection;
