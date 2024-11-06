"use client";
import React from "react";
import Image from "next/image";

import Ad from "@/assets/super-white-ad.webp";
import ShortNewsCard from "../FeatureNews/ShortNewsCard";
import BodyContainer from "@/components/common/BodyContainer";

const TechnologyNews: React.FC = () => {
  return (
    <BodyContainer className=" mt-12 ">
      <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
        <div className="bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
          প্রযুক্তি
        </div>
        <div className="bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
          আরও
        </div>
      </div>

      <div className=" lg:flex space-y-5 md:space-y-0 pt-4 ">
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:pr-4 ">
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
        </div>

        <div className="block ">
          {/* right side  */}
          <Image
            width={800}
            height={800}
            src={Ad}
            alt="Blog Image"
            className="w-full sm:w-fit sm:h-[220px] md:h-[250px] rounded-md object-contain cursor-pointer"
            priority
          />
        </div>
      </div>
    </BodyContainer>
  );
};

export default TechnologyNews;
