import React, { useState } from 'react'

import images from "~/assets/images";
import { Button, SliderRenderer } from "~/components";

const InteriorDesign = () => {

  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>

      <div
        className={`md:h-[550px] px-2 md:px-32 py-28`}
        style={{ backgroundImage: `url(${images.plan})` }}
      >
        <div className="flex flex-col max-w-[880px]">
          <h1 className="uppercase text-4xl md:text-5xl">
            We present an <strong>outstanding portfolio</strong> of
            Extraordinary{" "}
            <strong className="text-greenMhouse">Interior designs </strong>
          </h1>
          <p className="leading-7 text-lg max-w-[580px]">
            At <strong className="">MHouse</strong>, we understand the
            importance of creating a warm and inviting atmosphere for your
            guests. Your homestay should be a place where travelers can feel at
            home, relax, and create lasting memories. Our interior design
            services are tailored to help you achieve just that. Whether you're
            starting from scratch or looking to revamp your existing space, our
            team of expert designers is here to bring your vision to life.
          </p>
        </div>
      </div>

      <div className='px-2 md:py-28'>
        <div className='flex justify-center md:mb-6'>
          <h1 className="uppercase text-4xl md:text-5xl max-w-[1000px]">
              selection of <strong className="text-greenMhouse">Interior designs </strong> options.
          </h1>
        </div>
        <div className='xl:flex xl:justify-center xl:px-32'>
        <SliderRenderer setSliderRef={setSliderRef} listSlider={[
          {
            image: images.interior1
          },
          {
            image: images.interior2
          },    
          {
            image: images.interior3
          },    
          {
            image: images.interior4
          },    
          {
            image: images.interior5
          },    
          {
            image: images.interior6
          },    
          ]}
        />
        </div>
        <div className='flex flex-1 justify-between md:px-[150px] xl:px-[140px] mt-6'>
          <Button onClick={sliderRef?.slickPrev} type='primary-non-border' className='w-[150px]'>Previous</Button>
          <Button onClick={sliderRef?.slickNext} type='primary-non-border' className='w-[150px]'>Next</Button>
        </div>
      </div>

      <div className='px-2 md:px-56 pt-28 md:pt-0 md:pb-28'>
        <h2 className='uppercase text-5xl mb-8'>
          <strong className='text-greenMhouse'>Our Interior Design services</strong>
          <br/><strong>encompasses:</strong>
        </h2>
        <ul className='leading-7 text-lg'>
          <li className='py-2'>
            <strong>Concept Development:</strong> We start by discussing your ideas and requirements, 
            and then we create a concept that aligns with your vision. 
            We provide you with design boards and sketches to help you visualize the final look.
          </li>
          <li className='py-2'>
            <strong>Furniture Selection:</strong> Our team helps you choose furniture that is both stylish and functional. 
            We can source furniture that suits your taste and budget.
          </li>
          <li className='py-2'>
            <strong>Color Coordination:</strong> We understand the psychology of color and how it can influence moods.
             We'll recommend color palettes that set the right tone for your homestay.
          </li>
          <li className='py-2'>
            <strong>Lighting:</strong> WProper lighting can transform a space. 
            We can design lighting schemes that create a warm and inviting ambiance
          </li>
          <li className='py-2'>
            <strong>Accessories and Decor:</strong> The right accessories and decor items can add personality to your homestay.
             We help you select items that reflect your style.
          </li>
          <li className='py-2'>
            <strong>Space Planning:</strong> We'll create a layout that optimizes the use of space, 
            ensuring that your guests have everything they need without feeling cramped.
          </li>
          <li className='py-2'>
            <strong>Customization:</strong> If you have specific requirements or unique ideas,
             we can incorporate them into the design to make your homestay truly one-of-a-kind.
          </li>
        </ul>
      </div>
    
     
    </>
  );
};

export default InteriorDesign;
