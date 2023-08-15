import { useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons"

import images from "~/assets/images";


const Testimonial = ({
    listTestimonial = [
      {
        name: "cccccc",
        image: images.logo,
        city: "Warsaw",
        country: "Poland",
        rating: "4.5",
        testimonial:
          "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
      },
      {
        name: "aaaaaaaa",
        image: images.logo,
        city: "Warsaw",
        country: "Poland",
        rating: "4.5",
        testimonial:
          "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
      },
      {
        name: "bbbbbbbbbb",
        image: images.logo,
        city: "Warsaw",
        country: "Poland",
        rating: "4.5",
        testimonial:
          "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
      },
      {
        name: "ddddddddddd",
        image: images.logo,
        city: "Warsaw",
        country: "Poland",
        rating: "4.5",
        testimonial:
          "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
      },
    ],
    sliderRef,
    setSliderRef
  }) => {

    
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
          className="flex flex-1 flex-row w-full px-[138px]"
        >
          {listTestimonial.map((listTestimonials, index) => (
            <div className="px-3 flex items-stretch" key={index}>
             <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col md:flex-row w-full items-stretch md:items-center">
                <div className="flex order-2 md:order-1">
                    <img
                      className='w-[50px] h-[50px]'
                      src={listTestimonials.image}
                      alt="Icon People"
                    />
                    <div className="flex flex-col ml-5 text-left">
                      <p className="text-lg text-black-600 capitalize">
                        {listTestimonials.name}
                      </p>
                      <p className="text-sm text-black-500 capitalize">
                        {listTestimonials.city},{listTestimonials.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-none items-center ml-auto order-1 md:order-2">
                    <p className="text-sm">{listTestimonials.rating}</p>
                    <span className="flex ml-4">
                        <FontAwesomeIcon icon={faStar} className='h-4 w-4'/>
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-left">“{listTestimonials.testimonial}”.</p>
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }

export default Testimonial
