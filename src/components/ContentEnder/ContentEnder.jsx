import React from "react";

import { Button } from "..";
import images from "~/assets/images";

const ContentEnder = () => {
  return (
    <>
      <div className='xl:flex xl:flex-col xl:justify-center xl:items-center'>
        <div className='relative py-24 flex flex-1 flex-col md:flex-row xl:justify-center'>
          <div className="bg-gray-200 md:w-[720px] md:h-[450px] md:my-20">
              <div className="relative md:left-24 justify-center items-center flex flex-col bg-gray-200 md:shadow-2xl w-full h-full">
                  <h2 className="text-gray-800 mt-5 font-medium text-xl xl:text-3xl">
                      Let's Talk
                  </h2>
                  <h1 className="leading-6 font-bold tracking-wide mt-8">
                      NEED TO REACH US?
                  </h1>
                  <div className="my-10 sm:mt-10 flex">
                      <Button
                      to="/contact"
                      className=""
                      type="primary-non-border"
                      >
                      Contact Us
                      </Button>
                  </div>
              </div>
          </div>
          <div className="flex flex-col justify-center md:w-[1500px] md:h-[600px]">
              <img src={images.worker2} alt="Building" className="h-full w-full" />
          </div>
          <div className='flex flex-col items-center md:block shadow-2xl md:shadow-none md:absolute bottom-24 left-2 md:right-16 md:bottom-48'>
              <h1 className='leading-12 font-bold tracking-wide md:text-white md:text-right uppercase mt-8 md:text-7xl'><strong>Let's Build</strong> <br/> Together</h1>
              <div className="my-5 sm:mt-10 flex md:justify-end">
                  <Button
                  to="/project"
                  className=""
                  type="primary-non-border"
                  >
                  Our Project
                  </Button>
              </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ContentEnder;

//