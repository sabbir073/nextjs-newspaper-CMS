import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

interface VideoCardProps {
  videoUrl: string;
  title: string;
  imgSrc: string;
  linkTo: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, title, imgSrc, linkTo }) => {
  const [playing, setPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Skip rendering until mounted

  return (
    <div className="relative w-full  bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48 w-full">
        {/* Video player */}
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          playing={playing}
          controls={true} // Enable YouTube controls
          light={imgSrc}
        />

        {/* Play button overlay */}
        {!playing && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={() => setPlaying(true)}
          >
            <div className="bg-white text-green-600 rounded-full p-3 cursor-pointer shadow-md">
              <FaPlay size={24} />
            </div>
          </div>
        )}
      </div>

      <div className="bg-white text-center py-2 line-clamp-3">
      <Link href={`/news/details/${linkTo}`}>
        <h3 className="text-medium text-xl md:text-xl lg:text-2xl font-medium line-clamp-3 hover:text-red-500 px-2">{title}</h3>
      </Link>
      </div>
    </div>
  );
};

export default VideoCard;
