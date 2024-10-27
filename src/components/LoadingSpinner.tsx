"use client";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-base-content"></div>
    </div>
  );
};

export default LoadingSpinner;
