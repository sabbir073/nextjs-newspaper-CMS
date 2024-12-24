/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import Link from "next/link";
import HomeLayout from "../../components/layouts/HomeLayout";
import SideAds from "../../assets/sideAd.png";
import Ads from "../../assets/super-white-ad.webp";
import ad from "../../assets/bangla-bid-ad.jpg";
import ShortNewsCard from "../../components/home/FeatureNews/ShortNewsCard";
import Ad from "../../components/common/Ad";
import CategoryCard from "../../components/category/CategoryCard";

interface NewsCategoryProps {
  params?: any;
  searchParams?: any;
}

const NewsCategory: React.FC<NewsCategoryProps> = ({ params, searchParams }) => {
  return (
    <HomeLayout>
      <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3 pt-4 mb-4 ">
        <div className="pt-2 pb-4">
          <h1 className="text-2xl md:text-4xl text-red-500 cursor-pointer ">
            {" "}
            অনুসন্ধান: পূর্বাঞ্চলের বন্যা নিয়ন্ত্রণে এই সরকার সফল: রিজভী 
          </h1>
        </div>
        <div className="border-b-2 border-gray-100 mb-2 "></div>
        <div className="lg:flex space-y-5 md:space-y-0 pt-4 ">
          <div className="w-full lg:w-3/4  gap-4  md:pr-8">
            {/* left side  */}

            <div className="md:pr-8">
              <CategoryCard
                title="ড. শাহেদুর এনআইবির নতুন মহাপরিচালক"
                description="ন্যাশনাল ইনস্টিটিউট অব বায়োটেকনোলজি (এনআইবি) এর নতুন মহাপরিচালক হলেন ড. শাহেদুর রহমান। জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের বায়োটেকনোলজি বিভাগের এই অধ্যাপক বায়োটেকনোলজি"
                author="নিজস্ব প্রতিবেদক"
                timeAgo="১১ দিন আগে"
                customClass="w-full h-48 sm:h-60 md:h-72 md:w-1/2 "
                imagePosition="right"
                imageUrl="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
              />
            </div>
          </div>

          <div className="block lg:w-1/4">
            {/* right side  */}
            <Image
              width={200}
              height={200}
              src={Ads}
              alt="Blog Image"
              className="w-full h-[192px] aspect-videobg-gray-50 oobject-fill mb-4 cursor-pointer"
              priority
            />
          </div>
        </div>

        <div className="space-y-1 md:space-y-0 md:space-x-1 pt-4 md:pt-14 w-full flex">
          <div className="hidden md:flex  md:w-1/6 bg-slate-700">
            <Image
              width={400}
              height={400}
              src={SideAds}
              alt="Blog Image"
              className="w-[40px] md:w-full md:h-[800px] mb-4"
              priority
            />
          </div>
          <div className="w-full md:w-8/12 space-y-8 md:px-8">
            <CategoryCard
              title="ড. শাহেদুর এনআইবির নতুন মহাপরিচালক"
              description="ন্যাশনাল ইনস্টিটিউট অব বায়োটেকনোলজি (এনআইবি) এর নতুন মহাপরিচালক হলেন ড. শাহেদুর রহমান। জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের বায়োটেকনোলজি বিভাগের এই অধ্যাপক বায়োটেকনোলজি"
              author="নিজস্ব প্রতিবেদক"
              timeAgo="১১ দিন আগে"
              imagePosition="left"
              customClass="w-full h-48 sm:h-60 md:h-36 lg:h-40 xl:h-48 md:w-1/3"
              imageUrl="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
            />
            <CategoryCard
              title="ড. শাহেদুর এনআইবির নতুন মহাপরিচালক"
              description="ন্যাশনাল ইনস্টিটিউট অব বায়োটেকনোলজি (এনআইবি) এর নতুন মহাপরিচালক হলেন ড. শাহেদুর রহমান। জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের বায়োটেকনোলজি বিভাগের এই অধ্যাপক বায়োটেকনোলজি"
              author="নিজস্ব প্রতিবেদক"
              timeAgo="১১ দিন আগে"
              imagePosition="left"
              customClass="w-full h-48 sm:h-60 md:h-36 lg:h-40 xl:h-48 md:w-1/3"
              imageUrl="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
            />
            <CategoryCard
              title="ড. শাহেদুর এনআইবির নতুন মহাপরিচালক"
              description="ন্যাশনাল ইনস্টিটিউট অব বায়োটেকনোলজি (এনআইবি) এর নতুন মহাপরিচালক হলেন ড. শাহেদুর রহমান। জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের বায়োটেকনোলজি বিভাগের এই অধ্যাপক বায়োটেকনোলজি"
              author="নিজস্ব প্রতিবেদক"
              timeAgo="১১ দিন আগে"
              imagePosition="left"
              customClass="w-full h-48 sm:h-60 md:h-36 lg:h-40 xl:h-48 md:w-1/3"
              imageUrl="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
            />
            <CategoryCard
              title="ড. শাহেদুর এনআইবির নতুন মহাপরিচালক"
              description="ন্যাশনাল ইনস্টিটিউট অব বায়োটেকনোলজি (এনআইবি) এর নতুন মহাপরিচালক হলেন ড. শাহেদুর রহমান। জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের বায়োটেকনোলজি বিভাগের এই অধ্যাপক বায়োটেকনোলজি"
              author="নিজস্ব প্রতিবেদক"
              timeAgo="১১ দিন আগে"
              imagePosition="left"
              customClass="w-full h-48 sm:h-60 md:h-36 lg:h-40 xl:h-48 md:w-1/3"
              imageUrl="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
            />
          </div>
          <div className="hidden md:flex md:w-1/6 ">
            <Image
              width={400}
              height={400}
              src={SideAds}
              alt="Blog Image"
              className="w-[40px] md:w-full md:h-[800px] bg-gray-50 mb-4"
              priority
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default NewsCategory;
