
interface BodyContainerProps {
    children: React.ReactNode; // Define the type for children
}

const BodyContainer: React.FC<BodyContainerProps> = ({ children }) => {
    return (
        <div className=' xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3'>
            {children}
        </div>
    );
};

export default BodyContainer;


{/* <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3'> */}



// interface BodyContainerProps {
//     children: React.ReactNode;
//   }
  
//   const BodyContainer: React.FC<BodyContainerProps> = ({ children }) => {
//     return (
//       <div className="
//         max-w-full
//         sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]
//         px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12
//         mx-auto
//       ">
//         {children}
//       </div>
//     );
//   };
  
//   export default BodyContainer;
  