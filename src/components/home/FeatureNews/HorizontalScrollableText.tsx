"use client";
import React from "react";
import BodyContainer from "../../common/BodyContainer";
import logo from "@/assets/logo.png";
import Image from "next/image";

interface HorizontalScrollableTextProps {
  text: string;
}

const InfiniteScrollText: React.FC<HorizontalScrollableTextProps> = ({
  text,
}) => {
  return (
    <BodyContainer>
      <div className="flex items-center px-0 sm:px-2">
        <button className="bg-black text-white px-2 py-2 text-2xl  rounded-md mr-2">
          ঘোষণা
        </button>
        <div className="flex-1 py-2  overflow-hidden bg-black rounded-md">
          <div className="animate-scroll whitespace-nowrap text-2xl   text-white px-4  ">
            আমাদের ওয়েবসাইটটি বর্তমানে আপডেট হচ্ছে
          </div>
        </div>
      </div>
    </BodyContainer>
  );
};

export default InfiniteScrollText;
