import Slider from "react-slick";

import { ContentRenderer } from "..";

const SliderRenderer = ({
  listSlider,
  setSliderRef,
  type = 'primary',
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
        className="flex flex-1 flex-row w-full xl:w-[1500px] md:px-[138px] xl:px-0"
      >
        {listSlider.map((slider, index) => (
            <ContentRenderer key={index} image={slider.image} area={slider.area} 
            title={slider.title} content={slider.content} type={type}
            className='md:px-3'
            />
        ))}
      </Slider>
    </>
  );
};

export default SliderRenderer;
