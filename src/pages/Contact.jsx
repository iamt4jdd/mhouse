import { InnerContainer } from "~/components"
import { Button } from "~/components"


const ContentCol = ({children}) => {
    return (
        <div className='sm:px-[15px] pb-[30px] sm:w-[587.2px] flex-grow'>
            <div>
                {children}
            </div>
        </div>
    )
}

const Input = ({placeholder}) => {
    return (
        <input placeholder={placeholder} className='w-full h-[40px] mb-[15px] px-[15px] border border-gray-300 shadow-inner rounded-sm'></input>
    )
}



const Contact = () => {
    return (
        <>
            <InnerContainer className='pt-28' type=''>
                <div className='min-w-full min-h-full flex flex-1 flex-col sm:flex-row'>
                    <ContentCol>
                        <h1 className='w-full mt-0'>CONTACT US</h1>
                        <p className='leading-6 my-6'>
                            Lorem ipsum <strong>"dolor sit amet"</strong> adipiscing elit. Praesent finibus lacus erat
                            <span className="text-amber-500"> Sed</span> scelerisque eleifend est, vitae euismod metus convallis vitae. 
                            Suspendisse eget ipsum nec dui accumsan consectetur. 
                        </p>
                        <p className='my-6'>
                            <span className="text-amber-500 ">MHouse <strong className='uppercase text-black'>Building Company</strong></span>
                        </p>
                        <p className='my-6'>
                            <span className='text-gray-400'><span className='text-lime-600'>|</span> Address: <span className='text-black'>Ho Chi Minh City</span></span><br />
                        </p>
                        <p className='my-6'>
                            <span className='text-gray-400'><span className='text-lime-600'>|</span> Hotline/Zalo: <strong className='text-black'>0359894512</strong></span><br />
                        </p>
                        <p className='my-6'>
                            <span className='text-gray-400'><span className='text-lime-600'>|</span> Email: <span className='text-black'>Test1234@gmail.com</span></span>
                        </p>
                    </ContentCol>
                    <ContentCol>
                        <Input placeholder='Full name'/>
                        <Input placeholder='Email'/>
                        <Input placeholder='Phone number'/>
                        <textarea placeholder='Main content' className='w-full h-[140px] mb-[15px] p-[15px] border border-gray-300 shadow-inner rounded-sm'></textarea>
                        <Button className='w-[120px] h-[40px]'>Submit</Button>
                    </ContentCol>
                </div>
            </InnerContainer>
            
        </>
    )
}

export default Contact