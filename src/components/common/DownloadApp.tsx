import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';

interface DownloadAppProps {
    colon?: boolean; // Optional prop
}

const DownloadApp: React.FC<DownloadAppProps> = ({ colon }) => {
    return (
        <div>
            <h5 className='text-xl md:text-2xl mb-3 md:text-left text-center'>
                মোবাইল অ্যাপ ডাউনলোড করুন {colon && ':'}
            </h5>
            <div className='flex gap-2 md:gap-4 items-center md:mt-2 md:justify-start justify-center'>
                <Link href={"/"}>
                    <FontAwesomeIcon className='rounded-md md:w-[160px] w-[120px] mx-auto' icon={faGooglePlay} size="2x" />
                </Link>
                <Link href={"/"}>
                    <FontAwesomeIcon className='rounded-md md:w-[160px] w-[120px] mx-auto' icon={faApple} size="2x" />
                </Link>
            </div>
        </div>
    );
};

export default DownloadApp;
