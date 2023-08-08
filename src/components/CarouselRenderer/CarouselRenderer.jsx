import classNames from "classnames/bind";
import { Carousel } from "@material-tailwind/react";

import images from "~/assets/images";
import styles from './CarouselRenderer.module.scss'
import CarouselItem from "./Carouseltem";

const cx = classNames.bind(styles);

const CAROUSEL_ITEM = [
    {
        title: 'Building 1',
        image: images.Building1,
        slogan: 'Interior Construction'
    },
    {
        title: 'Building 2',
        image: images.Building3,
        slogan: 'Renovate Building'
    },
    {
        title: 'Building 3',
        image: images.Building10,
        slogan: 'ádasdasdasd'
    },
    {
        title: 'Building 4',
        image: images.Building13,
        slogan: 'dfgdfgdgdfgdfgdf'
    },
]


const CarouselRenderer = ({children}) => {

    const renderItems = () => {
        return CAROUSEL_ITEM.map( (item, index) => 
             <CarouselItem key={index} data={item} children={children}/>);
     }

    return (
        <Carousel 
            className={`${cx('carousel-container')} h-[45rem]`}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
            )}
        >
            {renderItems()}
        </Carousel>
    )
}

export default CarouselRenderer