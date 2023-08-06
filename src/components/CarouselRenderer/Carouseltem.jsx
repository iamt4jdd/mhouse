import classNames from "classnames/bind";
// import { Typography } from "@material-tailwind/react";

import styles from './CarouselRenderer.module.scss'


const cx = classNames.bind(styles);


const CarouselItem = ({data, children}) => {

    return (

        <div className={`${cx('carousel-item-container')} relative h-full w-full`}>
            <img
            src={data.image}
            alt="building 1"
            className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full">            
                {children}
                {/* <Typography
                    variant="h1"
                    color="#fff"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                {data.slogan}
                </Typography> */}
            </div>
        </div>
    )
}

export default CarouselItem