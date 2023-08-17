import Slider from "react-slick";

import images from "~/assets/images";

const Testimonial = ({
  listTestimonial = [
    {
      title: "MHouse Completes Largest Public Port Project on Texas Coast",
      image: images.Building1,
      release: "News release",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ante ac ipsum feugiat varius ut sit amet neque. Quisque eleifend pharetra lectus ac eleifend. ",
    },
    {
      title: "Challenges and Opportunities of Water in Houston",
      image: images.Building2,
      release: "News release",
      content:
        "Fusce iaculis magna sit amet nisi tempor, a hendrerit tortor malesuada. Integer eget dolor eu felis sollicitudin commodo finibus eget felis.",
    },
    {
      title: "MHouse Completes Barbours Cut Terminal Container Yard 3N",
      image: images.Building3,
      release: "News release",
      content:
        "Etiam lobortis ligula et ultrices blandit. Nulla mattis ligula ut tortor euismod, eget posuere tortor dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra",
    },
    {
      title: "MHouse Awarded Texas Port Construction Contracts",
      image: images.Building4,
      release: "News release",
      content:
        "Vivamus semper elementum quam, sed maximus dolor interdum in. Integer rutrum iaculis felis eu accumsan.",
    },
    {
      title: "New Craft Workforce Center in Chandler, Ariz. Unveiled",
      image: images.Building5,
      release: "News release",
      content:
        "In hac habitasse platea dictumst. Per inceptos himenaeos. Etiam ac fringilla ex.",
    },
    {
      title: "MHouse Designed and Constructed Building in Chandler",
      image: images.Building6,
      release: "News release",
      content:
        "Donec porta ligula varius ex facilisis pulvinar. Quisque id vulputate leo, id interdum erat. Vivamus sapien dolor, tempus nec turpis vitae, egestas dapibus quam.",
    },
  ],
  setSliderRef,
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
        {listTestimonial.map((listTestimonials, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="">
                <div className="">
                  <img
                    className="w-full h-[242px]"
                    src={listTestimonials.image}
                    alt="Icon People"
                  />
                </div>
                <div className="my-4 font-medium text-red-900 text-base uppercase">
                    <p className="">{listTestimonials.release}</p>
                </div>
                <div className="my-4 font-bold text-xl">
                    <h3 className="">{listTestimonials.title}</h3>
                </div>
                <div className="font-light text-gray-600">
                    <p className="">{listTestimonials.content}</p>
                </div>
              </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
