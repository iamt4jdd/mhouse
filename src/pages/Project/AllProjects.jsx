import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";


import { InnerContainer, ContentRenderer, Button, PostProject } from "~/components";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/images";

const CONSTANT_ITEM = [
  {
    id: "project1",
    title: "Tranquil Haven Homestay: Your Gateway to Serenity",
    imagePath: images.interior3,
    area: "ATLANTA, GA",
    article: "NEW RELEASE",
    content: "Welcome to Tranquil Haven Homestay, where comfort meets nature in perfect harmony. Nestled amidst lush greenery, our homestay offers a haven of peace and tranquility for weary souls seeking a break from the hustle and bustle of city life. Whether you're a solo traveler, a couple seeking a romantic escape, or a family in search of quality time together, Tranquil Haven Homestay promises an unforgettable experience. At Tranquil Haven, we believe in creating a home away from home. Our homestay is family-owned and operated, and we take pride in providing personalized service to our guests. With a deep understanding of the local culture and a passion for hospitality, we aim to make your stay with us a memorable one."
  },
  {
    id: "project2",
    title: "Seaside Serenity Homestay: Where Waves Meet Warmth",
    imagePath: images.interior3,
    area: "MANHATTAN, KS",
    article: "HOUSING",
    content: "Seaside Serenity is more than just a homestay; it's an experience crafted with love and care. As a family-owned establishment, we pour our hearts into ensuring every guest feels like a cherished member of our extended family. With a passion for seaside living and a commitment to warm hospitality, we promise an unforgettable stay. Nestled along the picturesque coastline, our homestay offers a tranquil escape for those seeking solace in the embrace of the sea. Whether you're a beach lover, a family in search of seaside adventures, or a traveler in pursuit of coastal calm, Seaside Serenity Homestay is your gateway to a rejuvenating retreat."
  },
  {
    id: "project3",
    title: "Mountain Majesty Retreat: Where Peaks Embrace Tranquility",
    imagePath: images.interior3,
    area: "TORRANCE, CA",
    article: "NATURE",
    content: "Discover Mountain Majesty Retreat, an idyllic haven nestled in the embrace of majestic peaks. Here, the air is crisp, the scenery breathtaking, and the atmosphere serene. Whether you're an avid adventurer, a couple seeking a romantic escape, or a family in search of mountain magic, our retreat promises an experience that will leave you refreshed and rejuvenated. Mountain Majesty is more than just a place to rest; it's a gateway to nature's grandeur. As a family-operated retreat, we take pride in providing warm, personalized service to every guest. Our passion for the mountains and commitment to genuine hospitality are the cornerstones of your unforgettable stay."
  },
]


const AllProjects = () => {

  const [projectList, setProjectList] = useState([])
  
  const [access, setAccess] = useState(false)
  const [password, setPassword] = useState('')
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {


    axios
    .get(`https://mhouse-api.onrender.com/project/`)
    .then((res) => {
      setProjectList(res.data);
    })



    const handleEsc = (event) => {
        if (event.keyCode === 27) { 
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
          {projectList ?
            projectList.map((item) => (
              <Link
                key={item._id}
                to={`/project/${item._id}`}
              >
                <ContentRenderer
                  image={`https://mhouse-api.onrender.com/public/assets/${item.imagePath}`}
                  article={item.article}
                  title={item.title}
                  area={item.area}
                  type="primary"
                />
              </Link>
            ))
            :
            CONSTANT_ITEM.map((item) => (
              <Link
                key={item._id}
                to={`/project/${item._id}`}
              >
                <ContentRenderer
                  image={item.imagePath}
                  article={item.article}
                  title={item.title}
                  area={item.area}
                  type="primary"
                />
              </Link>
            ))
        }
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
                <p className='text-center uppercase font-semibold text-sm mb-2'>You must enter password to upload project</p>
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

export default AllProjects;



