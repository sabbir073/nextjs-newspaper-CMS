"use client";
import React from 'react';
import Image from 'next/image';

interface OpinionCardProps {
    imageUrl: string;
    title: string;
    author: string;
}

const OpinionCard: React.FC<OpinionCardProps> = ({ imageUrl, title, author }) => {
    return (
        <div className="flex  p-4 rounded-lg shadow-md bg-white  ">
            <div className="relative w-28 h-28 rounded-lg overflow-hidden border-4 border-red-500">
                <img  src={imageUrl} alt={title} className="object-cover w-full h-full" />
            </div>
            <div className="ml-4 py-2  ">
                <h3 className="text-gray-900 font-bold text-2xl">{title}</h3>
                <p className="text-gray-500 text-xl mt-6">{author}</p>
            </div>
        </div>
    );
};


const OpinionSection: React.FC = () => {
    return (
        <div className="">

            <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3 pt-4 mb-4 ">
                <div className='border-l-8 border-red-500 mb-2 mt-2 '>
                    <h1 className='text-black text-2xl md:text-4xl ml-4'> মতামত </h1>
                </div>
                <div className='border-b-2 border-gray-500 mb-2 '></div>

                <div className=' grid  grid-col-1 md:grid-cols-3  gap-5 mt-8'>
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


        </div>
    );
};

export default OpinionSection;