import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { ContentRenderer } from "~/components";
import images from "~/assets/images";

const projectItems = [
  {
    title: "MHouse Completes Largest Public Port Project on Texas Coast",
    image: images.Building1,
    article: "News release",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ante ac ipsum feugiat varius ut sit amet neque. Quisque eleifend pharetra lectus ac eleifend. ",
  },
  {
    title: "Challenges and Opportunities of Water in Houston",
    image: images.Building2,
    article: "News release",
    content:
      "Fusce iaculis magna sit amet nisi tempor, a hendrerit tortor malesuada. Integer eget dolor eu felis sollicitudin commodo finibus eget felis.",
  },
  {
    title: "MHouse Completes Barbours Cut Terminal Container Yard 3N",
    image: images.Building3,
    article: "Insights",
    content:
      "Etiam lobortis ligula et ultrices blandit. Nulla mattis ligula ut tortor euismod, eget posuere tortor dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra",
  },
  {
    title: "MHouse Awarded Texas Port Construction Contracts",
    image: images.Building4,
    article: "News release",
    content:
      "Vivamus semper elementum quam, sed maximus dolor interdum in. Integer rutrum iaculis felis eu accumsan.",
  },
  {
    title: "New Craft Workforce Center in Chandler, Ariz. Unveiled",
    image: images.Building5,
    article: "News release",
    content:
      "In hac habitasse platea dictumst. Per inceptos himenaeos. Etiam ac fringilla ex.",
  },
  {
    title: "MHouse Designed and Constructed Building in Chandler",
    image: images.Building6,
    article: "News release",
    content:
      "Donec porta ligula varius ex facilisis pulvinar. Quisque id vulputate leo, id interdum erat. Vivamus sapien dolor, tempus nec turpis vitae, egestas dapibus quam.",
  },
];

const mostReadItems = [
  {
    title: "MHouse Completes Barbours Cut Terminal Container Yard 3N",
    image: images.Building3,
    article: "Insights",
    content:
      "Etiam lobortis ligula et ultrices blandit. Nulla mattis ligula ut tortor euismod, eget posuere tortor dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra",
  },
  {
    title: "MHouse Awarded Texas Port Construction Contracts",
    image: images.Building4,
    article: "News release",
    content:
      "Vivamus semper elementum quam, sed maximus dolor interdum in. Integer rutrum iaculis felis eu accumsan.",
  },
  {
    title: "New Craft Workforce Center in Chandler, Ariz. Unveiled",
    image: images.Building5,
    article: "News release",
    content:
      "In hac habitasse platea dictumst. Per inceptos himenaeos. Etiam ac fringilla ex.",
  },
];

const ItemRenderer = (item) => {
  return item.map((item, index) => (
    <ContentRenderer
      key={index}
      image={item.image}
      article={item.article}
      title={item.title}
      type="primary"
    />
  ));
};

const Insights = () => {
  return (
    <div className="">
      <div className="flex px-2 py-8 md:px-28 flex-col">
        <div className="flex flex-1 flex-col mb-16">
          <h2 className="font-semibold text-lg text-gray-600 uppercase">
            Insights
          </h2>
          <h1 className="font-bold mt-3 text-6xl">ALL ARTICLES</h1>
        </div>
        <div className="flex flex-col md:flex-row flex-1 justify-between">
          <div className="flex p-4 pl-0 border-b-2 mb-8 md:mb-0 border-gray-600 md:w-[700px]">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="mr-4 w-[20px] h-[20px] pt-1 text-red-600 hover:text-black"
            />
            <input
              type="search"
              placeholder="Search Insights"
              className="h-[30px] w-full bg-transparent outline-none font-semibold text-2xl
                        placeholder:text-gray-600 placeholder:font-semibold placeholder:text-2xl"
            />
          </div>
          <div className="flex border-b-2 border-gray-600 pt-7">
            <select className="w-full bg-transparent outline-none md:w-[200px] font-semibold">
              <option value="All" defaultValue>
                All Articles
              </option>
              <option value="10">Editorial</option>
              <option value="11">Event</option>
              <option value="12">In the News</option>
              <option value="13">News Release</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row pb-24">
        <div className="px-2 md:pl-28 md:pr-16 py-24 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
          {ItemRenderer(projectItems)}
        </div>
        <div className="mx-10 sm:mx-28 mb-5 border-t-2 md:hidden border-gray-400">
          &nbsp;
        </div>
        <div className="border-l-2 border-gray-400 px-2 sm:px-16 md:pb-48">
          <h1 className="text-2xl font-semibold uppercase mb-12">Most Read</h1>
          <div className="grid grids-cols-1 sm:grid-cols-2 md:sm:grid-cols-1 gap-x-8 gap-y-20">
            {ItemRenderer(mostReadItems)}
          </div>
        </div>
      </div>
      <div className="mx-28 border-b-2 border-gray-400">&nbsp;</div>
    </div>
  );
};

export default Insights;
