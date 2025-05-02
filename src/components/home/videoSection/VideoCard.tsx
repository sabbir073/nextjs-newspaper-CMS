import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

interface VideoCardProps {
  videoUrl: string;
  title: string;
  imgSrc: string;
  linkTo: number;
  highlight?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, title, imgSrc, linkTo, highlight }) => {
  const [playing, setPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48 w-full">
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          playing={playing}
          controls={true}
          light={!playing ? imgSrc : false}
          onClickPreview={() => setPlaying(true)}
          className="absolute top-0 left-0"
        />

        {!playing && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={() => setPlaying(true)}
          >
            <div className="bg-white text-green-600 rounded-full p-3 shadow-md">
              <FaPlay size={24} />
            </div>
          </div>
        )}
      </div>

      <div className="bg-white text-left py-2 line-clamp-3">
        {highlight && (
          <h5 className="text-red-500 text-md md:text-md font-semibold line-clamp-1 ml-2">
            {highlight}
          </h5>
        )}
        <Link href={`/news/details/${linkTo}`}>
          <h3 className="text-medium text-xl md:text-xl lg:text-2xl font-medium hover:text-red-500 px-2">
            {title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
