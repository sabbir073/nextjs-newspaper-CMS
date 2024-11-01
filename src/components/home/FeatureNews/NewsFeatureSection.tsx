"use client";
import React from 'react';
import Image from 'next/image';

import NewsCard from './NewsCard'
import ShortNewsCard from './ShortNewsCard'
import HorizontalCard from '../HorizontalCard'
import BodyContainer from '../../common/BodyContainer';
import Ad from '../../common/Ad';
import ad from "@/assets/bangla-bid-ad.jpg";
import NewsFeatureRightSide from "./NewsFeatureRightSide"




const NewsFeatureSection: React.FC = () => {
  return (
    <div className="">
      <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3  lg:flex md:space-x-2 lg:space-x-4 space-y-4 md:space-y-0 pt-2 md:pt-0">
        <div className=" w-full lg:w-3/4 ">
          {/* left side  */}
          <div className="space-y-1 md:space-y-0 md:space-x-1 2xl:pt-10 w-full md:flex">
            <div className="w-full md:w-2/3 pr-0 md:pr-4">
              
              <NewsCard
                title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                description="অভ্যন্তরীণ বাজারে সরবরাহ ঠিক রাখতে গত ৭ ডিসেম্বর পেঁয়াজ রপ্তানি বন্ধ করে ভারত সরকার। এই ঘোষণার পরপরই অস্থিতিশীল হতে শুরু করে বাংলাদেশের পেঁয়াজের বাজার। হু হু করে বাড়তে থাকে দাম। কেজিপ্রতি দাম গিয়ে ঠেকে ২৪০ টাকায়। রমজান মাসে আরও বাড়তে পারে পেঁয়াজের দাম- এমন শঙ্কা থেকে ফেব্রুয়ারির মাঝামাঝি ভারত থেকে পেঁয়াজ আমদানির সিদ্ধান্ত নেয় সরকার। ভারত সরকারও এতে নীতিগত সম্মতি দেয়। সরকারের পক্ষ থেকে বলা হয়, রোজার আগেই দেশে আসবে ভারতীয় পেঁয়াজ। তবে ঘোষণার মাস পেরিয়ে গেলেও এখনো সরকারিভাবে দেশে আসেনি ভারতীয় পেঁয়াজ।

                তবে সীমান্ত দিয়ে চোরাইপথে আসা পেঁয়াজে ভরে গেছে চট্টগ্রামের খাতুনগঞ্জের আড়ত। এতে মাত্র ১০ দিনের ব্যবধানে ভোগ্যপণ্যে দেশের দ্বিতীয় বৃহৎ পাইকারি বাজারটিতে ভারতীয় পেঁয়াজের দাম কমেছে কেজিপ্রতি ৫৫-৬০ টাকা। কমেছে দেশি পেঁয়াজের দামও।"
                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                clamp={3}
                maxLength={241}
                onClick={() => alert('News card clicked!')}
              />
            </div>
            <div className=" w-full md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-4 ">


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
            <div className="grid grid-cols-2 gap-6  md:grid-cols-3 py-2">
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
        <Ad image={ad} link={'#'} />
      </BodyContainer>
    </div>
  );
};

export default NewsFeatureSection;