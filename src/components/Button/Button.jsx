import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)


const Button = ({
    href,
    to,
    type = 'primary',
    size = 'medium',
    children,
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
    
    if(to){
        props.to = to
        Comp = Link
    } else if (href) {
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
                <span className={cx('title')}>{children}</span>
                {image && <img src={image} alt="" className={cx('image')}/>}
                {icon && <span className={cx('icon')}>{icon}</span>}
            </Comp>
        </>
    )

}

export default Button