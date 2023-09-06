import classNames from "classnames/bind"
import styles from './FooterCloser.module.scss'
import { InnerContainer } from "~/components"

const cx = classNames.bind(styles)

const FooterCloser = () => {
    return (
        <>
            <div className={cx('footer-closer')}>
                <InnerContainer type=''>
                    <div className={`${cx('menu-footer-container')} flex flex-col flex-1 items-center mh-[40px]`}>
                        <ul className="flex justify-center space-x-4 uppercase text-sm text-gray-700">
                            <li>All Rights Reserved.</li>
                            <li>Privacy Policy</li>
                        </ul>
                        <div className={`${cx('copyright-footer')} text-gray-700 mt-2`}>
                        Copyright 2023 © 
                        <strong className="text-gray-600"> mhouse.vn</strong>
                        </div>
                    </div>  
                    
                </InnerContainer>
            </div>
        </>
    )
}

export default FooterCloser