import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
interface AdProps {
    image: StaticImageData  // Define the type for the image prop
    link: string;  // Define the type for the link prop
}

const Ad: React.FC<AdProps> = ({ image, link }) => {
    return (
        <div className='text-center h-fit p-0 lg:p-3 bg-[#F1EFEF]'>
            <Link className='mx-auto text-center h-fit' target='_blank' href={link}>
                <Image className='mx-auto h-fit' src={image} alt='ad' />
            </Link>
        </div>
    );
};

export default Ad;
