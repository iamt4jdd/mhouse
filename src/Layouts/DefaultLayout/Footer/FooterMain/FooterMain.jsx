import classNames from "classnames/bind"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


import { Icon } from "~/components"
import { InnerContainer } from "~/components"
import styles from './FooterMain.module.scss'
import images from "~/assets/images"

const cx = classNames.bind(styles)



const ICON_ITEM = [
    {
        title: 'Facebook',
        icon: faFacebook,
        href: 'https://www.facebook.com/'
    },
    {
        title: 'Instagram',
        icon: faInstagram,
        href: 'https://www.instagram.com/'
    },
    {
        title: 'Youtube',
        icon: faYoutube,
        href: 'https://www.youtube.com/'
    }

]

const IconRenderer = () => {

    const renderItems = () => {
        return ICON_ITEM.map((item, index) => {
  
            return <Icon key={index} href={item.href} icon={item.icon} 
            iconClassName='text-white border-white w-[28px] h-[28px] hover:bg-black cursor-pointer'/>
        })
    }
    return (
        <>
                {renderItems()}
        </>
    )
}

const ContentContainer = ({
    children,
    title,
    type = 'primary',
    image,
    icon,
    className,
    ...passProps
}) => {

    const props = {
        ...passProps
    }

    const classes = cx('content-container', {
        [className]: className,
        [type]: type,
    })


    return (
        <>
            <div className={classes} {...props}>
                <div className={cx('wrapper')}>
                    <div className={cx('title')}><span>{title}</span></div>
                    <div className={cx('section-break')}><span>&nbsp;</span></div>
                    {image && <div className={cx('image')}><img src={image} alt=""/></div>}
                    {icon && <div className={cx('icon')}>{icon}</div>}
                    {children}     
                </div>
            </div>
        </>
    )
}

const FooterMain = () => {
    return (
        <>
            <div className={cx('footer-main')}>
                <InnerContainer type='' className='flex flex-1 flex-col sm:flex-row sm:flex-nowrap'>
                    <ContentContainer title='About us' image={images.logo} className='flex-grow'/>
                    <ContentContainer title='Contact Information' size='large' className='flex-grow'>
                        <p className={cx('contact-info')}>
                            <span>Công ty TNHH Tư vấn thiết kế xây dựng <span className='text-amber-500'>Haha</span></span><br />
                            <span>Address: <span>10 Đường số 41, Bình Đông, Quận 8, TPHCM</span></span><br />
                            <br /><br />
                            <span>Tel/Zalo: <span>0327853764</span></span><br />
                            <span>Email: <span>Test1234@gmail.com</span></span>
                        </p>
                    </ContentContainer>
                    <ContentContainer title='Connect with us' icon={IconRenderer()} className='flex-grow'/>
                </InnerContainer>
            </div>
        </>
    )
}

export default FooterMain