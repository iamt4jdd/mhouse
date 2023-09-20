import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import images from "~/assets/images";

const Project = () => {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3002/project/${projectId}`).then((res) => {
      setProject(res.data);
      // console.log(res.data)
    });
  }, [projectId]);

  return (
    <div>
      {project ? (
        <>
          <div className={`md:h-[550px] px-2 md:px-24 pt-28`} 
          style={{ backgroundImage: `url(${images.plan})`}}>
            <div className='flex flex-col max-w-[650px]'>
              <h2 className='mb-4 font-bold text-xl'>OUR WORK</h2>
              <h2 className='text-7xl font-bold text-gray-800'>{project.title}</h2>
              <h2 className='mt-4 text-red-700 font-bold text-2xl uppercase'>{project.area}</h2>
            </div>
            <div className='md:absolute bottom-32 right-10 flex flex-col md:items-end'>
              <div className="mb-4 border-b-2 border-gray-400 w-[400px]">&nbsp;</div>
              <span className='text-gray-500 mb-3 text-lg font-bold'>ARTICLE</span>
              <span className='mb-3 text-base uppercase'>{project.article}</span>
            </div>
          </div>

          <div className='flex flex-1 flex-col md:flex-row mt-12'>
            <div className="flex flex-col justify-center md:w-[800px] md:h-[700px]">
              <img
                src={`http://localhost:3002/public/assets/${project.imagePath}`}
                alt={project.title}
                className="h-full w-full"
              />
            </div>
            <div className="bg-brownBlack md:w-[720px] h-[350px] md:h-[600px] py-4 sm:py-0 md:my-12">
              <div className="sm:relative sm:right-24 px-2 sm:px-20 sm:py-16 md:py-32 flex flex-col bg-brownBlack w-full h-full">
                <p className="text-gray-300 leading-6 text-lg tracking-wide mt-8">
                  {project.content}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
      
    </div>
  );
};

export default Project;
