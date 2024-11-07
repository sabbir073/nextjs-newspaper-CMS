"use client";
import React from "react";
import BodyContainer from "../../common/BodyContainer";

interface HorizontalScrollableTextProps {
  text: string;
}

const InfiniteScrollText: React.FC<HorizontalScrollableTextProps> = ({
  text,
}) => {
  return (
    <BodyContainer>
      <div className="flex items-center px-0 sm:px-2">
        <button className="bg-base-content  text-white px-2 py-2 text-2xl  rounded-md mr-2">
          ঘোষণা
        </button>
        <div className="flex-1 py-2  overflow-hidden bg-base-content rounded-md">
          <div className="animate-scroll whitespace-nowrap text-2xl   text-white px-4  ">
          আমাদের ওয়েবসাইটটি বর্তমানে উন্নততর সেবার নিশ্চিত করার লক্ষ্যে রক্ষণাবেক্ষণের কাজ চলছে। এই কারণে আপনারা কিছুটা বিঘ্ন লক্ষ্য করতে পারেন। আমরা চেষ্টা করছি যত দ্রুত সম্ভব সবকিছু স্বাভাবিক করতে। আপনাদের ধৈর্যের জন্য ধন্যবাদ।
          </div>
        </div>
      </div>
    </BodyContainer>
  );
};

export default InfiniteScrollText;
