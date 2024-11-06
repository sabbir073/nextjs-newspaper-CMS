"use client";
import React from "react";
import Image from "next/image";

import BodyContainer from "../../common/BodyContainer";
import Ad from "../..//common/Ad";
import ad from "@/assets/bangla-bid-ad.jpg";
import ShortNewsCard from "../FeatureNews/ShortNewsCard";
import NewsCardHorizontal from "../HorizontalCard";
import NewsCard from "../FeatureNews/NewsCard";

import SubtitleTitle from "../SubtitleTitle";

const EcomomyNews: React.FC = () => {
  return (
    <BodyContainer className="">
      <div className=" md:flex md:space-x-2 lg:space-x-4 space-y-4 md:space-y-0 pt-2 md:pt-6">
        <div className=" w-full md:w-1/2 lg:w-[35%] ">
         
          <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
            <div className="bg-gray-100 border-l-4 border-r-4 border-indigo-500 text-red-500 text-2xl md:text-3xl px-2 rounded-full ml-4 cursor-pointer hover:bg-red-500 hover:text-white">
            অর্থনীতি
            </div>
            <div className="bg-red-500 text-2xl md:text-3xl  px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
              আরও
            </div>
          </div>

          <div className="w-full space-y-4 sm:space-y-0 sm:space-x-4 pt-4 sm:flex md:flex-col md:space-x-0 md:space-y-4">
            <div className="sm:w-1/2 md:w-full">
              <ShortNewsCard
                title="ইসরায়েলি হামলায় এক সপ্তাহে শতাধিক ত্রাণকর্মী নিহত"
                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                onClick={() => alert("News card clicked!")}
                highlight=""
              />
            </div>
            <div className="space-y-4 sm:w-1/2 md:w-full">
              <SubtitleTitle title="শ্রমিকদের ১৮ দফা দাবি বাস্তবায়নে সম্মত হয়েছে" />
              <SubtitleTitle
                subtitle="মালিকপক্ষ: উপদেষ্টা আসিফ"
                title="শ্রমিকদের ১৮ দফা দাবি বাস্তবায়নে সম্মত হয়েছে"
              />
            </div>
          </div>
        </div>

        <div className="block md:w-1/2 lg:w-[65%] ">
          <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
            <div className="bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
              ফিচার
            </div>

            <div className="bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
              আরও
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
            {["", "", "", "", "", "", "", ""].map((item, index) => (
              <NewsCardHorizontal
                key={index}
                imageSrc="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
                highlight=""
                title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                right={false}
                left={true}
              />
            ))}
          </div>
        </div>
      </div>
    </BodyContainer>
  );
};

export default EcomomyNews;
