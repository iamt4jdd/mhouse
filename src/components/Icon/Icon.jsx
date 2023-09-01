import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
    title,
    onClick,
    iconClassName,
    ...passProps
}) => {

    let Comp = 'button'


    const props = {
        onClick,
        ...passProps
    }

    if( type === 'normal' ) {
        Comp = 'div'
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

    const iconClasses = cx('icon', {
        [iconClassName]: iconClassName,
    })

    return (
        <>
            <Comp className={classes} {...props}>
                {image && <img src={image} alt="" className={cx('image')}/>}
                {icon && <div className={iconClasses}>{<FontAwesomeIcon icon={icon} className={`${type === 'normal' ? 'h-[90px] w-[90px]' : ''}`}/>}</div>}
                {title && <h1 className='mt-4 font-semibold text-2xl'>{title}</h1>}
            </Comp>
        </>
    )

}

export default Icon