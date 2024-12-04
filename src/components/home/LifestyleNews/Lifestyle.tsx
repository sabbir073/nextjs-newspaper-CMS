"use client";
import React from "react";
import Image from "next/image";
import SubtitleTitle from "../SubtitleTitle";
import BodyContainer from "@/components/common/BodyContainer";
interface BlogCardProps {
  imageSrc: string;
  title?: string;
  description?: string;
  clamp?: number;
  maxLength?: number;
  onClick?: () => void;
}

const truncateString = (input: string, maxLength: number): string => {
  return input.length > maxLength
    ? `${input.substring(0, maxLength)}...`
    : input;
};

const NewsCard: React.FC<BlogCardProps> = ({
  imageSrc,
  title,
  description = "",
  clamp = 2,
  maxLength = 100,
  onClick,
}) => {
  return (
    <div
      // md:w-[398px]
      className="w-full  pb-4 group cursor-pointer  shadow-md rounded-xl "
      onClick={onClick}
    >
      <Image
        width={900}
        height={900}
        src={imageSrc}
        alt="Blog Image"
        className="w-full h-[200px] xl:h-[240px] object-fill rounded-t-xl"
        priority
      />
      <div className="px-2">
        <h1 className="text-black pt-3 px-2 text-2xl xl:text-4xl font-bold group-hover:text-red-500 line-clamp-2">
          {title}
        </h1>
        <article className="text-wrap px-2 py-2">
          <p className={`line-clamp-${clamp} text-xl`}>
            {truncateString(description, maxLength)}
          </p>
        </article>
      </div>
    </div>
  );
};

const LifestyleNews: React.FC = () => {
  return (
    <BodyContainer>
      <div className="pt-5 md:pt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className=" w-full  sm:pt- ">
          {/* left side  */}
          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1 my-2 sm:my-0 ">
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              স্বাস্থ্য
            </div>
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              আরও
            </div>
          </div>

          <div className="space-y-4 sm:mt-4">
            <NewsCard
              title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
              description=""
              imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
              clamp={3}
              maxLength={180}
              onClick={() => alert("News card clicked!")}
            />

            <div className="space-y-4 ">
              <SubtitleTitle
                subtitle=""
                title="ঢাকার নদী, লেক, টিউবওয়েলের পানি ও পোশাকে 'রাসায়নিক'"
              />

              <SubtitleTitle
                subtitle=""
                title="ঢাকার নদী, লেক, টিউবওয়েলের পানি ও পোশাকে 'রাসায়নিক'"
              />

              <SubtitleTitle
                subtitle=""
                title="ঢাকার নদী, লেক, টিউবওয়েলের পানি ও পোশাকে 'রাসায়নিক'!"
              />
            </div>
          </div>
        </div>

        <div className="w-full  sm:pt- ">
          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1 my-2 sm:my-0 ">
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              লাইফস্টাইল
            </div>
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              আরও
            </div>
          </div>

          <div className="space-y-4 sm:mt-4">
            <NewsCard
              title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
              description=""
              imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
              clamp={3}
              maxLength={180}
              onClick={() => alert("News card clicked!")}
            />
            <SubtitleTitle subtitle="" title="সানবার্ন এবং সান পয়জনিং কী? " />

            <SubtitleTitle subtitle="" title="সানবার্ন এবং সান পয়জনিং কী? " />

            <SubtitleTitle subtitle="" title="সানবার্ন এবং সান পয়জনিং কী? " />
          </div>
        </div>

        <div className="w-full  sm:pt- ">
          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1 my-2 sm:my-0 ">
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
            প্রবাসে বাংলাদেশ
            </div>
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              আরও
            </div>
          </div>

          <div className="space-y-4 sm:mt-4">
            <NewsCard
              title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
              description=""
              imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
              clamp={3}
              maxLength={180}
              onClick={() => alert("News card clicked!")}
            />

            <div className="space-y-4">
              <SubtitleTitle
                subtitle=""
                title="শ্রমিকদের ১৮ দফা দাবি বাস্তবায়নে সম্মত হয়েছে"
              />

              <SubtitleTitle
                subtitle=""
                title="শ্রমিকদের ১৮ দফা দাবি বাস্তবায়নে সম্মত হয়েছে"
              />
              <SubtitleTitle
                subtitle=""
                title="শ্রমিকদের ১৮ দফা দাবি বাস্তবায়নে সম্মত হয়েছে"
              />
            </div>
          </div>
        </div>
      </div>
    </BodyContainer>
  );
};

export default LifestyleNews;
