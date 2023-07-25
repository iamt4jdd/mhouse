
import classNames from 'classnames/bind'
import styles from './Icon.module.scss'

const cx = classNames.bind(styles)


const Icon = ({
    href,
    type = 'primary',
    size = 'medium',
    className,
    icon,
    image,
    onClick,
    ...passProps
}) => {

    let Comp = 'button'


    const props = {
        onClick,
        ...passProps
    }

    if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        [type]: type,
        [size]: size,
    })

    return (
        <>
            <Comp className={classes} {...props}>
                {image && <img src={image} alt="" className={cx('image')}/>}
                {icon && <span className={cx('icon')}>{icon}</span>}
            </Comp>
        </>
    )

}

export default Icon