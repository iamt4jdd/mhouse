import classNames from "classnames/bind";

import styles from './Menu.module.scss'
import { Button } from "~/components";
const cx = classNames.bind(styles);


const MenuItem = ({ data }) => {

  

    return (
        <>
            <Button className={cx('menu-item')} icon={data.icon} to={data.to} type='text'>
                {data.title}
            </Button>
        </>
    )

}

export default MenuItem
