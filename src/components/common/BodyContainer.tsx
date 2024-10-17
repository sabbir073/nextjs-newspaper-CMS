
interface BodyContainerProps {
    children: React.ReactNode; // Define the type for children
}

const BodyContainer: React.FC<BodyContainerProps> = ({ children }) => {
    return (
        <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3'>
            {children}
        </div>
    );
};

export default BodyContainer;
