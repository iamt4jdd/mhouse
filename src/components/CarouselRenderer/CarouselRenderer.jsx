import classNames from "classnames/bind";
import { Carousel } from "@material-tailwind/react";

import images from "~/assets/images";
import styles from './CarouselRenderer.module.scss'
import CarouselItem from "./Carouseltem";

const cx = classNames.bind(styles);

const CAROUSEL_ITEM = [
    {
        title: 'Buiding 1',
        image: images.Building1,
    },
    {
        title: 'Buiding 2',
        image: images.Building3,
    }
]


const CarouselRenderer = ({children}) => {

    const renderItems = () => {
        return CAROUSEL_ITEM.map( (item, index) => 
             <CarouselItem key={index} data={item} children={children}/>);
     }

    return (
        <Carousel className="w-75">
            {renderItems()}
        </Carousel>
    )
}

export default CarouselRenderer