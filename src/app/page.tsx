// src/app/dashboard/page.tsx (or the relevant path)
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div>
      <h1>Hello</h1>
      <Image
        src={`${process.env.NEXT_IMAGE_URL}/selfie.png`}
        alt="Selfie"
        width={300}
        height={300}
        priority // Optional: Loads the image with higher priority
      />
    </div>
  );
}
