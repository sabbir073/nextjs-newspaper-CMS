// src/app/dashboard/page.tsx (or the relevant path)
import Image from 'next/image';
import HomeLayout from '@/components/layouts/HomeLayout';

import NewsFeatureSection from "@/components/home/FeatureNews/NewsFeatureSection"
import CountryNewsSection from "@/components/home/CountryNews/CountryNews"
import NationalNewsSection from "@/components/home/nationalNews/NationalNews"
import InternationlNews from "@/components/home/internationalNews/Internation"
import SportsNewsSection from "@/components/home/sports/SportsNews"
import Entertainment from "@/components/home/entertainment/Entertainment"
import EcomomyNews from "@/components/home/Economy/EconomyNews"
import TechnologyNews from "@/components/home/Technology/TechnologyNews"
import LifestyleNews from "@/components/home/LifestyleNews/Lifestyle"
import LiteratureNews from "@/components/home/literature/literatureNews"
import ReligionNews from "@/components/home/ReligionNews/ReligionNews"
import SliderNews from "@/components/home/photoslider/slider"
import OpinionSection from "@/components/home/OpinionNews/OpinionNews"
import VideoSection from "@/components/home/videoSection/VideoSection"

export default function DashboardPage() {
  return (
    <HomeLayout>
      {/* <h1>Hello</h1>
      <Image
        src={`${process.env.NEXT_IMAGE_URL}/selfie.png`}
        alt="Selfie"
        width={300}
        height={300}
        priority // Optional: Loads the image with higher priority
      /> */}
      <NewsFeatureSection />
      <VideoSection />
      <NationalNewsSection />
      <OpinionSection />
      <CountryNewsSection />
      <InternationlNews />
      <SportsNewsSection />
      <Entertainment/>
      <EcomomyNews />
      <TechnologyNews/>
      <LifestyleNews/>
      <LiteratureNews />
      <ReligionNews />
      <SliderNews/>
    </HomeLayout>
  );
}
