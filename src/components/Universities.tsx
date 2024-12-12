import React from 'react';

const LayoutComponent: React.FC = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center p-4 px-10 md:px-20 py-10 md:py-16 my-12 md:my-20">
      {/* Left Side (Text Section) */}
      <div className="md:w-1/2 w-full text-left md:mr-8 mb-4 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8">
          Sell.Do-Real Estate CRM is built with a legacy of 10 years by industry experts.
        </h1>
        <p className="text-lg md:text-2xl">
          It is built specifically keeping in mind the nuances, processes, and challenges faced in the Real Estate Industry.
        </p>
      </div>

      {/* Right Side (Image Section) */}
      <div className="md:w-1/2 w-full">
        <img
          src="https://www.sell.do/assets/selldo_v3/overview-rect-40f02ce8cab3b93b45ba44226b6c67b6.svg"
          alt="Real Estate CRM"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default LayoutComponent;
