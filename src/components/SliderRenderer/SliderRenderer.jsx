import Slider from "react-slick";

import images from "~/assets/images";
import { ContentRenderer } from "..";

const SliderRenderer = ({
  listSlider = [
    {
      title: "MHouse Completes Largest Public Port Project on Texas Coast",
      image: images.Building1,
      area: "News release",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ante ac ipsum feugiat varius ut sit amet neque. Quisque eleifend pharetra lectus ac eleifend. ",
    },
    {
      title: "Challenges and Opportunities of Water in Houston",
      image: images.Building2,
      area: "News release",
      content:
        "Fusce iaculis magna sit amet nisi tempor, a hendrerit tortor malesuada. Integer eget dolor eu felis sollicitudin commodo finibus eget felis.",
    },
    {
      title: "MHouse Completes Barbours Cut Terminal Container Yard 3N",
      image: images.Building3,
      area: "Insights",
      content:
        "Etiam lobortis ligula et ultrices blandit. Nulla mattis ligula ut tortor euismod, eget posuere tortor dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra",
    },
    {
      title: "MHouse Awarded Texas Port Construction Contracts",
      image: images.Building4,
      area: "News release",
      content:
        "Vivamus semper elementum quam, sed maximus dolor interdum in. Integer rutrum iaculis felis eu accumsan.",
    },
    {
      title: "New Craft Workforce Center in Chandler, Ariz. Unveiled",
      image: images.Building5,
      area: "News release",
      content:
        "In hac habitasse platea dictumst. Per inceptos himenaeos. Etiam ac fringilla ex.",
    },
    {
      title: "MHouse Designed and Constructed Building in Chandler",
      image: images.Building6,
      area: "News release",
      content:
        "Donec porta ligula varius ex facilisis pulvinar. Quisque id vulputate leo, id interdum erat. Vivamus sapien dolor, tempus nec turpis vitae, egestas dapibus quam.",
    },
  ],
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
        className="flex flex-1 flex-row w-full xl:w-[1500px] md:px-[138px]"
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
