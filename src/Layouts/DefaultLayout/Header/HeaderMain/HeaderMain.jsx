import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useState } from "react";

import { InnerContainer, Button, CarouselRenderer } from "~/components";
import { Menu } from "~/components/Popper";
import styles from "./HeaderMain.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

const NAV_ITEM = [
	{
		title: "Home",
		to: "/",
	},
	{
		title: "About Us",
		to: "/about-us",
	},
	{
		title: "Services",
		children: [
			{
				title: "Interior Design",
				to: "/project/interior-design",
			},
			{
				title: "Apartment",
				to: "/project/apartment",
			},
			{
				title: "Construction",
				to: "/project/construction",
			},
		],
	},
	{
		title: "Project",
		to: "/project",
	},
	{
		title: "News",
		to: "/news",
	},
	{
		title: "Contact",
		to: "/contact",
	},
];	

const HeaderMain = () => {

	const [toggle, setToggle] = useState(false)


	const renderItems = (isRes) => {
		return NAV_ITEM.map((item, index) => {

			let Comp = "div";
			let NavComp = Link;
			if (item.children) {
				Comp = Menu;
			}
			if (isRes === 0) {
				NavComp = Button
			}

			return (
				<Comp key={index} items={item.children}>
					<span tabIndex="0" className={isRes === 0 ? "md:flex hidden flex-1" : ""}>
						<NavComp className="nav-item" type="text" to={item.to}>
							{item.title}
						</NavComp>
					</span>
				</Comp>
			);
		});
	};

	return (
		<>
			<div className={cx("header-main")}>
				
				<CarouselRenderer>
					<InnerContainer>
						<div>
							<Link to="/">
								<img className={`${cx("logo")} h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] m-5`} src={images.logo} alt="logo" />
							</Link>
						</div>
						<div className={cx("nav-bar")}>{renderItems(0)}</div>

						<div className="md:hidden flex flex-1 justify-end items-center">
							<img 
								src={toggle ? images.close : images.menu} 
								alt="menu"
								className="w-[28px] h-[28px] object-contain"
								onClick={() => setToggle((prev) => !prev)}
							/>
						</div>

						<div
							className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 sm:right-[86px] mx-4 my-2
							min-w-[140px] rounded-xl sidebar`}
						>
							<ul>
								{renderItems(1)}
							</ul>
						</div>
					</InnerContainer>
				</CarouselRenderer>
			</div>
		</>
	);
};

export default HeaderMain;
