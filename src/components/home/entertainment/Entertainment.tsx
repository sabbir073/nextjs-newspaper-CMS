"use client";
import React from "react";
import Image from "next/image";
import NewsCard from "../FeatureNews/NewsCard";

import NewsCardHorizontal from "../HorizontalCard";
import BodyContainer from "@/components/common/BodyContainer";

const EntertainmentNews: React.FC = () => {
  return (
    <BodyContainer className=" mt-6 ">
      <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
        <div className="bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
          বিনোদন
        </div>

        <div className="bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
          আরও
        </div>
      </div>

      <div className=" lg:flex space-y-5 md:space-y-0 pt-4 lg:space-x-4 ">
        <div className=" w-full lg:w-[30%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
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

        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:pt-6 lg:pt-0 lg:w-[70%] ">
          <div className="w-full md:w-[50%] lg:w-[55%]">
            {/* Main  */}
            <NewsCard
              title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
              description="
                        বাংলাদেশ ফুটবল দল বর্তমানে কুয়েতে অবস্থান করছে। আগামীকাল কুয়েতের সময় রাত সাড়ে নয়টায় মাঠে ফিলিস্তিনের বিপক্ষে বিশ্বকাপের বাছাইপর্বের ম্যাচ খেলবেন জামাল ভূঁইয়ারা। সৌদিতে দুই সপ্তাহ ক্যাপ শেষে এবার কুয়েতের আবহাওয়া কন্ডিশনে এবং ফিলিস্তিনের বিপক্ষে ম্যাচকে সামনে রেখে শেষবারের মতো নিজেদের ঝালিয়ে নিতে অনুশীলনে ব্যস্ত সময় পার করছে বাংলাদেশ দল। আসন্ন ম্যাচে ফিলিস্তিনের আক্রমণভাগই ... "
              imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
              clamp={4}
              maxLength={340}
              onClick={() => alert("News card clicked!")}
            />
          </div>

          <div className="block md:w-[50%] lg:w-[45%] md:space-y-4">
            {/* right side  */}
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
    </BodyContainer>
  );
};

export default EntertainmentNews;
