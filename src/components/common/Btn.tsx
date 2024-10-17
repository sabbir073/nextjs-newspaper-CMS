interface BtnProps {
    text: string; // Define the type for the text prop
}

const Btn: React.FC<BtnProps> = ({ text }) => {
    return (
        <button className='md:py-[6px] py-1 px-6 rounded-full bg-[#D91C0B] text-white md:text-[23px] text-xl'>
            {text}
        </button>
    );
};

export default Btn;
