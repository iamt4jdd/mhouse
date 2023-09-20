import React, { useState, useRef } from "react";
import axios from "axios";

import { Button } from "..";

const TextField = ({ 
    title, 
    inputRef, 
    value,
    fileName,
    accept,
    event, 
    type = 'text' }) => {
  return (
    <>
      <input
        ref={inputRef}
        className="rounded border-2 p-2"
        type={type}
        accept={accept}
        filename={fileName}
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
        image : "",
        article : "",
        area : "",
        content : "",
    })
    
    const [message, setMessage] = useState(null);

    const titleRef = useRef(null)
    const imageRef = useRef(null)
    const articleRef = useRef(null)
    const areaRef = useRef(null)
    const contentRef = useRef(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const postData = new FormData();
   
        
        postData.append('title', formData.title);
        postData.append('article', formData.article);
        postData.append('area', formData.area);
        postData.append('content', formData.content);
        postData.append('image', formData.image);

        try {
            await axios.post('https://mhouse-api.onrender.com/project/', postData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            
            setMessage("Project successfully uploaded!");

            setFormData({
                title : "",
                image : "",
                article : "",
                area : "",
                content : "",
            })  

            titleRef.current.value = ""
            imageRef.current.value = ""
            articleRef.current.value = ""
            areaRef.current.value = ""
            contentRef.current.value = ""
        }
        catch (error) {
            if (error.response && error.response.data && error.response.data.message === "Cannot insert project Project already exists") {
                setMessage("Project already exists");
            } else {
                console.log('Error submitting form: ', error);
            }
        }
    }


    const handleInputChange = (e) => {

        const { value, type, name } = e.target

        if( type === "file") {
            const file = e.target.files[0];
            setFormData({
                ...formData,
                image: file,
            });
            
        } else {
            
            setFormData({
              ...formData,
              [name]: value
            });
        }
        
        //console.log(formData);
    }

    return (
        <div className="fixed top-16 left-0 w-full h-full flex items-center justify-center z-[999] px-24 md:px-52 py-24 bg-blur">
        <div className="w-full h-full bg-white rounded-sm p-12 px-24">
            <p className="text-center uppercase font-semibold text-xl mb-6">
            Post your new project here
            </p>
            {message && <div className={`${message === 'Project already exists ' ?`text-red-500` : 'text-greenMhouse'} mb-4 text-center`}>{message}</div>}
            <form className="w-full h-full" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2">
                    <div className="grid grid-row-4 gap-10 pr-16 h-80">
                    <TextField title="Title" inputRef={titleRef} value={formData.title} event={handleInputChange} />
                    <TextField title="Article" inputRef={articleRef} value={formData.article} event={handleInputChange}/>
                    <TextField title="Area" inputRef={areaRef} value={formData.area} event={handleInputChange}/>
                    <TextField title="Image" inputRef={imageRef} type="file" accept='image/*' fileName={formData.image} event={handleInputChange}/>
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
