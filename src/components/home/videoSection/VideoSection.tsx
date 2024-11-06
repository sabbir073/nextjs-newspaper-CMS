"use client";
import React from "react";
import Image from "next/image";
import BodyContainer from "@/components/common/BodyContainer";
import VideoCard from './VideoCard'
const VideoSection: React.FC = () => {
  return (
    <BodyContainer>
      <div className="pt-4 mb-8 ">
        <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
          <div className="bg-gray-100 border-l-4 border-r-4 border-indigo-500 text-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer hover:bg-red-500 hover:text-white">
          ভিডিও
          </div>
          <div className="bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
            আরও
          </div>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3  gap-4 mt-8">

          <VideoCard videoUrl="https://youtu.be/G1lAfJ5QJh4" title="মার্কিন নির্বাচন: এগিয়ে আছেন ট্রাম্প | US Presidential Election 2024" />
          <VideoCard videoUrl="https://youtu.be/G1lAfJ5QJh4" title="মার্কিন নির্বাচন: এগিয়ে আছেন ট্রাম্প | US Presidential Election 2024" />
          <VideoCard videoUrl="https://youtu.be/G1lAfJ5QJh4" title="মার্কিন নির্বাচন: এগিয়ে আছেন ট্রাম্প | US Presidential Election 2024" />
         
        </div>
      </div>
    </BodyContainer>
  );
};

export default VideoSection;
