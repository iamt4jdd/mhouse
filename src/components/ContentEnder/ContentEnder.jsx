import React from "react";

import { Button } from "..";
import images from "~/assets/images";

const ContentEnder = () => {
  return (
    <>
      <div className='py-24 flex flex-1'>
        <div className="bg-gray-200 md:w-[720px] md:h-[450px] py-4 sm:py-0 sm:my-20">
            <div className="relative sm:left-24 justify-center items-center flex flex-col bg-gray-200 shadow-2xl w-full h-full">
                <h2 className="text-gray-800 mt-5 font-medium text-xl xl:text-3xl">
                    Let's Talk
                </h2>
                <h1 className="leading-6 font-bold tracking-wide mt-8">
                    NEED TO REACH US?
                </h1>
                <div className="my-10 sm:mt-10 flex">
                    <Button
                    to="/services"
                    className="hover-add-swipe"
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
      </div>
    </>
  );
};

export default ContentEnder;
