

import { InnerContainer } from "~/components"
import images from "~/assets/images"


const ContentRenderer = ({children}) => {
    return (
        <div className='content-wrapper py-[30px]'>
            <InnerContainer className='py-8 flex-col sm:flex-row sm:px-[50px] md:px-0' type=''>
                {children}
            </InnerContainer>
        </div>
    )
}

const TextField = ({children}) => {
    return (
        <p className="text-justify font-medium text-lg my-6">
            {children}
        </p>
    )
}

const AboutUs = () => {
    return (
        <>
            <div className='wrapper bg-stale-300'>
                <ContentRenderer>
                    <div className='flex flex-1 flex-col flex-grow justify-center p-6 min-w-[50%]'>
                        <h2 className='font-medium text-2xl sm:text-4xl '>
                            WELCOME TO 
                            <span className="relative bottom-1 text-gray-400"> | </span><span className='text-amber-500'>MHouse</span>
                        </h2>
                        <TextField>
                            At <span className='text-amber-500'>MHouse</span>, chúng tôi tự hào là một công ty chuyên về thiết kế và xây dựng homestay.
                        </TextField>
                        <TextField>
                            Đam mê của chúng tôi nằm trong việc tạo ra những không gian độc đáo và đáng nhớ, 
                            <strong> phù hợp với sở thích và nhu cầu của bạn</strong>.
                        </TextField>
                        <TextField>
                            Với đội ngũ <strong>chuyên nghiệp và nhiệt huyết</strong>, 
                            chúng tôi cam kết mang đến những homestay xuất sắc kết hợp giữa sự thoải mái, 
                            thẩm mỹ và tính ứng dụng hoàn hảo.
                        </TextField>
                    </div>
                    <div className='flex-grow min-w-[50%]'>
                        <img src={images.heroImg} alt='hero' className='animate-bounce-custom z-0'></img>
                    </div>
                </ContentRenderer>
                <ContentRenderer>
                    <div className='flex flex-1 flex-col flex-grow justify-center min-w-[50%]'>
                        <h2 className='text-gray-400 font-medium text-2xl sm:text-4xl'>Tại sao chọn MHouse</h2>	
                    </div>
                    <div className='flex-grow min-w-[50%]'>
                        <img src={images.heroImg} alt='hero' className='animate-bounce-custom z-0'></img>
                    </div>
                </ContentRenderer>
                <ContentRenderer>
                    <div className='flex flex-1 flex-col flex-grow justify-center min-w-[50%]'>
                        <h2 className='text-gray-400 font-medium text-2xl sm:text-4xl'>Explore Your HomeStay Dream</h2>	
                    </div>
                    <div className='flex-grow min-w-[50%]'>
                        <img src={images.heroImg} alt='hero' className='animate-bounce-custom z-0'></img>
                    </div>
                </ContentRenderer>
            </div>
            
            
        </>
    )
}

export default AboutUs