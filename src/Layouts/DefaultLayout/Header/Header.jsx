import classNames from "classnames/bind"
import styles from './Header.module.scss'

// import HeaderTop from "./HeaderTop"
import HeaderMain from "./HeaderMain"

const cx = classNames.bind(styles)

const Header = () => {
    return (
        <>
            <div className={`${cx('header-container')}`}>
                {/* <HeaderTop /> */}
                <HeaderMain />
            </div>
        </>
    )
}

export default Header