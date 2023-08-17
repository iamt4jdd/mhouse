import React from "react";

import { Button } from "..";
import images from "~/assets/images";

const ContentEnder = () => {
  return (
    <>
      <div className='relative py-24 flex flex-1 flex-col sm:flex-row'>
        <div className="bg-gray-200 md:w-[720px] md:h-[450px] sm:my-20">
            <div className="relative sm:left-24 justify-center items-center flex flex-col bg-gray-200 shadow-2xl w-full h-full">
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
            <img src={images.worker} alt="Building" className="h-full w-full" />
        </div>
        <div className='absolute bottom-24 left-10 md:right-20 md:bottom-48'>
            <h1 className='leading-12 font-bold tracking-wide text-white text-right uppercase mt-8 md:text-7xl'><strong>Let's Build</strong> <br/> Together</h1>
            <div className="my-5 sm:mt-10 flex justify-end">
                <Button
                to="/contact"
                className=""
                type="primary-non-border"
                >
                Our Project
                </Button>
            </div>
        </div>
      </div>
    </>
  );
};

export default ContentEnder;
