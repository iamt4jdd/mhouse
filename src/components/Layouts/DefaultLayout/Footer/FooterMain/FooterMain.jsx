import classNames from "classnames/bind"
import styles from './FooterMain.module.scss'

const cx = classNames.bind(styles)

const FooterMain = () => {
    return (
        <>
            <div className={cx('footer-main')}>
                <h1 className="text-red-700">FooterMain</h1>
            </div>
        </>
    )
}

export default FooterMain