import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import { ContentRenderer } from "~/components"
import images from "~/assets/images"

const projectItems = [
    {
        title: "MHouse Completes Largest Public Port Project on Texas Coast",
        image: images.Building1,
        article: "News release",
        content: 'Atlanta, GA'    
    },
    {
        title: "MHouse Completes Largest Public Port Project on Texas Coast",
        image: images.Building1,
        article: "Editorial",
        content: 'Atlanta, AZ'    
    },
    {
        title: "MHouse Completes Largest Public Port Project on Texas Coast",
        image: images.Building1,
        article: "Event",
        content: 'Atlanta, KS'    
    },
    {
        title: "MHouse Completes Largest Public Port Project on Texas Coast",
        image: images.Building1,
        article: "News release",
        content: 'Atlanta, KS'    
    },
    {
        title: "MHouse Completes Largest Public Port Project on Texas Coast",
        image: images.Building1,
        article: "Editorial",
        content: 'Atlanta, KS'    
    },
    {
        title: "MHouse Completes Largest Public Port Project on Texas Coast",
        image: images.Building1,
        article: "In the News",
        content: 'Atlanta, KS'    
    },
    {
        title: "MHouse Completes Largest Public Port Project on Texas Coast",
        image: images.Building1,
        article: "News release",
        content: 'Atlanta, KS'    
    },
    {
        title: "MHouse Completes Largest Public Port Project on Texas Coast",
        image: images.Building1,
        article: "Editorial",
        content: 'Atlanta, KS'    
    },
]


const projectItems2 = [
    {
        title: "MHouse Completes Largest Public Port Project on Texas Coast",
        image: images.Building1,
        article: "News release",
        content: 'Atlanta, GA'    
    },
    {
        title: "MHouse Completes Largest Public Port Project on Texas Coast",
        image: images.Building1,
        article: "Editorial",
        content: 'Atlanta, AZ'    
    },
    {
        title: "MHouse Completes Largest Public Port Project on Texas Coast",
        image: images.Building1,
        article: "Event",
        content: 'Atlanta, KS'    
    },
    {
        title: "MHouse Completes Largest Public Port Project on Texas Coast",
        image: images.Building1,
        article: "News release",
        content: 'Atlanta, KS'    
    },
]



const Insights = () => {
    return (
        <div className='xl:flex flex-col items-center'>
            <div className='py-8 px-28 flex-col' type=''>
                <div className='flex flex-1 flex-col mb-16'>
                    <h2 className='font-semibold text-lg text-gray-600 uppercase'>Insights</h2>
                    <h1 className='font-bold mt-3 text-6xl'>ALL ARTICLES</h1>
                </div>
                <div className='flex flex-1 justify-between'>
                    <div className='flex p-4 pl-0 border-b-2 border-gray-600 w-[700px]'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-4 w-[20px] h-[20px] pt-1 text-red-600 hover:text-black'/>
                        <input type='search' placeholder="Search Insights" 
                        className='h-[30px] w-full bg-transparent outline-none 
                        placeholder:text-gray-600 placeholder:font-bold placeholder:text-2xl'/>
                    </div>
                    <div className='flex border-b-2 border-gray-600 pt-7'>
                        <select className='bg-transparent outline-none w-[200px] font-semibold'>
                            <option value="All" selected="selected">All Articles</option>
                            <option value="10">Editorial</option>
                            <option value="11">Event</option>
                            <option value="12">In the News</option><option value="13">News Release</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='flex pb-24'>
                <div className='pl-28 pr-16 py-24 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16'>
                    {projectItems.map((item, index) => (
                           <ContentRenderer key={index} image={item.image} article={item.article} 
                           title={item.title} content={item.content} type='primary'
                           />
                    ))}
                </div>
                <div className='border-l-2 border-gray-400 px-16 pb-48'>
                    <h1 className='text-2xl font-semibold uppercase mb-12'>Most Read</h1>
                    <div className='grid grids-cols-1 gap-y-20'>
                        {projectItems2.map((item, index) => (
                            <ContentRenderer  key={index} image={item.image} article={item.article} 
                            title={item.title} content={item.content} type='primary'
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='mx-28 border-b-2 border-gray-400'>&nbsp;</div>
        </div>
    )
}

export default Insights