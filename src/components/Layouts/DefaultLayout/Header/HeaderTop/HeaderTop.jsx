import classNames from "classnames/bind"
import styles from './HeaderTop.module.scss'

import { InnerContainer, IconRenderer } from "~/components"

const cx = classNames.bind(styles)



const HeaderTop = () => {

   


    return (
        <>
            <div className={`${cx('header-top')}`}>
                <InnerContainer>
                    <span className={cx('hot-line')}>HOTLINE | <strong>0327 853 764</strong></span>   
                    <div className={cx('top-nav-bar')}>
                        <IconRenderer/>
                    </div>
                </InnerContainer>
            </div>
        </>
    )
}

export default HeaderTop