/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import BodyContainer from "@/components/common/BodyContainer";
import Link from "next/link";
import Image from "next/image";

const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

type ButtonProps = {
  url?: string;
  mediaName?: string;
  title?: string;
  Icon?: React.ReactNode;
};

const SocialButton: React.FC<ButtonProps> = ({
  url,
  mediaName,
  title,
  Icon,
}) => {
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
        <h1 className="font-semibold text-2xl md:text-3xl">{mediaName}</h1>
      </div>
    </a>
  );
};

interface NewsItem {
  id: number;
  title: string;
  featured_image: string;
}

const CustomNextArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{
        display: "block",
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        color: "black",
        fontSize: "24px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      
    </div>
  );
};

const CustomPrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{
        display: "block",
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        color: "black",
        fontSize: "24px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      
    </div>
  );
};

const SliderNews: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsItems = async () => {
      try {
        const response = await fetch(`/api/public/news/category`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryId: 1, // Example category ID
            newsItem: 10, // Limit to 10 news items
            video: false,
          }),
        });

        if (!response.ok) throw new Error("Failed to fetch news items");
        const data: NewsItem[] = await response.json();
        setNewsItems(data);
      } catch (error) {
        console.error("Error fetching news items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItems();
  }, []);

  if (loading) {
    return null;
  }

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Tablet and below
        settings: {
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          arrows: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <BodyContainer>
      <div className="lg:flex md:space-x-2 lg:space-x-4 space-y-4 md:space-y-0 pt-2 md:pt-8 mb-4">
        {/* Slider Section */}
        <div className="w-full lg:w-[68%]">
          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
            
            <Link href="/photo" passHref>
              <div className="text-white text-2xl px-4 ml-4 cursor-pointer">ছবি</div>
            </Link>
          </div>

          <div className="pt-4 md:mb-5">
            <Slider {...settings}>
              {newsItems.map((item) => (
                <div key={item.id} className="relative">
                  <Image
                    width={1000}
                    height={800}
                    src={`${imageBaseURL}/${item.featured_image}`}
                    alt={item.title}
                    className="w-full h-[250px] md:h-[390px] lg:h-[450px] xl:h-[390px] object-cover rounded-md"
                  />
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-2xl text-white p-2 rounded hover:text-gray-400">
                  <Link href={`/news/details/${item.id}`} passHref>
                    {item.title}
                  </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="block lg:w-[32%]">
          <div className="flex items-center justify-between border bg-base-content shadow-md rounded-xl py-1">
            
              <div className="text-white text-2xl px-4 ml-4 cursor-pointer">সঙ্গে থাকুন</div>
            
          </div>

          <div className="w-full grid grid-cols-1 gap-1 pt-4">
            <SocialButton
              mediaName="Facebook"
              title="Like Us on"
              Icon={<FaFacebook className="text-blue-500 w-14 h-14 mr-4 md:w-20 md:h-20 md:mr-8" />}
            />
            <SocialButton
              mediaName="X (Twitter)"
              title="Follow Us on"
              Icon={<FaXTwitter className="text-white w-14 h-14 mr-4 md:w-20 md:h-20 md:mr-8" />}
            />
            <SocialButton
              mediaName="Instagram"
              title="Follow Us on"
              Icon={<FaInstagram className="text-white w-14 h-14 mr-4 md:w-20 md:h-20 md:mr-8" />}
            />
            <SocialButton
              mediaName="Youtube"
              title="Subscribe Us on"
              Icon={<FaYoutube className="text-red-500 w-14 h-14 mr-4 md:w-20 md:h-20 md:mr-8" />}
            />
          </div>
        </div>
      </div>
    </BodyContainer>
  );
};

export default SliderNews;
