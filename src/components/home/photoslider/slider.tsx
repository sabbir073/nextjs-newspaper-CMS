



"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from "react-icons/fa6";


type ButtonProps = {
    url?: string;
    mediaName?: string;
    title?: string;
    Icon?: React.ReactNode;
};

const SocialButton: React.FC<ButtonProps> = ({ url, mediaName, title, Icon }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-[7px] bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
        >
            {Icon}
            <div>
                <h1 className="font-semibold text-xl md:text-2xl uppercase">{title}</h1>
                <h1 className="font-semibold text-2xl md:text-4xl">{mediaName}</h1>
            </div>
        </a>
    );
};

const SliderNews: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const desktopContent = [
        { image: 'https://firebasestorage.googleapis.com/v0/b/eimattro.appspot.com/o/album%2Fimages%2F63a21145-618e-47bc-924e-71afa4aea0fd.png?alt=media', text: 'ঘূর্ণিঝড় রিমালের ক্ষয়ক্ষতি' },
        { image: 'https://firebasestorage.googleapis.com/v0/b/eimattro.appspot.com/o/album%2Fimages%2F63a21145-618e-47bc-924e-71afa4aea0fd.png?alt=media', text: 'Second Image Text for Desktop' }
    ];

    const mobileContent = [
        { image: 'https://firebasestorage.googleapis.com/v0/b/eimattro.appspot.com/o/album%2Fimages%2F63a21145-618e-47bc-924e-71afa4aea0fd.png?alt=media', text: 'ঘূর্ণিঝড় রিমালের ক্ষয়ক্ষতি' },
        { image: 'https://firebasestorage.googleapis.com/v0/b/eimattro.appspot.com/o/album%2Fimages%2F63a21145-618e-47bc-924e-71afa4aea0fd.png?alt=media', text: 'Second Image Text for Mobile' }
    ];

    const nextImage = () => {
        if (desktopContent.length - 1 > currentImage) {
            setCurrentImage(prev => prev + 1);
        }
    };

    const prevImage = () => {
        if (currentImage !== 0) {
            setCurrentImage(prev => prev - 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (desktopContent.length - 1 > currentImage) {
                nextImage();
            } else {
                setCurrentImage(0);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImage, desktopContent.length]);

    return (
        <div>
            <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3 lg:flex md:space-x-2 lg:space-x-4 space-y-4 md:space-y-0 pt-2 md:pt-8 mb-4">
                <div className="w-full lg:w-2/3">
                    <div className='border-l-8 border-red-500 mb-2 mt-2'>
                        <h1 className='text-black text-2xl md:text-4xl ml-4'>ছবি</h1>
                    </div>
                    <div className='border-b-2 border-gray-500 mb-2'></div>

                    <div className="w-full grid grid-cols-1 pt-4  gap-4">
                        <div className='container rounded pb-5 flex flex-col justify-center sm:flex-row'>
                            <div className='relative h-64 md:h-96 w-full bg-slate-200 overflow-hidden'>
                                <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
                                    <div className='flex justify-between w-full text-2xl ml-2 mr-2'>
                                        <button onClick={prevImage} className={`bg-indigo-100 shadow-md rounded-md px-1 py-3 hover:bg-indigo-200 ${currentImage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={currentImage === 0}>
                                            <FaAngleLeft className='p-0.5' />
                                        </button>
                                        <button onClick={nextImage} className={`bg-indigo-100 shadow-md rounded-md px-1 py-3 hover:bg-indigo-200 ${currentImage === desktopContent.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={currentImage === desktopContent.length - 1}>
                                            <FaAngleRight className='p-0.5' />
                                        </button>
                                    </div>
                                </div>

                                {/* Desktop and Tablet version */}
                                <div className='hidden md:flex h-full w-full overflow-hidden'>
                                    {desktopContent.map((item, index) => (
                                        <div className='w-full h-full min-w-full min-h-full transition-transform duration-500 ease-in-out relative' key={index} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                                            <Image width={1600} height={1600} className="w-full h-full object-cover" alt="home page image" src={item.image} />
                                            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-2 rounded">
                                                {item.text}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile version */}
                                <div className='flex h-full w-full overflow-hidden md:hidden'>
                                    {mobileContent.map((item, index) => (
                                        <div className='w-full h-full min-w-full min-h-full transition-transform duration-500 ease-in-out relative' key={index} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                                            <Image priority width={1600} height={1600} className="w-full h-full object-cover" alt="home page image" src={item.image} />
                                            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-2 rounded">
                                                {item.text}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block lg:w-1/3 md:pl-8">
                    <div className='border-l-8 border-red-500 mb-2 mt-2'>
                        <h1 className='text-black text-2xl md:text-4xl ml-4'>সঙ্গে থাকুন</h1>
                    </div>
                    <div className='border-b-2 border-gray-500 mb-2'></div>
                    <div className="w-full grid grid-cols-1 gap-1 pt-4 ">
                        <SocialButton mediaName="Facebook" title="Like Us on" Icon={<FaFacebook className="text-blue-500 w-14 h-14 mr-4 md:w-20 md:h-20 md:mr-8" />} />
                        <SocialButton mediaName="X (Twitter)" title="follow us on " Icon={<FaXTwitter className="text-white w-14 h-14 mr-4 md:w-20 md:h-20 md:mr-8" />} />
                        <SocialButton mediaName="Instagram" title="follow us on " Icon={<FaInstagram className="text-white w-14 h-14 mr-4 md:w-20 md:h-20 md:mr-8" />} />
                        <SocialButton mediaName="Youtube" title="subscribe us on" Icon={<FaYoutube className="text-red-500 w-14 h-14 mr-4 md:w-20 md:h-20 md:mr-8" />} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SliderNews;
