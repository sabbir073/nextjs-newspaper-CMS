"use client";
import React from "react";
import BodyContainer from "@/components/common/BodyContainer";
import VideoCard from './VideoCard'
const VideoSection: React.FC = () => {
  return (
    <BodyContainer>
      <div className="pt-5">
        <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl  py-1">
          <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
          ভিডিও
          </div>
          <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
            আরও
          </div>
        </div>
        <div className="w-full grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-7 mt-5 ">
          <VideoCard videoUrl="https://youtu.be/G1lAfJ5QJh4" title="মার্কিন নির্বাচন: এগিয়ে আছেন ট্রাম্প | US Presidential Election 2024" />
          <VideoCard videoUrl="https://youtu.be/G1lAfJ5QJh4" title="মার্কিন নির্বাচন: এগিয়ে আছেন ট্রাম্প | US Presidential Election 2024" />
          <VideoCard videoUrl="https://youtu.be/G1lAfJ5QJh4" title="মার্কিন নির্বাচন: এগিয়ে আছেন ট্রাম্প | US Presidential Election 2024" />
        </div>
      </div>
    </BodyContainer>
  );
};

export default VideoSection;
