import classNames from "classnames/bind"



import FooterCloser from "./FooterCloser"
import FooterMain from "./FooterMain"
import styles from './Footer.module.scss'



const cx = classNames.bind(styles)

const Footer = () => {
    return (
        <>
            <div className={`${cx('footer-container')} w-full`}>
                <FooterMain />
                <FooterCloser />
            </div>
        </>
    )
}

export default Footer