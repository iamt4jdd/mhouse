import classNames from "classnames/bind"
import styles from './IconRenderer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

import { Icon } from "~/components"
const cx = classNames.bind(styles)


const ICON_ITEM = [
    {
        title: 'Facebook',
        icon: <FontAwesomeIcon icon={faFacebook} />,
        href: 'https://www.facebook.com/'
    },
    {
        title: 'Instagram',
        icon: <FontAwesomeIcon icon={faInstagram} />,
        href: 'https://www.instagram.com/'
    },
    {
        title: 'Youtube',
        icon: <FontAwesomeIcon icon={faYoutube} />,
        href: 'https://www.youtube.com/'
    }

]

const IconRenderer = () => {

    const renderItems = () => {
        return ICON_ITEM.map((item, index) => {
  
            return <Icon className={cx('icon-item')} key={index} href={item.href} icon={item.icon}/>
        })
    }


    return (
        <>
                {renderItems()}
        </>
    )
}

export default IconRenderer