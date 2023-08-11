import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CarouselRenderer } from "~/components";
import { InnerContainer, Button } from "~/components";
import { Menu } from "~/components/Popper";
import styles from "./HeaderMain.module.scss";
import images from "~/assets/images";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

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
		to: "/services",
		children: [
			{
				title: "HomeStay Design",
				to: "/services/#home-stay-design",
			},
			{
				title: "Interior Design",
				to: "/services/#interior-design",
			},
			{
				title: "Renovation",
				to: "/services/#renovation",
			},
			{
				title: "Consulting",
				to: "/services/#consulting",
			},
			{
				title: "Construction",
				to: "/services/#construction",
			},
		],
	},
	{
		title: "Project",
		to: "/project",
	},
	{
		title: "Insights",
		to: "/insights",
	},
	{
		title: "Contact",
		to: "/contact",
	},
];	

const HeaderMain = () => {

	const [toggle, setToggle] = useState(false)
	const location = useLocation();
	

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
					<span tabIndex="0" className={isRes === 0 ? "sm:flex hidden flex-1" : ""}>
						<NavComp className="nav-item" type='text' to={item.to}>
							{item.title}
						</NavComp>
					</span>
				</Comp>
			);
		});
	};

	
	

	const isHome = location.pathname === "/"; 

	const Wrapper = ({ children }) => {
		const Comp = isHome ? CarouselRenderer : "div";

		return <Comp>{children}</Comp>;
	};

	return (
		<>
			<div className={`${cx("header-main")} ${isHome ? '' : 'bg-stone-900'}`}>
				<Wrapper className={`${cx('header-main-wrapper')} ${isHome ? 'md:h-[45rem]' : ''}`}>
					<InnerContainer className=''>
						<div className=''>
							<Link to="/">
								<img className={`${isHome ? cx("logo") : ''} ${isHome ? 'h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] m-5 ml-0' : 'h-[80px] w-[80px] m-4 ml-0'}`} src={images.logo} alt="logo" />
							</Link>
						</div>
						<div className={cx("nav-bar")}>{renderItems(0)}</div>

						<div className="sm:hidden flex flex-1 justify-end items-center">
							<img 
								src={toggle ? images.close : images.menu} 
								alt="menu"
								className="w-[28px] h-[28px] object-contain"
								onClick={() => setToggle((prev) => !prev)}
							/>
						</div>

						<div
							className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-28 right-0 sm:right-[86px] mx-4 my-2
							min-w-[140px] rounded-xl sidebar z-[100]`}
						>
							<ul>
								{renderItems(1)}
							</ul>
						</div>
					</InnerContainer>				
				</Wrapper>
				{isHome && 
				<div className={`${cx('hero-gradient')} px-8 md:px-40 absolute top-[26rem] w-full`}>
					<div className='flex flex-1 flex-col min-w-[50%]'>
						<h1 className='text-white font-bold text-4xl sm:text-6xl md:text-7xl mb-[30px] sm:text-right mt-3'>MHouse</h1>
						<h2 className='text-gray-400 font-medium text-2xl sm:text-3xl sm:text-right'>Explore Your HomeStay Dream</h2>
						<div className=' my-10 sm:mt-16 flex flex-1 flex-row sm:justify-end'>
							<Button href='#home' className='h-[50px] w-[140px]' type='primary-rounded'>Get Ready</Button>
							<Button href='https://www.youtube.com/' className='h-[50px]' type='text' 
							icon={<FontAwesomeIcon icon={faCirclePlay} className='h-[30px] w-[32px]' />}>Watch Video</Button>
						</div>
					</div>
				</div>
				}
			</div>
		</>
	);
};

export default HeaderMain;
