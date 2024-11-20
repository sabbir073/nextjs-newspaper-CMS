"use client";
import React from "react";
import Image from "next/image";
import BodyContainer from "@/components/common/BodyContainer";

interface OpinionCardProps {
  imageUrl: string;
  title: string;
  author: string;
}

const OpinionCard: React.FC<OpinionCardProps> = ({
  imageUrl,
  title,
  author,
}) => {
  return (
    <div className="flex p-3 rounded-lg shadow-md bg-white border cursor-pointer">
      <div className="relative w-28 h-28 xl:w-32 xl:h-32 rounded-lg overflow-hidden border-4 border-red-500">
        <Image
          width={150}
          height={150}
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="ml-4 py-2  ">
        <h3 className="text-gray-900 font-bold text-xl hover:text-red-500 cursor-pointer ">{title}</h3>
        <p className="text-gray-500 text-xl mt-1 hover:text-red-500 cursor-pointer">{author}</p>
      </div>
    </div>
  );
};

const OpinionSection: React.FC = () => {
  return (
    <BodyContainer>
      <div className="pt-6">
        <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl  py-1">
          <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
            মতামত
          </div>
          <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
            আরও
          </div>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3  gap-4 mt-5">
          <OpinionCard
            imageUrl="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
            title="স্মৃতি লিঙ্খন: কবি সৈয়দ আবদুস সাদিক"
            // subtitle="কবি মাহফুজ আহমেদ"
            author="কবি মাহফুজ আহমেদ"
          />
          <OpinionCard
            imageUrl="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
            title="স্মৃতি লিঙ্খন: কবি সৈয়দ আবদুস সাদিক"
            // subtitle="কবি মাহফুজ আহমেদ"
            author="কবি মাহফুজ আহমেদ"
          />
          <OpinionCard
            imageUrl="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
            title="স্মৃতি লিঙ্খন: কবি সৈয়দ আবদুস সাদিক"
            // subtitle="কবি মাহফুজ আহমেদ"
            author="কবি মাহফুজ আহমেদ"
          />
        </div>
      </div>
    </BodyContainer>
  );
};

export default OpinionSection;
