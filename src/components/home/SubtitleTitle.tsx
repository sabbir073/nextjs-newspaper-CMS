
"use client"
interface SubtitleTitleProps {
    title: string;
    subtitle?: string;
    className?: string;
}

const SubtitleTitle: React.FC<SubtitleTitleProps> = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`flex flex-col justify-center border h-[87px] lg:h-[120px] cursor-pointer bg-white rounded-lg shadow-md px-4 pt-2.5 group  ${className}`}>
            <h1 className="text-black text-base md:text-lg lg:text-2xl font-semibold line-clamp-2 group-hover:text-red-500 ">{title}</h1>
            <h2 className="text-red-500 text-lg md:text-2xl font-bold line-clamp-1 mb-1 py-1 group-hover:text-red-500 ">{subtitle}</h2>
        </div>
    );
};


export default SubtitleTitle;
