import classNames from "classnames/bind";


import styles from './InnerContainer.module.scss'


const cx = classNames.bind(styles);

const InnerContainer = ({ 
    children,
    type = 'primary',
    className,
    ...passProps 
}) => {

    const props = {
        ...passProps
    }

    const classes = cx('inner-container', {
        [className]: className,
        [type]: type,
    })

    
    return (
        <>
            <div className={`${classes} md:mx[172px]`} {...props}>
                {children}
            </div>
        </>
    )
}

export default InnerContainer;
