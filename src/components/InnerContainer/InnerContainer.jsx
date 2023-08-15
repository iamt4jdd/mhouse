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
            <div className={`${classes} px-3 md:px-[150px] xl:px-[250px]`} {...props}>
                {children}
            </div>
        </>
    )
}

export default InnerContainer;
