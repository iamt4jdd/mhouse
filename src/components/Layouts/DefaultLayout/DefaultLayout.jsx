import classNames from "classnames/bind"

import styles from './DefaultLayout.module.scss'
import Header from "./Header"
import Footer from "./Footer"

const cx = classNames.bind(styles)

const DefaultLayout = ({ children }) => {
    return (
        <>
            <div className={cx('layout-container')}>
                <Header />
                <div className={cx('content')}>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default DefaultLayout