"use client";
import React from "react";
import Image from "next/image";
import SubtitleTitle from "../SubtitleTitle";
import BodyContainer from "@/components/common/BodyContainer";


interface BlogCardProps {
  imageSrc: string;
  title: string;
  highlight: string;
  onClick?: () => void;
}

const ShortNewsCard: React.FC<BlogCardProps> = ({ imageSrc, title, highlight, onClick }) => {
  return (
      <div
          className="w-full h-[200px] md:h-[280px]  cursor-pointer bg-white rounded-xl shadow-md group"
          onClick={onClick}
      >
          <div className="relative w-full h-[150px]  md:h-[180px]  rounded-t-lg overflow-hidden">
              <Image
                  width={800}
                  height={840}
                  src={imageSrc}
                  alt="Blog Image"
                  className="object-fill w-full h-full rounded-t-xl"
                  priority
              />
          </div>
          <div className="p-4">
              {highlight && (
                  <h1 className="text-red-500 text-xl lg:text-2xl font-bold line-clamp-2">
                      {highlight}
                  </h1>
              )}
              <h2 className="text-black mt-1 text-lg md:text-xl lg:text-2xl font-semibold line-clamp-1 md:line-clamp-2 group-hover:text-red-500">
                  {title}
              </h2>
          </div>
      </div>
  );
};


const ReligionNews: React.FC = () => {
  return (
    <BodyContainer>
      <div className=" pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  my-4">
        <div className=" w-full ">
          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
            ধর্ম
            </div>
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              আরও
            </div>
          </div>

          <div className="space-y-4 mt-4 md:mt-6">
            <ShortNewsCard
              title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
              imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
              onClick={() => alert("News card clicked!")}
              highlight=""
            />

            <SubtitleTitle subtitle="" title="লক্ষণ, কারণ ও করণীয়" />

            <SubtitleTitle subtitle="" title="মা হিসেবে আপনার করণীয়" />

            <SubtitleTitle
              subtitle=""
              title="ঢাকার নদী, লেক, টিউবওয়েলের পানি ও পোশাকে 'রাসায়নিক'!"
            />
          </div>
        </div>

        <div className="w-full ">
     
          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
            ভিন্নরকম
            </div>
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              আরও
            </div>
          </div>

          <div className="space-y-4 mt-4 md:mt-6">
            <ShortNewsCard
              title="অ্যাসিডিটি কমায় 'লাউ'"
              imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
              onClick={() => alert("News card clicked!")}
              highlight=""
            />
            <SubtitleTitle subtitle="" title="সানবার্ন এবং সান পয়জনিং কী? " />

            <SubtitleTitle subtitle="" title="সানবার্ন এবং সান পয়জনিং কী? " />

            <SubtitleTitle subtitle="" title="সানবার্ন এবং সান পয়জনিং কী? " />
          </div>
        </div>

        <div className="w-full ">
          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
            শিক্ষা
            </div>
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              আরও
            </div>
          </div>

          <div className="space-y-4 mt-4 md:mt-6">
            <ShortNewsCard
              title="সত্যি কি মিথ্যানিয়মিত লিপস্টিক ব্যবহার করলে ঠোঁট কালো হয়?"
              imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
              onClick={() => alert("News card clicked!")}
              highlight=""
            />

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

        <div className="w-full ">
         
          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
            পর্যটন
            </div>
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              আরও
            </div>
          </div>

          <div className="space-y-4 mt-4 md:mt-6">
            <ShortNewsCard
              title="সত্যি কি মিথ্যানিয়মিত লিপস্টিক ব্যবহার করলে ঠোঁট কালো হয়?"
              imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
              onClick={() => alert("News card clicked!")}
              highlight=""
            />

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
    </BodyContainer>
  );
};

export default ReligionNews;
