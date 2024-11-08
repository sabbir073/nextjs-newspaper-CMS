"use client";
import React from "react";
import Image from "next/image";
import Ad from "@/assets/super-white-ad.webp";
import ShortNewsCard from "../FeatureNews/ShortNewsCard";
import BodyContainer from "@/components/common/BodyContainer";

const TechnologyNews: React.FC = () => {
  return (
    <BodyContainer>
      <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1 mt-6 ">
        <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
          প্রযুক্তি
        </div>

        <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
          আরও
        </div>
      </div>

      <div className=" lg:flex space-y-5 md:space-y-0 pt-5 ">
        <div className=" w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:pr-4 mx-auto ">
          {/* left side  */}

          <ShortNewsCard
            title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
            imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
            onClick={() => alert("News card clicked!")}
            highlight=""
          />
          <ShortNewsCard
            title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
            imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
            onClick={() => alert("News card clicked!")}
            highlight=""
          />
          <ShortNewsCard
            title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
            imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
            onClick={() => alert("News card clicked!")}
            highlight=""
          />
          <div className="block ">
          {/* right side  */}
          <Image
            width={800}
            height={800}
            src={Ad}
            alt="Blog Image"
            className="w-full h-full mx-auto rounded-md object-contain cursor-pointer"
            priority
          />
        </div>
        </div>

        
      </div>
    </BodyContainer>
  );
};

export default TechnologyNews;
