import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Button, InnerContainer } from "~/components"
import images from "~/assets/images"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"


const Container = ({children, className}) => {

    return (
        <div className={`${className} flex flex-1 flex-col sm:flex-row`}>
            {children}
        </div>
    )
}

const Home = () => {
    return (
        <>
            
            <section id='Home'>
               <div className=''>
                    <Container className='md:px-20 pt-24 sm:pb-24'>
                        <div className='relative md:left-14 xl:left-32 p-8 flex flex-col justify-center max-w-[750px]'>
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
                        
                        <div className='relative md:left-32 xl:left-96 w-[500px]'>
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
                            <div className='relative sm:right-24 sm:px-20 sm:py-16 md:py-32 flex flex-col bg-brownBlack w-full h-full'>
                                <h2 className='text-white font-medium text-2xl sm:text-4xl xl:text-7xl'>A TRUSTED,<br/> COLLABORATIVE PARTNER<br/>
                                <strong>FOCUSED ON YOUR GOALS</strong>
                                </h2>
                                <p className='text-gray-300 leading-6 text-lg tracking-wide mt-8'>From our industry-leading approaches to safety and quality, 
                                    to our passion for progressive delivery, innovation and technology, 
                                    we deliver certainty by focusing on what matters to you.
                                </p>
                                <div className='my-10 sm:mt-10 flex'>
                                    <Button to='/services' className='hover-add-swipe' type='primary-non-border'>Our Services</Button>
                                </div>
                            </div>
                        </div>
                    </Container>

                    <Container className='py-24'>
                        <InnerContainer className='flex flex-1'>
                            <div className='flex flex-1 flex-row justify-between'>
                                <h2 className='uppercase text-3xl font-medium'>Recent Insights</h2>
                                <div className='flex'>
                                    <Button className='uppercase mr-[32px]' type='primary-non-border'>All Insights</Button>
                                    <ul className='flex align-middle'>
                                        <li className='mr-2'><Button type='scroll' icon={<FontAwesomeIcon icon={faChevronLeft} />} /></li>
                                        <li><Button type='scroll' icon={<FontAwesomeIcon icon={faChevronRight} />} /></li>
                                    </ul>
                                </div>
                            </div>
                        </InnerContainer>
                    </Container>

               </div>
            </section>
        </>
    )
}

export default Home