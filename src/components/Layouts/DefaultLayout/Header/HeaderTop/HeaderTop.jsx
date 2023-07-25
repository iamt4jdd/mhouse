import classNames from "classnames/bind"
import styles from './HeaderTop.module.scss'

import { HeaderInner, Icon } from "~/components"
import images from "~/assets/images"
const cx = classNames.bind(styles)


const TOP_NAV_ITEM = [
    {
        title: 'Facebook',
        image: images.facebook,
        href: 'https://www.facebook.com/'
    },
    {
        title: 'Instagram',
        image: images.instagram,
        href: 'https://www.instagram.com/'
    },
    {
        title: 'Youtube',
        image: images.youtube,
        href: 'https://www.youtube.com/'
    }

]


const HeaderTop = () => {

    const renderItems = () => {
        return TOP_NAV_ITEM.map((item, index) => {
  
            return <Icon className={cx('nav-item')} key={index} href={item.href} image={item.image}/>
        })
    }


    return (
        <>
            <div className={`${cx('header-top')}`}>
                <HeaderInner>
                    <span className={cx('hot-line')}>HOTLINE | <strong>0327 853 764</strong></span>   
                    <div className={cx('top-nav-bar')}>
                        {renderItems()}
                    </div>
                </HeaderInner>
            </div>
        </>
    )
}

export default HeaderTop