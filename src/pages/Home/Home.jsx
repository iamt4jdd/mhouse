import { Button } from "~/components"
import images from "~/assets/images"

const Home = () => {
    return (
        <>
            
            <section id='Home'>
                <div className='bg-gray-200 bg-opacity-100 min-w-full min-h-full flex flex-1 md:px-20 py-24'>
                    <div className='relative left-16 flex flex-col justify-center max-w-[821px]'>
                        <h2 className='font-medium uppercase text-8xl sm:text-7xl tracking-wide'>
                            <strong>We Love to build.</strong>
                            <br/>
                            It's Who We Are And What We Do.
                        </h2>
                        <p className='mt-10 max-w-[500px] text-lg text-gray-700'>
                            Together, we overcome the toughest challenges and maximize outcomes for our clients, 
                            workforce, communities and families.
                        </p>
                        <div className=' my-10 sm:mt-10 flex flex-row'>
                            <Button to='/about-us' className='hover-add-swipe' type='primary-red'>ABOUT MHouse</Button>
                        </div>
                    </div>
                    
                    <div className='relative left-28 w-[500px]'>
                        <div className='grid grid-rows-3 grid-flow-col gap-4 '>
                            <img src={images.Building2} alt="" className='row-span-3' />
                            <img src={images.Building1} alt="" className='' />
                            <img src={images.Building3} alt="" className='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home