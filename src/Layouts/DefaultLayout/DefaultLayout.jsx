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
                <div className='bg-gray-200 bg-opacity-100 min-w-full min-h-full'>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default DefaultLayout