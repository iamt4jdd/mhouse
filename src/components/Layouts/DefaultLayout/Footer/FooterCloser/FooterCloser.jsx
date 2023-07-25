import classNames from "classnames/bind"
import styles from './FooterCloser.module.scss'

const cx = classNames.bind(styles)

const FooterCloser = () => {
    return (
        <>
            <div className={cx('footer-closer')}>
                <h1 className="text-red-700">FooterCloser</h1>
            </div>
        </>
    )
}

export default FooterCloser