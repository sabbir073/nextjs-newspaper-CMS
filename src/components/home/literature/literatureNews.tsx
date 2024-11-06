"use client";
import React from "react";
import Image from "next/image";
import ShortNewsCard from "../FeatureNews/ShortNewsCard";

import SubtitleTitle from "../SubtitleTitle";
import NewsCardHorizontal from "../HorizontalCard";

import Ad from "@/assets/super-white-ad.webp";
import BodyContainer from "@/components/common/BodyContainer";

const LiteratureNews: React.FC = () => {
  return (
    <BodyContainer className=" mt-6 ">
      <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
        <div className="bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
          সাহিত্য
        </div>
        <div className="bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
          আরও
        </div>
      </div>

      <div className=" lg:flex space-y-5 lg:space-y-0 pt-4 ">
        <div className=" w-full lg:w-2/3  md:pr-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {["", "", "", "", "", ""].map((item, index) => (
            <NewsCardHorizontal
              imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
              highlight="এমভি আবদুল্লাহ"
              title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
              right={false}
              left={true}
            />
          ))}
        </div>

        <div className="w-full md:w-1/3 space-y-5 lg:px-4 ">
          <Image
            width={200}
            height={200}
            src={Ad}
            alt="Blog Image"
            className="w-full h-[192px] lg:h-fit object-contain rounded-md mb-4 cursor-pointer"
            priority
          />
        </div>
      </div>
    </BodyContainer>
  );
};

export default LiteratureNews;
