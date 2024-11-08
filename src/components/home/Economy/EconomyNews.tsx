"use client";
import React from "react";
import BodyContainer from "../../common/BodyContainer";
import NewsCardHorizontal from "../HorizontalCard";
import NewsCard from "../FeatureNews/NewsCard";
import NewsItem from "../FeatureNews/NewsItem";

const EcomomyNews: React.FC = () => {
  const handleItemClick = (text: string) => {
    alert(`You clicked on: ${text}`);
    // You could also navigate to a new page, fetch more details, etc.
  };
  return (
    <BodyContainer>
      <div className=" md:space-x-4 lg:space-x-5 md:flex space-y-4 md:space-y-0 pt-2 md:pt-6 ">
        
        <div className=" w-full md:w-1/2 lg:w-[35%] xl:w-[33%] ">
          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1 mt-4 sm:mt-0">
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              অর্থনীতি
            </div>

            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              আরও
            </div>
          </div>

          <div className=" w-full space-y-4 sm:space-y-0 sm:space-x-4 pt-4 sm:flex md:flex-col md:space-x-0 md:space-y-7 ">
            <div className="sm:w-1/2 md:w-full ">
              <NewsCard
                title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                description=""
                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                clamp={3}
                maxLength={180}
                onClick={() => alert("News card clicked!")}
              />
            </div>
            <div className="space-y-5 sm:w-1/2 md:w-full">
              <NewsItem
                text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                onClick={() =>
                  handleItemClick(
                    "মাত্র চার মাস বয়সেই বিলিয়নিয়ার, কে সেই সৌভাগ্যবান শিশু?"
                  )
                }
                Icon={false}
              />
              <NewsItem
                text="৯০ হাজার বছরের পুরোনো ‘মানুষের পায়ের ছাপ’ মিললো মরক্কোতে"
                onClick={() =>
                  handleItemClick(
                    "বোরকা পরে নারীর বেশে ভিক্ষা করেছিলেন পুরুষ, অতঃপর..."
                  )
                }
                Icon={false}
              />
            </div>
          </div>
        </div>


        <div className="block md:w-1/2 lg:w-[65%] xl:w-[66%]">
          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              ফিচার
            </div>

            <div className=" text-white text-2xl md:text-3xl px-4  ml-4 cursor-pointer">
              আরও
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 pt-4">
            {["", "", "", "", "", "", "", "","",""].map((item, index) => (
              <NewsCardHorizontal
                key={index}
                imageSrc="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
                highlight=""
                title="জিম্মিদের উদ্ধারে ‘মধ্যস্থতাকারী’র সঙ্গে যোগাযোগ রাখছে বাংলাদেশ"
                right={false}
                left={true}
              />
            ))}
          </div>
        </div>
      </div>
    </BodyContainer>
  );
};

export default EcomomyNews;
