"use client";
import React from "react";
import Image from "next/image";
import ShortNewsCard from "../FeatureNews/ShortNewsCard";

import SubtitleTitle from "../SubtitleTitle";
import BodyContainer from "@/components/common/BodyContainer";

const ReligionNews: React.FC = () => {
  return (
    <BodyContainer className=" mt-6 ">
      <div className=" pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        <div className=" w-full ">
          {/* left side  */}

          <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
            <div className="bg-gray-100 border-l-4 border-r-4 border-indigo-500 text-red-500 text-2xl  px-4 rounded-full ml-4 cursor-pointer hover:bg-red-500 hover:text-white">
              ধর্ম
            </div>
            <div className="bg-red-500 text-2xl  px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
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
          <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
            <div className="bg-gray-100 border-l-4 border-r-4 border-indigo-500 text-red-500 text-2xl  px-4 rounded-full ml-4 cursor-pointer hover:bg-red-500 hover:text-white">
              ভিন্নরকম
            </div>
            <div className="bg-red-500 text-2xl  px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
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
          <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
            <div className="bg-gray-100 border-l-4 border-r-4 border-indigo-500 text-red-500 text-2xl  px-4 rounded-full ml-4 cursor-pointer hover:bg-red-500 hover:text-white">
              শিক্ষা
            </div>
            <div className="bg-red-500 text-2xl  px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
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
          <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
            <div className="bg-gray-100 border-l-4 border-r-4 border-indigo-500 text-red-500 text-2xl  px-4 rounded-full ml-4 cursor-pointer hover:bg-red-500 hover:text-white">
            পর্যটন
            </div>
            <div className="bg-red-500 text-2xl  px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
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
