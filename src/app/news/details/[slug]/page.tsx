/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { use } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

import HomeLayout from "../../../../components/layouts/HomeLayout";
import ReporterProfile from "../../../../components/details/ReporterPrifile";
import ad from "@/assets/bangla-bid-ad.jpg";
import Ad from "../../../../components/common/Ad";
import Ad2 from "../../../../assets/super-white-ad.webp";
import ShortNewsCard from "../../../../components/home/FeatureNews/ShortNewsCard";
import NewsFeatureRightSide from "../../../../components/home/FeatureNews/NewsFeatureRightSide";
import FacebookComments from "../../../../components/FacebookComments";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import { notFound } from "next/navigation";
import VideoCard from "../../../../components/home/videoSection/VideoCard";

interface NewsDetailsProps {
  params: Promise<{ slug: string }>;
  searchParams?: any;
}

const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_URL;

export default function NewsDetails({ params }: NewsDetailsProps) {
  const { slug } = use(params);
  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState<any[]>([]);
  const [descSize, setDescSize] = useState(24);
  const [playing, setPlaying] = useState(false);

  const zoomIn = () => setDescSize(size => Math.min(size + 1, 50));
  const zoomOut = () => setDescSize(size => Math.max(size - 1, 12));

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(`/api/public/news/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setNews(data);
        } else {
          setNews(null);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setNews(null);
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchNews();
  }, [slug]);

  useEffect(() => {
    async function fetchRelated() {
      if (!news?.categories?.[0]?.id) return;
      const isVideo = !!news.video_url;
      const mode = news.video_url ? "1" : "0";
      const res = await fetch(
        `/api/public/news/related?category=${news.categories[0].id}&exclude=${news.id}&limit=8&video=${mode}`
      );
      if (res.ok) {
        const data = await res.json();
        setRelated(data);
      }
    }
    if (news) fetchRelated();
  }, [news]);

  const getMeta = (field: string, fallback: string) => news?.[field] || fallback;
  if (loading) return <LoadingSpinner />;
  if (!news) notFound();

  const metaTitle = getMeta("meta_title", news.title);
  const metaDescription = getMeta("meta_description", news.description?.substring(0, 100));
  const metaImage = getMeta("meta_image", news.featured_image);
  const category = news.categories?.[0];
  const isVideoNews = !!news.video_url;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${imageBaseURL}/${metaImage}`} />
        <meta property="og:url" content={`https://newscity24.com/news/details/${slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${imageBaseURL}/${metaImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HomeLayout>
        <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3 mb-4">
          <div className="lg:flex space-y-5 md:space-y-0">
            <div className="w-full lg:w-[75%] md:pr-6">
              <Link
                className="mx-auto text-center text-2xl xl:text-3xl h-fit text-red-500 border-b-2 border-red-500"
                href={isVideoNews ? "#" : `/category/${category?.slug ?? "#"}`}
              >
                {isVideoNews ? "ভিডিও নিউজ" : category?.title ?? "Uncategorized"}
              </Link>

              <h1 className="text-pretty text-3xl font-normal tracking-tight text-gray-900 pt-3 pb-2 sm:text-4xl md:py-4">
                {news.title}
              </h1>

              <ReporterProfile
                reporterName={news.reporter_name ?? "নিজস্ব প্রতিবেদক"}
                publishedAt={news.created_at}
                newsId={slug}
                onZoomIn={zoomIn}
                onZoomOut={zoomOut}
              />

              <figure className="mt-8 flex justify-center">
                {isVideoNews ? (
                  <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden">
                    <ReactPlayer
                      url={news.video_url}
                      width="100%"
                      height="100%"
                      controls={true}
                      playing={playing}
                      light={!playing ? `${imageBaseURL}/${news.featured_image}` : false}
                      onClickPreview={() => setPlaying(true)}
                      className="rounded-xl"
                    />
                    {!playing && (
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setPlaying(true)}
                      >
                        <div className="bg-white text-green-600 rounded-full p-4 shadow-md">
                          <FaPlay size={28} />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Image
                    width={700}
                    height={580}
                    className="aspect-video rounded-xl bg-gray-50 object-cover"
                    src={`${imageBaseURL}/${news.featured_image}`}
                    alt={news.title}
                  />
                )}
              </figure>

              <div
                className="mt-6 text-justify"
                style={{ fontSize: `${descSize}px` }}
                dangerouslySetInnerHTML={{ __html: news.description }}
              ></div>

              <div className="w-full mt-8">
                <FacebookComments url={`https://newscity24.com/news/details/${slug}`} />
              </div>

              <div className="mt-4">
                <Ad image={ad} link={"#"} />
              </div>
            </div>

            <div className="w-full lg:w-[25%]">
              <center>
                <Image
                  width={250}
                  height={220}
                  src={Ad2}
                  alt="Ad"
                  className="object-cover w-[250px] h-[220px] mb-4"
                  priority
                />
              </center>
              <NewsFeatureRightSide />
            </div>
          </div>

          <div className="w-full mt-8">
            <div className="border-l-8 border-red-500 mb-2 mt-2">
              <h1 className="text-black text-2xl md:text-4xl ml-4 hover:text-red-500">
                {isVideoNews ? "আরও ভিডিও নিউজ দেখুন" : `${category?.title ?? "এই বিভাগ"} নিয়ে আরও পড়ুন`}
              </h1>
            </div>
            <div className="border-b-2 border-gray-500 mb-2"></div>

            <div className="pt-5">
              <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
                {related.map((item, index) => (
                  isVideoNews ? (
                    <VideoCard
                      key={item.id}
                      videoUrl={item.video_url}
                      title={item.title}
                      imgSrc={`${imageBaseURL}/${item.featured_image}`}
                      linkTo={item.id}
                      highlight={item.highlight_text}
                    />
                  ) : (
                    <Link href={`/news/details/${item.id}`} passHref key={item.id}>
                      <ShortNewsCard
                        key={item.id}
                        title={item.title}
                        imageSrc={`${imageBaseURL}/${item.featured_image}`}
                        highlight={item.highlight_text}
                      />
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Ad image={ad} link={"#"} />
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
