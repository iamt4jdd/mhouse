import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);


const Menu = ({children, items=[]}) => {

    const renderItems = () => {
       return items.map( (item, index) => 
            <li key={index} className={cx('list-item')}><MenuItem data={item}/></li>);
    }

    return (
        <>
            <Tippy
                interactive
                delay={[0, 1000]}
                placement='bottom-start'
                render={attrs => (
                    <div className={`${cx('menu-list')}`} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <ul>
                                {renderItems()}
                            </ul>
                        </PopperWrapper>
                    </div>
                )}
            >
                 {children}
            </Tippy>
        </>
    )

}

export default Menu
