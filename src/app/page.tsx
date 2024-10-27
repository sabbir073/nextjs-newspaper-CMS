// src/app/dashboard/page.tsx (or the relevant path)
import Image from 'next/image';
import HomeLayout from '@/components/layouts/HomeLayout';

export default function DashboardPage() {
  return (
    <HomeLayout>
      <h1>Hello</h1>
      <Image
        src={`${process.env.NEXT_IMAGE_URL}/selfie.png`}
        alt="Selfie"
        width={300}
        height={300}
        priority // Optional: Loads the image with higher priority
      />
    </HomeLayout>
  );
}
