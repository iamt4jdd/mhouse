import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import { InnerContainer, ContentRenderer, Button, PostProject } from "~/components";
import images from "~/assets/images";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const projectItems = [
  {
    title: "MHouse Completes Largest Public Port Project on Texas Coast",
    image: images.Building1,
    article: "News release",
    area: "Atlanta, GA",
    content: "asdasdasdsahfsjkdflghsldkfhgdskfghsdklfghsdklfgd",
  },
  {
    title: "MHouse Completes Largest Public Port Project on Texas Coast",
    image: images.Building1,
    article: "Editorial",
    area: "Atlanta, AZ",
    content: "asdasdasdsahfsjkdflghsldkfhgdskfghsdklfghsdklfgd",
  },
  {
    title: "MHouse Completes Largest Public Port Project on Texas Coast",
    image: images.Building1,
    article: "Event",
    area: "Atlanta, KS",
    content: "asdasdasdsahfsjkdflghsldkfhgdskfghsdklfghsdklfgd",
  },
  {
    title: "MHouse Completes Largest Public Port Project on Texas Coast",
    image: images.Building1,
    article: "News release",
    area: "Atlanta, KS",
    content: "asdasdasdsahfsjkdflghsldkfhgdskfghsdklfghsdklfgd",
  },
  {
    title: "MHouse Completes Largest Public Port Project on Texas Coast",
    image: images.Building1,
    article: "Editorial",
    area: "Atlanta, KS",
    content: "asdasdasdsahfsjkdflghsldkfhgdskfghsdklfghsdklfgd",
  },
  {
    title: "MHouse Completes Largest Public Port Project on Texas Coast",
    image: images.Building1,
    article: "In the News",
    area: "Atlanta, KS",
    content: "asdasdasdsahfsjkdflghsldkfhgdskfghsdklfghsdklfgd",
  },
  {
    title: "MHouse Completes Largest Public Port Project on Texas Coast",
    image: images.Building1,
    article: "News release",
    area: "Atlanta, KS",
    content: "asdasdasdsahfsjkdflghsldkfhgdskfghsdklfghsdklfgd",
  },
  {
    title: "MHouse Completes Largest Public Port Project on Texas Coast",
    image: images.Building1,
    article: "Editorial",
    area: "Atlanta, KS",
    content: "asdasdasdsahfsjkdflghsldkfhgdskfghsdklfghsdklfgd",
  },
  {
    title: "MHouse Completes Largest Public Port Project on Texas Coast",
    image: images.Building1,
    article: "Event",
    area: "Atlanta, KS",
    content: "asdasdasdsahfsjkdflghsldkfhgdskfghsdklfghsdklfgd",
  },
];




const Project = () => {

  const [access, setAccess] = useState(false)
  const [password, setPassword] = useState('')
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const handleEsc = (event) => {
        if (event.keyCode === 27) { // 27 is the keyCode for "Esc"
          setAccess(false)  
          setShowForm(false)
        }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
        window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  }


  return (
    <>
      <InnerContainer className="py-8 flex-col" type="">
        <div className="min-w-full min-h-full flex flex-1 justify-between">
          <h1 className="font-bold my-8">ALL PROJECTS</h1>
          <div className="my-8">
            <Button
              type="primary-non-border"
              onClick={() => {
                setAccess(true);
              }}
            >
              Add Project
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {projectItems.map((item, index) => (
            <ContentRenderer
              key={index}
              image={item.image}
              article={item.article}
              title={item.title}
              area={item.area}
              type="primary"
            />
          ))}
        </div>
      </InnerContainer>


      {(showForm || access) && (
        <div className='fixed top-32 right-0 md:right-8 z-[1000]'>
          <Button type='text' icon={<FontAwesomeIcon icon={faXmark} className='text-2xl' />} onClick={() => {
            setShowForm(false);
            setAccess(false);
            setPassword('');
          }}/>
        </div>
      )}


      {access && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-[999] px-10 sm:p-28 bg-blur'>
          <div className=' flex flex-col items-center bg-white w-96 h-40 sm:h-36 p-4 rounded-sm'>
            <form>
                <p className='text-center uppercase font-semibold text-sm mb-2'>You must enter password to post project</p>
                <input
                  className="border-2 border-sky-500 w-full rounded h-10 mb-2 p-2"
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={handleInputChange}
                />
            </form>
            <Button 
              type='primary-non-border' 
              onClick={() => {
                    if(password === '123456') {
                      setShowForm(true);
                      setAccess(false);
                      setPassword('');
                    }
              }}
            >
                Submit
            </Button>
          </div>
        </div>
      )}
      
      {showForm && <PostProject/>}

    </>
  );
};

export default Project;
