"use client";
import React from 'react';
import Image from 'next/image';

interface ReporterProfileProps {
  reporterName: string;
  publishedAt: string;
  newsId: string;
}

const ReporterProfile: React.FC<ReporterProfileProps> = ({ reporterName, publishedAt, newsId }) => {
  const shareUrl = `https://newscity24.com/news/details/${newsId}`;

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
      <div className="flex items-center">
        <Image
          width={44}
          height={44}
          src="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
          alt="Reporter"
          className="w-11 h-11 bg-gray-50 rounded-full"
          priority
        />
        <div className="ml-4">
          <h1 className="text-black font-medium text-xl">{reporterName}</h1>
          <h1 className="text-gray-600">{publishedAt}</h1>
        </div>
      </div>

      <div className="flex gap-x-4 mt-4 md:mt-0 flex-wrap">
        {/* Facebook */}
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
          <svg className="h-6 w-6 text-gray-600 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 
            1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 
            0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 
            21.128 22 16.991 22 12z"/>
          </svg>
        </a>

        {/* Twitter / X */}
        <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
          <svg className="h-6 w-6 text-gray-600 hover:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.5 2.28-4.5 5.09 0 .4.04.79.12 1.16A12.94 12.94 0 013 1.64a5.08 5.08 0 00-.61 2.56c0 1.77.9 3.33 2.27 4.24a4.48 4.48 0 01-2.05-.56v.06c0 2.48 1.75 4.55 4.07 5.02a4.52 4.52 0 01-2.04.08c.57 1.79 2.23 3.09 4.2 3.13A9.05 9.05 0 012 19.54a12.8 12.8 0 006.29 1.84c7.55 0 11.68-6.29 11.68-11.75 0-.18-.01-.35-.02-.53A8.18 8.18 0 0023 3z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
          <svg className="h-6 w-6 text-gray-600 hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8H4.5V24H.5V8zM9.5 8H13V10.55H13.05C13.75 9.25 15.25 8 17.5 8C21 8 22 10.5 22 14.08V24H18V14.75C18 12.5 17.5 11 15.75 11C14 11 13.5 12.25 13.5 14.5V24H9.5V8Z"/>
          </svg>
        </a>

        {/* WhatsApp */}
        <a href={`https://api.whatsapp.com/send?text=${shareUrl}`} target="_blank" rel="noopener noreferrer">
          <svg className="h-6 w-6 text-gray-600 hover:text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 12.073c0-4.42-3.582-8-8-8s-8 3.58-8 8c0 1.393.362 2.694.998 3.836L4 22l6.197-1.634A7.965 7.965 0 0012 20.073c4.418 0 8-3.58 8-8z"/>
          </svg>
        </a>

        {/* Messenger */}
        <a href={`fb-messenger://share/?link=${shareUrl}`} target="_blank" rel="noopener noreferrer">
          <svg className="h-6 w-6 text-gray-600 hover:text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.16 2 11.5c0 2.11.55 4.15 1.6 5.95L2 22l6.2-1.6A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12S18.63 2 12 2z"/>
          </svg>
        </a>

        {/* Telegram */}
        <a href={`https://t.me/share/url?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
          <svg className="h-6 w-6 text-gray-600 hover:text-sky-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.373 0 12c0 6.627 5.37 12 12 12s12-5.373 12-12c0-3.19-1.24-6.2-3.48-8.52z"/>
          </svg>
        </a>

        {/* Reddit */}
        <a href={`https://www.reddit.com/submit?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
          <svg className="h-6 w-6 text-gray-600 hover:text-orange-600" viewBox="0 0 512 512" fill="currentColor">
            <path d="M374.5 233c-10.7 0-20.5 3.5-28.5 9.4-24.7-17.4-58.2-28.4-95.9-29.1l19.2-90.8 63.3 13.4c0 14.6 11.8 26.4 26.4 26.4 14.7 0 26.6-11.9 26.6-26.6s-11.9-26.6-26.6-26.6c-10.4 0-19.4 6.1-23.7 14.8l-69.3-14.6c-6-1.2-11.8 2.6-13 8.6l-21.4 100.9c-38.5 1.3-73.4 12.5-98.7 30.3-7.7-6-17.5-9.7-28.1-9.7-27.2 0-49.3 22.1-49.3 49.3 0 17.6 9.3 33 23.5 41.9-1.1 4.4-1.7 9-1.7 13.7 0 54.1 71.9 98 160.4 98s160.4-43.9 160.4-98c0-4.4-.5-8.6-1.5-12.7 15.3-8.8 25.6-24.9 25.6-43.4-.1-27.2-22.2-49.3-49.4-49.3z"/>
          </svg>
        </a>

        {/* Email */}
        <a href={`mailto:?subject=${encodeURIComponent(reporterName)}&body=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
          <svg className="h-6 w-6 text-gray-600 hover:text-gray-800" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 13.5L2 6.75V18h20V6.75L12 13.5zM12 12L2 5.25h20L12 12z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ReporterProfile;
