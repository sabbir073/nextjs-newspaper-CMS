import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

interface StayTunedProps {
    colon?: boolean; // Optional prop
}

const StayTuned: React.FC<StayTunedProps> = ({ colon }) => {
    return (
        <div className='md:text-left text-center'>
            <h4 className='text-xl md:text-2xl mb-4'>সঙ্গে থাকুন {colon && ':'}</h4>
            <div className='flex items-center gap-2 md:gap-3 md:justify-start justify-center text-2xl'>
                <Link href={"/"}>
                    <FontAwesomeIcon className='md:w-[40px] w-[32px] text-blue-600' icon={faFacebook} />
                </Link>
                <Link href={"/"}>
                    <FontAwesomeIcon className='md:w-[40px] w-[32px] text-red-600' icon={faYoutube} />
                </Link>
                <Link href={"/"}>
                    <FontAwesomeIcon className='md:w-[40px] w-[32px] text-blue-700' icon={faLinkedin} />
                </Link>
                <Link href={"/"}>
                    <FontAwesomeIcon className='md:w-[40px] w-[32px] text-blue-400' icon={faTwitter} />
                </Link>
                <Link href={"/"}>
                    <FontAwesomeIcon className='md:w-[40px] w-[32px] text-purple-600' icon={faInstagram} />
                </Link>
                <Link href={"/"}>
                    <FontAwesomeIcon className='md:w-[40px] w-[32px] text-red-600' icon={faPinterest} />
                </Link>
            </div>
        </div>
    );
};

export default StayTuned;
