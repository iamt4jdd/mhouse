// import React, { useState } from 'react'



import images from '~/assets/images'
// import { Button, SliderRenderer } from '~/components'


const InteriorDesign = () => {

  // const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <div className={`md:h-[550px] px-2 md:px-24 pt-28`} 
      style={{ backgroundImage: `url(${images.plan})`}}>
        <div className='flex flex-col max-w-[880px]'>
          <h1 className='uppercase text-5xl'>
            We present an <strong>outstanding portfolio</strong> of Extraordinary <strong className='text-greenMhouse'>Interior designs </strong>
          </h1>
          <p className='leading-7 text-lg max-w-[580px]'>
          At <strong className=''>MHouse</strong>, we understand the importance of creating a warm and inviting atmosphere for your guests. 
          Your homestay should be a place where travelers can feel at home, relax, and create lasting memories. 
          Our interior design services are tailored to help you achieve just that. 
          Whether you're starting from scratch or looking to revamp your existing space, 
          our team of expert designers is here to bring your vision to life.
          </p>
        </div>
      </div>


    </>
  )
}

export default InteriorDesign

