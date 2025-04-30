import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">404 – খবর পাওয়া যায়নি</h1>
      <p className="text-lg text-gray-600">আপনি যে খবরটি খুঁজছেন, এটি মুছে ফেলা হয়েছে বা নেই।</p>
      <Link href="/" className="mt-6 text-red-500 underline">হোমপেজে ফিরে যান</Link>
    </div>
  );
}

  