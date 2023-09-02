
import { InnerContainer, ContentRenderer } from "~/components"
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
    {
        title: "MHouse Completes Largest Public Port Project on Texas Coast",
        image: images.Building1,
        article: "Event",
        content: 'Atlanta, KS'    
    },
]



const Project = () => {
    return (
        <>
            <InnerContainer className='py-8 flex-col' type=''>
                <div className='min-w-full min-h-full flex flex-1 justify-between'>
                    <h1 className='font-bold'>ALL PROJECTS</h1>
                    {/* <div className='my-8'>Filters</div> */}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16'>
                    {projectItems.map((item, index) => (
                           <ContentRenderer key={index} image={item.image} article={item.article} 
                           title={item.title} content={item.content} type='primary'
                           />
                    ))}
                </div>
            </InnerContainer>
        </>
    )
}

export default Project