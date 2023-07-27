import classNames from "classnames/bind"
import { Link } from "react-router-dom"

import styles from './HeaderMain.module.scss'
import { InnerContainer, Button } from "~/components"
import { Menu } from "~/components/Popper"
import images from "~/assets/images"
const cx = classNames.bind(styles)


const NAV_ITEM = [
    {
        title: 'Home',
        to: '/',
    },
    {
        title: 'About Us',
        to: '/about-us',
    },
    {
        title: 'Services',
        children: [
            {
                title: 'Interior Design',
                to: '/project/interior-design'
            },
            {
                title: 'Apartment',
                to: '/project/apartment'
            },
            {
                title: 'Construction',
                to: '/project/construction'
            },
        ]
    },
    {
        title: 'Project',
        to: '/project',
    },
    {
        title: 'News',
        to: '/news',
    },
    {
        title: 'Contact',
        to: '/contact',
    },
    
]




const HeaderMain = () => {



    const renderItems = () => {


        return NAV_ITEM.map((item, index) => {
            let Comp = 'div'
            if (item.children){
                Comp = Menu
            }
            
   
            return (
                <Comp key={index} items={item.children}>
                    <span tabIndex='0'>
                        <Button className='nav-item' type='text' to={item.to}>{item.title}</Button>
                    </span>
                </Comp>
            )
            
        })
    }


    return (
        <>
            <div className={cx('header-main')}>
                <InnerContainer>
                    <Link to="/">
                        <img className={cx('logo')} src={images.logo} alt="logo" />
                    </Link>
                    <div className={cx('nav-bar')}>
                        {renderItems()}
                    </div>
                </InnerContainer>
            </div>
        </>
    )
}

export default HeaderMain