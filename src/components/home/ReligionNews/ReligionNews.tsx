

"use client";
import React from 'react';
import Image from 'next/image';
import ShortNewsCard from '../FeatureNews/ShortNewsCard'

import SubtitleTitle from '../SubtitleTitle'


const ReligionNews: React.FC = () => {
    return (
        <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3 mt-6 ">

            <div className=" lg:flex space-y-5 md:space-y-0 pt-4 " >

                <div className=" w-full lg:w-1/4 space-y-5 pr-2">
                    {/* left side  */}
                    <div className="border-l-8 border-red-500 mb-2 mt-2">
                        <h1 className="text-black text-2xl md:text-4xl ml-4 cursor-pointer hover:text-red-500">
                        ধর্ম
                        </h1>
                    </div>
                    <div className='border-b-2 border-gray-500 mb-2 '></div>


                    <ShortNewsCard
                        title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        onClick={() => alert('News card clicked!')}
                        highlight=''
                    />

                    <SubtitleTitle
                        subtitle=""
                        title="লক্ষণ, কারণ ও করণীয়"
                    />

                    <SubtitleTitle
                        subtitle=""
                        title="মা হিসেবে আপনার করণীয়"
                    />

                    <SubtitleTitle
                        subtitle=""
                        title="ঢাকার নদী, লেক, টিউবওয়েলের পানি ও পোশাকে 'রাসায়নিক'!"
                    />




                </div>

                <div className="w-full md:w-1/4 space-y-5 md:px-4 ">
                    <div className="border-l-8 border-red-500 mb-2 mt-2">
                        <h1 className="text-black text-2xl md:text-4xl ml-4 cursor-pointer hover:text-red-500">
                        ভিন্নরকম
                        </h1>
                    </div>
                    <div className='border-b-2 border-gray-500 mb-2 '></div>


                    <ShortNewsCard
                        title="অ্যাসিডিটি কমায় 'লাউ'"
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        onClick={() => alert('News card clicked!')}
                        highlight=''
                    />
                    <SubtitleTitle
                        subtitle=""
                        title="সানবার্ন এবং সান পয়জনিং কী? "
                    />

                    <SubtitleTitle
                        subtitle=""
                        title="সানবার্ন এবং সান পয়জনিং কী? "
                    />

                    <SubtitleTitle
                        subtitle=""
                        title="সানবার্ন এবং সান পয়জনিং কী? "
                    />




                </div>

                <div className="block lg:w-1/4  space-y-5 md:pl-2">
                    <div className="border-l-8 border-red-500 mb-2 mt-2">
                        <h1 className="text-black text-2xl md:text-4xl ml-4 cursor-pointer hover:text-red-500">
                        শিক্ষা
                        </h1>
                    </div>
                    <div className='border-b-2 border-gray-500 mb-2 '></div>


                    <ShortNewsCard
                        title="সত্যি কি মিথ্যানিয়মিত লিপস্টিক ব্যবহার করলে ঠোঁট কালো হয়?"
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        onClick={() => alert('News card clicked!')}
                        highlight=''
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
                <div className="block lg:w-1/4  space-y-5 md:pl-2">
                    <div className="border-l-8 border-red-500 mb-2 mt-2">
                        <h1 className="text-black text-2xl md:text-4xl ml-4 cursor-pointer hover:text-red-500">
                        পর্যটন
                        </h1>
                    </div>
                    <div className='border-b-2 border-gray-500 mb-2 '></div>


                    <ShortNewsCard
                        title="সত্যি কি মিথ্যানিয়মিত লিপস্টিক ব্যবহার করলে ঠোঁট কালো হয়?"
                        imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                        onClick={() => alert('News card clicked!')}
                        highlight=''
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
    );
};

export default ReligionNews;
