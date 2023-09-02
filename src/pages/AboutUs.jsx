import React from "react";
import { faGears, faLightbulb, faPeopleArrows, faShield, faThumbsUp, faUserTie } from '@fortawesome/free-solid-svg-icons';

import images from "~/assets/images";
import { Button, Icon } from "~/components";

const BenefitItems = [
  {
    title: "Integrity",
    icon: faThumbsUp,
  },
  {
    title: "Excellence",
    icon: faGears,
  },
  {
    title: "Innovation",
    icon: faLightbulb,
  },
  {
    title: "Collaboration",
    icon: faPeopleArrows,
  },
  {
    title: "Professional",
    icon: faUserTie,
  },
  {
    title: "Safety",
    icon: faShield,
  },
];

const AboutItem = ({ title, image, to, content, className }) => {
  return (
    <div className={`${className} flex flex-1 flex-col min-h-[700px] w-[400px]`}>
      <img src={image} alt="worker" className="h-[422px]" />
      <div className="bg-brownBlack p-8">
        <div className="flex flex-col">
          <Button href={to} className="w-[200px]" type="primary-non-border">
            {title}
          </Button>
          <span className="h-[1px] bg-gray-800 w-full mt-7">&nbsp;</span>
        </div>
        <div>
          <h1 className="text-white text-2xl font-extrabold uppercase">
            {content}
          </h1>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:h-[500px] md:px-24 pt-28 xl:justify-center">
        <div className="py-10 px-4 md:px-0 flex flex-col max-w-[400px]">
          <h1 className="text-sm font-bold text-gray-700">WHO WE ARE?</h1>
          <p className="text-[42px] font-semibold uppercase">
            <strong className="text-greenMhouse">MHouse</strong>, Vietnamese's
            Building Company
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:absolute md:top-56 md:right-16 xl:relative xl:top-0 xl:right-0">
          <AboutItem title="Our Vision" image={images.worker4} to="/about-us/#vision" content="Innovative Transformation" className="mr-8" />
          <AboutItem title="Our Values" image={images.officeMan} to="/about-us/#value" content="Integrity, Excellence, Collaboration" />
        </div>
      </div>

      <div className="md:h-[800px] px-2 md:px-56 pt-20 md:pt-96" style={{ backgroundImage: `url(${images.plan})` }}>
        <div className="flex flex-col items-center w-full">
          <h1 className="uppercase text-5xl md:text-6xl text-center">
            OUR GOAL: <strong>TO GIVE YOU Exquisite </strong>
            <strong className="text-greenMhouse">homeStay designs </strong>
          </h1>
          <p className="leading-7 text-lg max-w-[680px] text-center">
            It's our never-ending quest, and it requires the best teams in our
            industry. If you're ready to take on construction's toughest
            projects and be rewarded for your success, we want to hear from you.
          </p>
        </div>
      </div>

      <section id="value" className="flex flex-col px-2 md:px-28 pt-20">
        <div className="flex flex-col items-center p-8">
          <h1 className="uppercase text-4xl md:text-5xl m-0 mb-8">
            The benefit of <strong>Choosing our services </strong>
          </h1>
          <p className="w-[400px] text-lg text-center text-gray-600 px-8">Taking care of our clients starts with taking care of our fellow owners.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-y-16">
          {BenefitItems.map((item, index) => (
            <Icon key={index} icon={item.icon} title={item.title} type='normal' 
            className='flex flex-col items-center'
            iconClassName='text-greenMhouse'
            />
          ))}
        </div>
      </section>

      <section id="vision" className="px-2 py-10 md:py-32 md:px-56">
        <div className="flex flex-col items-center w-full">
          <h1 className="uppercase text-5xl text-center">
            OUR VISION: Redefining Construction with
            <strong> Quality and Innovation</strong>
          </h1>
          <p className="leading-7 text-lg max-w-[680px] text-center">
            Our vision is to redefine the construction landscape by consistently delivering exceptional quality,
            fostering collaborative partnerships, and embracing the latest technologies.
            We aim to be the preferred choice for clients seeking excellence in construction services.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
