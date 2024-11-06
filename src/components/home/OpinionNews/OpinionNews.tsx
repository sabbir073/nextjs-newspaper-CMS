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
    <div className="flex p-3 rounded-lg shadow-md bg-white border ">
      <div className="relative w-28 h-28 xl:w-32 xl:h-32 rounded-lg overflow-hidden border-4 border-red-500">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="ml-4 py-2  ">
        <h3 className="text-gray-900 font-bold text-xl">{title}</h3>
        <p className="text-gray-500 text-xl mt-1">{author}</p>
      </div>
    </div>
  );
};

const OpinionSection: React.FC = () => {
  return (
    <BodyContainer>
      <div className="pt-4 mb-4 ">
        <div className="flex items-center justify-between border bg-white shadow-md rounded-xl py-3">
          <div className="bg-gray-100 border-l-4 border-r-4 border-indigo-500 text-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer hover:bg-red-500 hover:text-white">
            মতামত
          </div>
          <div className="bg-red-500 text-2xl md:text-3xl px-4 rounded-full ml-4 cursor-pointer text-white mr-4 hover:bg-gray-100 hover:text-red-500">
            আরও
          </div>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3  gap-4 mt-8">
          <OpinionCard
            imageUrl="https://firebasestorage.googleapis.com/v0/b/eimattro.appspot.com/o/news%2Fimages%2F1175fe2b-d770-45e0-aca9-24d2d9b58306.jpg?alt=media"
            title="স্মৃতি লিঙ্খন: কবি সৈয়দ আবদুস সাদিক"
            // subtitle="কবি মাহফুজ আহমেদ"
            author="কবি মাহফুজ আহমেদ"
          />
          <OpinionCard
            imageUrl="https://firebasestorage.googleapis.com/v0/b/eimattro.appspot.com/o/news%2Fimages%2F1175fe2b-d770-45e0-aca9-24d2d9b58306.jpg?alt=media"
            title="স্মৃতি লিঙ্খন: কবি সৈয়দ আবদুস সাদিক"
            // subtitle="কবি মাহফুজ আহমেদ"
            author="কবি মাহফুজ আহমেদ"
          />
          <OpinionCard
            imageUrl="https://firebasestorage.googleapis.com/v0/b/eimattro.appspot.com/o/news%2Fimages%2F1175fe2b-d770-45e0-aca9-24d2d9b58306.jpg?alt=media"
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
