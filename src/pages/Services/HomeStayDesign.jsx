import React, { useState } from 'react'
import Slider from "react-slick";



import images from '~/assets/images'
import { Button } from '~/components'


const Items = [
  {
    title: 'Better Insights with Data',
    image: images.Building26
  },  
  {
    title: 'Fast, Modern and Simple',
    image: images.Building27
  },  
  {
    title: 'Innovate with Emerging Technologies',
    image: images.Building28
  },
]

const renderItems = () => {
  return Items.map((item, index) => {
    return <li className='' key={index}>
      <img src={item.image} alt={`Building ${index}`} className='w-[390px] h-[480px] mb-6' />
      <h3 className='font-bold text-2xl max-w-[390px] text-center'>{item.title}</h3>
    </li>
  })
}

const SliderRenderer = ({
  
  setSliderRef,
  type = 'primary',
}) => {

  const listSlider = [
    {
      image: images.Building23
    },    
    {
      image: images.Building24
    },    
    {
      image: images.Building25
    },    
    {
      image: images.Building26
    },    
    {
      image: images.Building27
    },    
    {
      image: images.Building28
    },
  ]

  const settings = {
    dots: false,
    customPaging: function (i) {
      return (
        <a href="#aaa" className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex flex-1 flex-row w-full xl:w-[1500px] md:px-[138px]"
      >
        {listSlider.map((slider, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="">
                <div className="">
                  <img
                    className="w-full h-[242px]"
                    src={slider.image}
                    alt="Icon People"
                  />
                </div>            
              </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

const HomestayDesign = () => {

  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <div className={`md:h-[550px] px-2 md:px-24 pt-28`} 
      style={{ backgroundImage: `url(${images.plan})`}}>
        <div className='flex flex-col max-w-[880px]'>
          <h1 className='uppercase text-5xl'>
            We offer an <strong>exceptional collection</strong> of Remarkable <strong className='text-greenMhouse'>homeStay designs </strong>
          </h1>
          <p className='leading-7 text-lg max-w-[550px]'>
          Imagine stepping into a homestay nestled along a beach,
          where the golden sunlight kisses each grain of sand and the turquoise ocean seamlessly blends with the sky.
          As you enter, you're greeted by a space that is both tranquil and enchanting, 
          where every detail is meticulously crafted to embrace you with every step. 
          This is one of the remarkable homestay designs and constructions by MHouse.
          </p>
        </div>
      </div>

      <div className='px-2 md:px-24 py-28 '>
        <ul className='flex flex-1 justify-evenly'>
          {renderItems()}
        </ul>
      </div>

      <div className='md:px-56 py-28'>
        <h2 className='uppercase text-5xl mb-8'>
          <strong>Modern Connections</strong> for a&nbsp;
          <br/><strong>Great Experience</strong>
        </h2>
        <ul className='leading-7 text-lg'>
          <li>This homestay isn't just a place to stay, it's an immersive experience of coastal living at its finest. The living room boasts soft hues that blend with the lush natural surroundings outside the window. Comfortable armchairs and a petite coffee table create a relaxing ambiance perfect for gatherings with friends and family.</li>
          <li>The bedrooms are adorned with subtle elegance, featuring delicate curtains that allow natural light to dance in during the mornings and plush bedding for a restful sleep. From the bedroom windows, you can catch glimpses of the expansive beach, creating a picturesque view right at your fingertips.</li>
          <li>The outdoor areas are equally impressive. A small garden filled with vibrant greens, comfortable loungers, and an outdoor dining table becomes the perfect spot to unwind while savoring the refreshing sea breeze.</li>
          <li>Every aspect, from color choices to materials and decor, seamlessly comes together to create a homestay that is both beautiful and inviting. This is the brilliance of MHouse's Homestay Design and Construction service – crafting memorable spaces that harmonize with nature and deliver captivating experiences to each and every guest."</li>
        </ul>
      </div>

      <div className=''>
        <SliderRenderer setSliderRef={setSliderRef} type='imageOnly'/>
        <div className='flex flex-1 justify-between md:px-[150px] mt-6'>
          <Button onClick={sliderRef?.slickPrev} type='primary-non-border' className='w-[150px]'>Previous</Button>
          <Button onClick={sliderRef?.slickNext} type='primary-non-border' className='w-[150px]'>Next</Button>
        </div>
      </div>
    </>
  )
}

export default HomestayDesign