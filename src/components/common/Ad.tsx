import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
interface AdProps {
    image: StaticImageData  // Define the type for the image prop
    link: string;  // Define the type for the link prop
}

const Ad: React.FC<AdProps> = ({ image, link }) => {
    return (
        <div className='text-center h-300 p-0 py-4 lg:px-3 lg:py-6 bg-transparent '>
            <Link className='mx-auto text-center h-fit' target='_blank' href={link}>
                <Image className='mx-auto h-fit' src={image} alt='ad' />
            </Link>
        </div>
    );
};

export default Ad;
