import classNames from 'classnames/bind'


import styles from './ContentContainer.module.scss'


const cx = classNames.bind(styles)

const ContentContainer = ({
    children,
    title,
    type = 'primary',
    size = 'medium',
    image,
    icon,
    className,
    ...passProps
}) => {

    const props = {
        ...passProps
    }

    const classes = cx('content-container', {
        [className]: className,
        [type]: type,
        [size]: size,
    })


    return (
        <>
            <div className={classes} {...props}>
                <div className={cx('wrapper')}>
                    {type === 'primary' && 
                    <>
                        <div className={cx('title')}><span>{title}</span></div>
                        <div className={cx('section-break')}><span>&nbsp;</span></div>
                        {image && <div className={cx('image')}><img src={image} alt=""/></div>}
                        {icon && <div className={cx('icon')}>{icon}</div>}
                        {children}
                    </>
                    }
                </div>
            </div>
        </>
    )
}

export default ContentContainer
