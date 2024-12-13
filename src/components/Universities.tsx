import React, { useEffect, useState, useRef } from "react";

const LayoutComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-50%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .slide-in {
            opacity: 0; /* Hidden before animation starts */
          }

          .animate {
            animation: slideIn 0.6s ease-in-out forwards;
          }

          .heading:nth-child(1) {
            animation-delay: 0.2s;
          }

          .heading:nth-child(2) {
            animation-delay: 0.6s;
          }

          .heading:nth-child(3) {
            animation-delay: 1s;
          }

          .subheading:nth-child(1) {
            animation-delay: 1.4s;
          }

          .subheading:nth-child(2) {
            animation-delay: 1.8s;
          }

          .subheading:nth-child(3) {
            animation-delay: 2.2s;
          }
        `}
      </style>
      <div
        ref={sectionRef}
        className="flex flex-col md:flex-row items-center p-4 px-10 md:px-20 py-10 md:py-16 my-12 md:my-20"
      >
        {/* Left Side (Text Section) */}
        <div className="md:w-1/2 w-full text-left md:mr-8 mb-4 md:mb-0">
          {/* Heading Section */}
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8">
            <span
              className={`slide-in heading block ${
                isVisible ? "animate" : ""
              }`}
            >
              Sell.Do-Real Estate CRM is built
            </span>
            <span
              className={`slide-in heading block ${
                isVisible ? "animate" : ""
              }`}
            >
              with a legacy of 10 years by
            </span>
            <span
              className={`slide-in heading block ${
                isVisible ? "animate" : ""
              }`}
            >
              industry experts.
            </span>
          </h1>

          {/* Subheading Section */}
          <p className="text-lg md:text-2xl">
            <span
              className={`slide-in subheading block ${
                isVisible ? "animate" : ""
              }`}
            >
              It is built specifically keeping in mind the
            </span>
            <span
              className={`slide-in subheading block ${
                isVisible ? "animate" : ""
              }`}
            >
              nuances, processes, and challenges
            </span>
            <span
              className={`slide-in subheading block ${
                isVisible ? "animate" : ""
              }`}
            >
              faced in the Real Estate Industry.
            </span>
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
    </>
  );
};

export default LayoutComponent;
