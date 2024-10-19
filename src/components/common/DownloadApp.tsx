import Link from 'next/link';
import playStore from "@/assets/play-store.png";
import appStore from "@/assets/app-store.png";
import Image from 'next/image';

interface DownloadAppProps {
    colon?: boolean; // Optional prop
}

const DownloadApp: React.FC<DownloadAppProps> = ({ colon }) => {
    return (
        <div>
            <h5 className='text-xl md:text-2xl mb-3 md:text-left text-center'>
                মোবাইল অ্যাপ ডাউনলোড করুন{colon && ':'}
            </h5>
            <div className='flex gap-2 md:gap-4 items-center md:mt-[5px] md:justify-start justify-center'>
                <Link href={"/"}><Image className='rounded-md md:w-[160px] w-[120px] mx-auto' src={playStore} alt='play store'></Image></Link>
                <Link href={"/"}><Image className='rounded-md md:w-[160px] w-[120px] mx-auto' src={appStore} alt='app store'></Image></Link>
            </div>
        </div>
    );
};

export default DownloadApp;
