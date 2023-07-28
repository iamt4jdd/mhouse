import classNames from "classnames/bind"

import { InnerContainer, ContentContainer, IconRenderer } from "~/components"
import styles from './FooterMain.module.scss'
import images from "~/assets/images"

const cx = classNames.bind(styles)

const FooterMain = () => {
    return (
        <>
            <div className={cx('footer-main')}>
                <InnerContainer type=''>
                    <ContentContainer title='About us' image={images.logo}/>
                    <ContentContainer title='Contact Information' size='large'>
                        <p className={cx('contact-info')}>
                            <span>Công ty TNHH Tư vấn thiết kế xây dựng <span>Haha</span></span><br />
                            <span>Địa chỉ: <span>10 Đường số 41, Bình Đông, Quận 8, TPHCM</span></span><br />
                            <br /><br />
                            <span>Tel/Zalo: <span>0327853764</span></span><br />
                            <span>Email: <span>Test1234@gmail.com</span></span>
                        </p>
                    </ContentContainer>
                    <ContentContainer title='Connect with us' icon={IconRenderer()}/>
                </InnerContainer>
            </div>
        </>
    )
}

export default FooterMain