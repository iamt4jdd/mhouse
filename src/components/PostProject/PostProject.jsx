import React, { useState, useRef } from "react";
import axios from "axios";

import { Button } from "..";

const TextField = ({ title, inputRef, value, event }) => {
  return (
    <>
      <input
        ref={inputRef}
        className="rounded border-2 p-2"
        type="text"
        name={title.toLowerCase()}
        placeholder={title}
        value={value}
        onChange={event}
      />
    </>
  );
};

const PostProject = () => {

    const [formData, setFormData] = useState({
        title : "",
        imagePath : "",
        article : "",
        area : "",
        content : "",
    })
    
    const titleRef = useRef(null)
    const imagePathRef = useRef(null)
    const articleRef = useRef(null)
    const areaRef = useRef(null)
    const contentRef = useRef(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const postData = {
            title: formData.title ,
            imagePath: formData.imagePath ,
            article: formData.article ,
            area: formData.area ,
            content: formData.content ,
        }


        try {
            await axios.post('http://localhost:3002/project/', postData)
            titleRef.current.value = ""
            imagePathRef.current.value = ""
            articleRef.current.value = ""
            areaRef.current.value = ""
            contentRef.current.value = ""
        }
        catch (err) {
            console.log('Error submitting form: ', err)
        }
    }


    const handleInputChange = (e) => {
        const value = e.target.value;
        setFormData({
          ...formData,
          [e.target.name]: value
        });
      }

    return (
        <div className="fixed top-16 left-0 w-full h-full flex items-center justify-center z-[999] px-24 md:px-52 py-24 bg-blur">
        <div className="w-full h-full bg-white rounded-sm p-12 px-24">
            <p className="text-center uppercase font-semibold text-xl mb-6">
            Post your new project here
            </p>
            <form className="w-full h-full" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2">
                    <div className="grid grid-row-4 gap-10 pr-16 h-80">
                    <TextField title="Title" inputRef={titleRef} value={formData.title} event={handleInputChange} />
                    <TextField title="Article" inputRef={articleRef} value={formData.article} event={handleInputChange}/>
                    <TextField title="Area" inputRef={areaRef} value={formData.area} event={handleInputChange}/>
                    <TextField title="Image" />
                    </div>
                    <div className="flex flex-col items-stretch">
                    <textarea
                        ref={contentRef}
                        name="content"
                        type="text"
                        value={formData.content}
                        onChange={handleInputChange}
                        className="h-full border-2 resize-none rounded"
                    ></textarea>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Button
                        type="primary-non-border"
                        className="w-1/2 mt-10"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default PostProject;
