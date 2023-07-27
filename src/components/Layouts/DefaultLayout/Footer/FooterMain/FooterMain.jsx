import classNames from "classnames/bind"

import { InnerContainer, ContentContainer } from "~/components"
import styles from './FooterMain.module.scss'

const cx = classNames.bind(styles)

const FooterMain = () => {
    return (
        <>
            <div className={cx('footer-main')}>
                <InnerContainer type=''>
                    <ContentContainer title='About us'/>
                    <ContentContainer title='Contact Information' size='large'/>
                    <ContentContainer title='Connect with us'/>
                </InnerContainer>
            </div>
        </>
    )
}

export default FooterMain