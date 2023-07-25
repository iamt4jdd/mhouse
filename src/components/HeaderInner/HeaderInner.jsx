import classNames from "classnames/bind";


import styles from './HeaderInner.module.scss'


const cx = classNames.bind(styles);

const HeaderInner = ({ children }) => {

    return (
        <>
            <div className={`${cx('header-inner')}`}>
                {children}
            </div>
        </>
    )
}

export default HeaderInner;
