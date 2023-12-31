import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

import { Button, SliderRenderer } from "~/components"
import images from "~/assets/images"


const Container = ({children, className, type='primary'}) => {

    return (
        <div className={`${className} flex flex-1  ${type==='col' ? 'flex-col' : 'flex-col sm:flex-row'}`}>
            {children}
        </div>
    )
}

const Home = () => {

    const [sliderRef, setSliderRef] = useState(null);

    return (
        <>
            
            <section id='home'>
               <div className='xl:flex xl:flex-col xl:justify-center xl:items-center'>
                    <Container className='xl:w-[1500px] md:px-20 xl:px-0 pt-24 sm:pb-24 xl:flex xl:justify-between'>
                        <div className='relative p-8 flex flex-col justify-center max-w-[750px]'>
                            <h2 className='font-medium uppercase text-xl sm:text-3xl md:text-5xl tracking-wide'>
                                <strong className='text-3xl sm:text-5xl md:text-7xl'>We Love to build.</strong>
                                <br/>
                                <div className='mt-4'>It's Who We Are And <br/>What We Do.</div>
                            </h2>
                            <p className='mt-10 max-w-[500px] text-lg text-gray-700'>
                                Together, we overcome the toughest challenges and maximize outcomes for our clients, 
                                workforce, communities and families.
                            </p>
                            <div className='my-10 sm:mt-10 flex flex-row'>
                                <Button to='/about-us' className='hover-add-swipe' type='primary-non-border'>ABOUT MHouse</Button>
                            </div>
                        </div>
                        
                        <div className='relative md:left-32 xl:left-0 w-[500px]'>
                            <div className='grid grid-rows-2 grid-flow-col gap-3'>
                                <img src={images.Building7} alt="Building" className='row-span-3' />
                                <img src={images.Building2} alt="Building" className='' />
                                <img src={images.Building14} alt="Building" className='w-full max-h-[150px]' />
                            </div>
                            <div className='relative sm:bottom-10 md:bottom-20 hidden sm:grid'>
                                <img src={images.Building12} alt="Building" className='row-span-3 h-[200px] w-[550px]' />
                            </div>
                        </div>
                    </Container>

                    <Container className='pb-24'>
                        <div className='flex flex-col justify-center md:w-[800px] md:h-[700px]'>
                            <img src={images.Building22} alt="Building" className='h-full w-full' />
                        </div>
                        <div className='bg-brownBlack md:w-[720px] md:h-[600px] py-4 sm:py-0 sm:my-12'>
                            <div className='relative sm:right-24 px-2 sm:px-20 sm:py-16 md:py-32 flex flex-col bg-brownBlack w-full h-full'>
                                <h2 className='text-white font-medium text-2xl sm:text-4xl'>A TRUSTED,<br/> COLLABORATIVE PARTNER<br/>
                                <strong>FOCUSED ON YOUR GOALS</strong>
                                </h2>
                                <p className='text-gray-300 leading-6 text-lg tracking-wide mt-8'>From our industry-leading approaches to safety and quality, 
                                    to our passion for progressive delivery, innovation and technology, 
                                    we deliver certainty by focusing on what matters to you.
                                </p>
                                <div className='my-10 sm:mt-10 flex'>
                                    <Button to='/services/home-stay-design' className='hover-add-swipe' type='primary-non-border'>Our Services</Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                    
                    <Container type='col' className='md:py-12 items-center'>
                        <h1 className='uppercase font-bold text-3xl my-3'>If you can <span className='text-red-400'>dream</span> it</h1>
                        <h1 className='uppercase font-bold text-3xl my-3'>We can <span className='text-amber-800'>build</span> it</h1>
                        <h1 className='uppercase font-medium text-4xl text-center'>Make your <strong>HomeStay Dream</strong> come true <br/>with <strong className='text-greenMhouse'>MHouse</strong></h1>
                        <p className='text-center'>With MHouse, your vision for the perfect home becomes a reality. 
                        Our expert team is dedicated to turning<br/> your dreams into a beautifully crafted and functional 
                        homestay that exceeds your expectations.</p>
                    </Container>

                    <Container type='col' className='pt-24 md:pb-24'>
                        <div className='flex flex-1 mb-10 px-3 md:px-[150px] xl:px-0'>
                            <div className='flex flex-1 flex-col sm:flex-row justify-between'>
                                <h2 className='uppercase mb-3 text-3xl font-medium'>Recent Insights</h2>
                                <div className='flex'>
                                    <Button to='/insights' className='uppercase w-36 mr-28 sm:mr-[32px]' type='primary-non-border' >All Insights</Button>
                                    <ul className='flex align-middle'>
                                        <li className='mr-2'>
                                            <Button type='scroll' 
                                                icon={<FontAwesomeIcon icon={faChevronLeft} />} 
                                                onClick={sliderRef?.slickPrev}
                                            />
                                        </li>
                                        <li>
                                            <Button type='scroll' 
                                                icon={<FontAwesomeIcon icon={faChevronRight} />}
                                                onClick={sliderRef?.slickNext}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <SliderRenderer setSliderRef={setSliderRef} 
                            listSlider =
                            {[
                                {
                                title: "MHouse Completes Largest Public Port Project on Texas Coast",
                                image: images.Building1,
                                area: "News release",
                                content:
                                    "MHouse, a renowned construction firm, achieves a milestone with the completion of Texas Coast's largest public port project. This feat solidifies their reputation for excellence in maritime infrastructure. ",
                                },
                                {
                                title: "Challenges and Opportunities of Water in Houston",
                                image: images.Building2,
                                area: "News release",
                                content:
                                    "Houston grapples with water scarcity, aging infrastructure. Innovation, conservation crucial. Investment in sustainable solutions promises a resilient, thriving future.",
                                },
                                {
                                title: "MHouse Completes Barbours Cut Terminal Container Yard 3N",
                                image: images.Building3,
                                area: "Insights",
                                content:
                                    "MHouse triumphs with the successful completion of Barbours Cut Terminal Container Yard 3N, bolstering Texas' maritime capabilities and efficiency.",
                                },
                                {
                                title: "MHouse Awarded Texas Port Construction Contracts",
                                image: images.Building4,
                                area: "News release",
                                content:
                                    "MHouse secures pivotal port construction contracts in Texas, fortifying their position as leaders in maritime infrastructure development and innovation.",
                                },
                                {
                                title: "New Craft Workforce Center in Chandler, Ariz. Unveiled",
                                image: images.Building5,
                                area: "News release",
                                content:
                                    "Chandler, Arizona welcomes a state-of-the-art Craft Workforce Center, boosting vocational training and skills development for the region's workforce.",
                                },
                                {
                                title: "MHouse Designed and Constructed Building in Chandler",
                                image: images.Building6,
                                area: "News release",
                                content:
                                    "MHouse excels with the design and construction of a cutting-edge building in Chandler, showcasing their expertise in architectural innovation.",
                                },
                            ]}
                        />
                    </Container>

               </div>
            </section>
        </>
    )
}

export default Home