"use client";
import React from "react";
import Image from "next/image";
import NewsCardHorizontal from "../HorizontalCard";
import Ad from "@/assets/super-white-ad.webp";
import BodyContainer from "@/components/common/BodyContainer";

const LiteratureNews: React.FC = () => {
  return (
    <BodyContainer>
     
      <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1 my-2 mt-6 md:mt-8 ">
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
            সাহিত্য
            </div>
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              আরও
            </div>
          </div>

      <div className=" lg:flex space-y-4 sm:space-y-0 md:space-y-4 lg:space-y-0 lg:space-x-4 pt-4 ">
        <div className=" w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["", "", "", "", "", ""].map((item, index) => (
            <NewsCardHorizontal
            key={index}
              imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
              title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
              right={false}
              left={true}
            />
          ))}
        </div>

        <div className="w-full sm:w-1/3 space-y-5 lg:px- ">
          <Image
            width={400}
            height={400}
            src={Ad}
            alt="Blog Image"
            className="w-full h-[192px] lg:h-fit object-contain rounded-md cursor-pointer"
            priority
          />
        </div>
      </div>
    </BodyContainer>
  );
};

export default LiteratureNews;
