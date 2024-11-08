"use client";
import React from "react";
import BodyContainer from "../../common/BodyContainer";

interface HorizontalScrollableTextProps {
  text: string;
}

const InfiniteScrollText: React.FC<HorizontalScrollableTextProps> = ({
  text,
}) => {
  return (
    <BodyContainer>
      <div className="flex items-center px-0">
        <button className="bg-base-content  text-white px-2 py-2 text-2xl  rounded-md mr-2">
          ঘোষণা
        </button>
        <div className="flex-1 py-2  overflow-hidden bg-base-content rounded-md">
          <div className="animate-scroll whitespace-nowrap text-2xl   text-white px-4  ">
            {text}
          </div>
        </div>
      </div>
    </BodyContainer>
  );
};

export default InfiniteScrollText;
