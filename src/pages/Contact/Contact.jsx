

import { InnerContainer } from "~/components"
import { Button } from "~/components"


const ContentCol = ({children}) => {
    return (
        <div className='px-[15px] pb-[30px] w-[587.2px] flex-grow'>
            <div>
                {children}
            </div>
        </div>
    )
}

const Input = ({placehoder}) => {
    return (
        <input placeholder={placehoder} className='w-full h-[40px] mb-[15px] px-[15px] border border-gray-300 drop-shadow-md rounded-sm'></input>
    )
}



const Contact = () => {
    return (
        <>
            <InnerContainer className='py-8 md:mx-[172px]' type=''>
                <div className='min-w-full min-h-full flex flex-1'>
                    <ContentCol>
                        <h1 className='w-full mt-0'>CONTACT US</h1>
                        <p className='leading-6'>
                            Lorem ipsum <strong>"dolor sit amet"</strong> adipiscing elit. Praesent finibus lacus erat
                            <span className="text-amber-500"> Sed</span> scelerisque eleifend est, vitae euismod metus convallis vitae. 
                            Suspendisse eget ipsum nec dui accumsan consectetur. 
                        </p>
                    </ContentCol>
                    <ContentCol>
                        <Input placehoder='Full name'/>
                        <Input placehoder='Email'/>
                        <Input placehoder='Phone number'/>
                        <textarea placeholder='Main content' className='w-full h-[140px] mb-[15px] p-[15px] border border-gray-300 drop-shadow-md rounded-sm'></textarea>
                        <Button className='w-[120px] h-[40px]'>Submit</Button>
                    </ContentCol>
                </div>
            </InnerContainer>
        </>
    )
}

export default Contact