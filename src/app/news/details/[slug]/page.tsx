/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Image from 'next/image';
import Link from 'next/link';

import HomeLayout from '../../../../components/layouts/HomeLayout'
import ReporterProfile from '../../../../components/details/ReporterPrifile'
import AddComment from '../../../../components/details/AddComment'
import ad from "@/assets/bangla-bid-ad.jpg";
import Ad from '../../../../components/common/Ad';
import Ad2 from "../../../../assets/super-white-ad.webp"
import ShortNewsCard from '../../../../components/home//FeatureNews/ShortNewsCard'
import SubtitleTitle from '../../../../components/home/SubtitleTitle'
import NewsFeatureRightSide from "../../../../components/home/FeatureNews/NewsFeatureRightSide"


interface NewsDetailsProps {
    params: {
        slug: string;
    };
    searchParams?: {
        [key: string]: string | string[] | undefined;
    };
}

const NewsDetails: React.FC<NewsDetailsProps> = ({ params, searchParams }) => {

    return (
        <HomeLayout>
            <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3 pt-4 mb-4 ">
                <div className=" lg:flex space-y-5 md:space-y-0 pt-4 " >
                    <div className=" w-full lg:w-2/3  ">
                        <Link className='mx-auto text-center text-3xl h-fit text-red-500  border-b-2 border-red-500' href={""}>
                            অর্থনীতি
                        </Link>
                        <h1 className=" text-pretty text-4xl font-semibold tracking-tight text-gray-900 py-6 sm:text-5xl">দেশের ইতিহাসে সর্বোচ্চ দামে সোনা</h1>
                        <ReporterProfile />
                        <figure className="mt-8">
                            <Image width={1200} height={1200} className="aspect-video rounded-xl bg-gray-50 object-cover"
                                src="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
                                // src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                                alt="" />
                        </figure>
                        <p className="mt-6 text-2xl">
                            উপকূলীয় শহর সিজারিয়াতে নেতানিয়াহুর ব্যক্তিগত বাসভবনকে লক্ষ্য করে লেবানন থেকে ড্রোন দিয়ে গুলি ছুড়েছে হিজবুল্লাহ। হামলায় যে ভবনটি আঘাত হেনেছে সেটি নেতানিয়াহুর বাড়ির অংশ। হামলায় কোনো আহতের খবর পাওয়া যায়নি এবং প্রধানমন্ত্রী ওই সময় বাড়িতে ছিলেন কিনা তা স্পষ্ট নয়।


                            এর আগে ৭ অক্টােবর গাজা যুদ্ধের বর্ষপূর্তিতে নেতানিয়াহু দাবি করেছিলেন, হিজবুল্লাহ বহু বছরের মধ্যে সবচেয়ে দুর্বল অবস্থায় রয়েছে। তবে এই হামলা হিজবুল্লাহর সামর্থ্যের বড় প্রমাণ হিসেবে ভাবা হচ্ছে। কারণ হিজবুল্লাহ এর আগে ইসরাইলের বিভিন্ন সামরিক ঘাঁটিতে হামলা চালিয়েছে। এবারই প্রথম তারা ইসরাইলের প্রধানমন্ত্রীকে লক্ষ্যবস্তু করে হামলা করলো।


                            এই ড্রোন হামলা নিয়ে এখনো পর্যন্ত কোনো মন্তব্য করেনি ইসরাইলি প্রতিরক্ষাবাহিনী (আইডিএফ)। তবে প্রধানমন্ত্রীর কার্যালয় নিশ্চিত করেছে, শনিবার সকালে লেবানন থেকে ড্রোন হামলায় সিজারিয়ায় প্রধানমন্ত্রীর ব্যক্তিগত বাসভবন লক্ষ্যবস্তু করা হয়।


                            হামলার সময় প্রধানমন্ত্রী নেতানিয়াহু এবং তার স্ত্রী সারা হামলার সময় বাড়িতে ছিলেন না এবং এই ঘটনায় কোনও আহত হয়নি।
                        </p>
                        <AddComment />
                        <div className='mt-4'>
                            <Ad image={ad} link={'#'} />
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 space-y-3 pl-0  md:pl-8">
                        <Image
                            width={200}
                            height={200}
                            src={Ad2}
                            alt="Blog Image"
                            className="w-full h-[192px]   aspect-video oobject-fill mb-4 cursor-pointer "
                            priority
                        />
                        <ShortNewsCard
                            title="চোরাচালানের পেঁয়াজে বাজার সয়লাব, খাতুনগঞ্জেও বড় দরপতন"
                            imageSrc="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
                            onClick={() => alert('News card clicked!')}
                            highlight=""
                        />
                        <SubtitleTitle
                            title="শ্রমিকদের ১৮ দফা দাবি বাস্তবায়নে সম্মত হয়েছে"
                        />
                        <SubtitleTitle
                            title="শ্রমিকদের ১৮ দফা দাবি বাস্তবায়নে সম্মত হয়েছে"
                        />
                        <NewsFeatureRightSide />
                    </div>
                </div>

                <div className=' w-full mt-8'>
                    <div className='border-l-8 border-red-500 mb-2 mt-2 '>
                        <h1 className='text-black text-2xl md:text-4xl ml-4 hover:text-red-500'> আন্তর্জাতিক নিয়ে আরও পড়ুন </h1>
                    </div>
                    <div className='border-b-2 border-gray-500 mb-2 '></div>
                    <div className=" lg:flex space-y-5 md:space-y-0 pt-4 ">
                        <div className=" w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4  md:pr-4">
                            {/* left side  */}
                            <ShortNewsCard
                                title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                onClick={() => alert('News card clicked!')}
                                highlight=''
                            />
                            <ShortNewsCard
                                title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                onClick={() => alert('News card clicked!')}
                                highlight=''
                            />
                            <ShortNewsCard
                                title="ইউটিউব সার্চ হিস্ট্রি মুছে ফেলার উপায়"
                                imageSrc={`https://d1uo68v5hl2ge5.cloudfront.net/selfie.png`}
                                onClick={() => alert('News card clicked!')}
                                highlight=''
                            />
                        </div>
                        <div className="block lg:w-1/4  ">
                            {/* right side  */}
                            <Image
                                width={200}
                                height={200}
                                src={Ad2}
                                alt="Blog Image"
                                className="w-full h-[192px]   aspect-video  bg-gray-50 oobject-fill mb-4 cursor-pointer"
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <Ad image={ad} link={'#'} />
                </div>
            </div>

        </HomeLayout>
    );
};

export default NewsDetails;
