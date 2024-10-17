import BodyContainer from '../common/BodyContainer';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/logo.png";
import StayTuned from '../common/StayTuned';
import DownloadApp from '../common/DownloadApp';

const Footer: React.FC = () => {
    return (
        <div className='bg-[url(/footer-bg.jpg)] bg-no-repeat bg-cover bg-center md:mt-10 mt-4'>
            <div className='bg-[#ffffffbb] py-8'>
                <BodyContainer>
                    <div className='grid justify-center lg:grid-cols-3 md:grid-cols-4 grid-cols-1 items-center md:gap-6 gap-2'>
                        <div className='lg:col-span-1 md:col-span-2 text-center'>
                            <StayTuned />
                        </div>
                        <div className='lg:col-span-1 md:col-span-2'>
                            <Link href={"/"}>
                                <Image 
                                    className='lg:w-[220px] md:w-[200px] w-[140px] lg:mx-auto md:ml-auto md:mx-0 mx-auto md:mt-0 mt-4' 
                                    src={logo} 
                                    alt='logo' 
                                />
                                <h5 className='md:text-3xl text-2xl md:text-right lg:text-center text-center'>সংবাদ কথা বলে</h5>
                            </Link>
                        </div>
                        <div className='lg:col-span-1 md:col-span-4 lg:my-0 md:my-3 my-0'>
                            <DownloadApp />
                        </div>
                    </div>
                </BodyContainer>
                {/* footer menu */}
                <div className='bg-black py-3 px-5 my-4 md:my-8'>
                    <BodyContainer>
                        <ul className='flex flex-wrap lg:justify-between justify-center md:gap-x-8 gap-x-5 gap-y-2 md:gap-y-3 text-white text-lg md:text-2xl'>
                            <li><Link href={"/about"}>আমাদের সম্পর্কে</Link></li>
                            <li><Link href={"/advertisement"}>বিজ্ঞাপন নীতিমালা</Link></li>
                            <li><Link href={"/comment-policy"}>মন্তব্যের নীতিমালা</Link></li>
                            <li><Link href={"/privacy-policy"}>গোপনীয়তা নীতি</Link></li>
                            <li><Link href={"/contact"}>যোগাযোগ</Link></li>
                            <li><Link href={"/"}>ইউনিকোড কনভার্টার</Link></li>
                        </ul>
                    </BodyContainer>
                </div>
                <div className='text-center md:text-3xl text-xl font-bold'>
                    <p>স্বত্ব © ২০২৩ এইমাত্র | নির্বাহী সম্পাদক: শেখ মো. হাবীব</p>
                    <p><span>ই-মেইল:</span> <a href="mailto:mattronews@gmail.com">mattronews@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
