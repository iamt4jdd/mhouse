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
                        {image && <img src={image} alt="" className={cx('image')}/>}
                        {icon && <span className={cx('icon')}>{icon}</span>}
                    </>
                    }
                </div>
            </div>
        </>
    )
}

export default ContentContainer
