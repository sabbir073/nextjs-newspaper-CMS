"use client";

import React from 'react';
import BodyContainer from '../../common/BodyContainer';
import logo from '@/assets/logo.png';
import Image from 'next/image';

interface HorizontalScrollableTextProps {
    text: string;
}

const InfiniteScrollText: React.FC<HorizontalScrollableTextProps> = ({ text }) => {
    return (
        <BodyContainer>
            <div className="relative flex items-center w-full bg-gray-300 overflow-hidden my-2">
                
                {/* Fixed BAN on the left */}
                <div className="h-full z-20 bg-primary px-4 py-2 text-white font-semibold">
                    BAN
                </div>

                {/* Scrolling text and logo beside BAN */}
                <div className="animate-scroll flex items-center whitespace-nowrap space-x-4 ml-4">
                    <Image className="w-[160px] h-[20px]" src={logo} alt="logo" priority={true} />
                    <span className="text-lg font-semibold text-red-600">
                        {text}
                    </span>
                    <Image className="w-[160px] h-[20px]" src={logo} alt="logo" priority={true} />
                    <span className="text-lg font-semibold text-red-600">
                        {text}
                    </span>
                </div>
            </div>
        </BodyContainer>
    );
};

export default InfiniteScrollText;
