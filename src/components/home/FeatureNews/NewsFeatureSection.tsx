"use client";
import React from 'react';
import Image from 'next/image';
import ShortNewsCard from './ShortNewsCard'
import BodyContainer from '../../common/BodyContainer';
import NewsFeatureRightSide from "./NewsFeatureRightSide"

interface BlogCardProps {
  imageSrc: string;
  title?: string;
  description?: string;
  clamp?: number;
  maxLength?: number;
  onClick?: () => void;
}

const truncateString = (input: string, maxLength: number): string => {
  return input.length > maxLength ? `${input.substring(0, maxLength)}...` : input;
};

const NewsCard: React.FC<BlogCardProps> = ({ imageSrc, title, description = '', clamp = 2,maxLength=100 , onClick }) => {
  return (
      <div
          className="w-full pb-4 group cursor-pointer shadow-car shadow-md rounded-xl "
          onClick={onClick}
      >
          <Image
              width={900}
              height={900}
              src={imageSrc}
              alt="Blog Image"
              className="w-full h-[200px] md:h-[400px] aspect-[4/3 object-fill rounded-t-xl"
              priority
          />
         <div className="px-2">
         <h1 
          className="text-black pt-3 px-2 text-2xl xl:text-4xl font-bold group-hover:text-red-500 line-clamp-2">
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



const NewsFeatureSection: React.FC = () => {
  return (
    <BodyContainer>
      <div className=" lg:flex md:space-y-0 pt-2 md:pt-0 w-full">
       
        <div className=" w-full lg:w-3/4 ">
          {/* left side  */}
          <div className="space-y-4 md:space-y-0 md:space-x-5 w-full flex flex-col md:flex-row">
           
            <div className="w-full md:w-[65%] ">
              <NewsCard
                title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                description="অভ্যন্তরীণ বাজারে সরবরাহ ঠিক রাখতে গত ৭ ডিসেম্বর পেঁয়াজ রপ্তানি বন্ধ করে ভারত সরকার। এই ঘোষণার পরপরই অস্থিতিশীল হতে শুরু করে বাংলাদেশের পেঁয়াজের বাজার। হু হু করে বাড়তে থাকে দাম। কেজিপ্রতি দাম গিয়ে ঠেকে ২৪০ টাকায়। রমজান মাসে আরও বাড়তে পারে পেঁয়াজের দাম- এমন শঙ্কা থেকে ফেব্রুয়ারির মাঝামাঝি ভারত থেকে পেঁয়াজ আমদানির সিদ্ধান্ত নেয় সরকার। ভারত সরকারও এতে নীতিগত সম্মতি দেয়। সরকারের পক্ষ থেকে বলা হয়, রোজার আগেই দেশে আসবে ভারতীয় পেঁয়াজ। তবে ঘোষণার মাস পেরিয়ে গেলেও এখনো সরকারিভাবে দেশে আসেনি ভারতীয় পেঁয়াজ।

                তবে সীমান্ত দিয়ে চোরাইপথে আসা পেঁয়াজে ভরে গেছে চট্টগ্রামের খাতুনগঞ্জের আড়ত। এতে মাত্র ১০ দিনের ব্যবধানে ভোগ্যপণ্যে দেশের দ্বিতীয় বৃহৎ পাইকারি বাজারটিতে ভারতীয় পেঁয়াজের দাম কমেছে কেজিপ্রতি ৫৫-৬০ টাকা। কমেছে দেশি পেঁয়াজের দামও।"
                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                clamp={3}
                maxLength={150}
                onClick={() => alert('News card clicked!')}
              />
            </div>

            <div className="w-full md:w-[35%] flex flex-row  md:flex-col justify-between gap-4 lg:pl-6">

              <ShortNewsCard
                title="ইসরায়েলি হামলায় এক সপ্তাহে শতাধিক ত্রাণকর্মী নিহত"
                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                onClick={() => alert('News card clicked!')}
                highlight=''
              />
              <ShortNewsCard
                title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                onClick={() => alert('News card clicked!')}
                highlight=''

              />

            </div>

          </div>

          <div className='py-2'>
            <div className="grid grid-cols-2 gap-6  md:grid-cols-2 xl:grid-cols-3 py-4">
              <ShortNewsCard
                title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                imageSrc="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
                onClick={() => alert('News card clicked!')}
                highlight=""
              />
              <ShortNewsCard
                title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                imageSrc="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
                onClick={() => alert('News card clicked!')}
                highlight=""
              />
              <ShortNewsCard
                title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                imageSrc="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
                onClick={() => alert('News card clicked!')}
                highlight=""
              />
              <ShortNewsCard
                title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                imageSrc="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
                onClick={() => alert('News card clicked!')}
                highlight=""
              />
              <ShortNewsCard
                title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                imageSrc="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
                onClick={() => alert('News card clicked!')}
                highlight=""
              />
              <ShortNewsCard
                title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                imageSrc="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
                onClick={() => alert('News card clicked!')}
                highlight=""
              />
             
            </div>
          </div>
        </div>

        <div className="block lg:w-1/4  ">
          {/* right side  */}
          <NewsFeatureRightSide />
        </div>
      </div>
      <BodyContainer>
        {/* <Ad image={ad} link={'#'} /> */}
      </BodyContainer>
    </BodyContainer>
  );
};

export default NewsFeatureSection;