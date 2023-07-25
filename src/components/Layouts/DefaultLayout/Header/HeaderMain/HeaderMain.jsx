import classNames from "classnames/bind"
import { Link } from "react-router-dom"


import styles from './HeaderMain.module.scss'
import { HeaderInner, Button } from "~/components"
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
        to: '/services',
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
            return (
                <Menu key={index}>
                    <Button className='nav-item' type='text' to={item.to}>{item.title}</Button>
                </Menu>
            )
            
        }
        )
    }


    return (
        <>
            <div className={cx('header-main')}>
                <HeaderInner>
                    <Link to="/">
                        <img className={cx('logo')} src={images.logo} alt="logo" />
                    </Link>
                    <div className={cx('nav-bar')}>
                        {renderItems()}
                    </div>
                </HeaderInner>
            </div>
        </>
    )
}

export default HeaderMain