import classNames from "classnames/bind";
import styles from "./HeaderTop.module.scss";

import { InnerContainer, IconRenderer } from "~/components";

const cx = classNames.bind(styles);

const HeaderTop = () => {
	return (
		<>
			<div className={`${cx("gradient__bg")}`}>
				<InnerContainer>
					<span className={`${cx("hot-line")} sm:justify-self-start`}>
						HOTLINE | <strong>0327 853 764</strong>
					</span>
					<div className={`${cx("top-nav-bar")} md:px-[5px] md:mr-[5px]`}>
						<IconRenderer />
					</div>
				</InnerContainer>
			</div>
		</>
	);
};

export default HeaderTop;
