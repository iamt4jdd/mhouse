import { Button } from "~/components"
import images from "~/assets/images"


const Container = ({children}) => {
    return (
        <div className='flex flex-1 flex-col sm:flex-row md:px-20 py-24'>
            {children}
        </div>
    )
}

const Home = () => {
    return (
        <>
            
            <section id='Home'>
               <div className=''>
                    <Container>
                        <div className='relative md:left-16 flex flex-col justify-center max-w-[750px]'>
                            <h2 className='font-medium uppercase text-3xl sm:text-5xl md:text-7xl tracking-wide'>
                                <strong>We Love to build.</strong>
                                <br/>
                                It's Who We Are And What We Do.
                            </h2>
                            <p className='mt-10 max-w-[500px] text-lg text-gray-700'>
                                Together, we overcome the toughest challenges and maximize outcomes for our clients, 
                                workforce, communities and families.
                            </p>
                            <div className='my-10 sm:mt-10 flex flex-row'>
                                <Button to='/about-us' className='hover-add-swipe' type='primary-red'>ABOUT MHouse</Button>
                            </div>
                        </div>
                        
                        <div className='relative md:left-32 w-[500px]'>
                            <div className='grid grid-rows-2 grid-flow-col gap-3'>
                                <img src={images.Building7} alt="Building" className='row-span-3' />
                                <img src={images.Building2} alt="Building" className='' />
                                <img src={images.Building14} alt="Building" className='w-full' />
                            </div>
                            <div className='relative sm:bottom-10 md:bottom-20 hidden sm:grid max-w-[550px]'>
                                <img src={images.Building12} alt="Building" className='row-span-3 h-[200px] w-[550px]' />
                            </div>
                        </div>
                    </Container>

                    <Container>
                        
                    </Container>

               </div>
            </section>
        </>
    )
}

export default Home