import React from "react";

const ContentRenderer = ({image, area, title, content, type , className}) => {
  return (
    <div className={`${className} flex items-stretch`}>
      <div className="w-full">
        <div className="w-full">
          <img className="w-full h-[242px]" src={image} alt="Icon People" />
        </div>
        {type === "primary" && (
          <>
            <div className="my-4 font-medium text-red-900 text-base uppercase">
              <p className="">{area}</p>
            </div>
            <div className="my-4 font-bold text-xl">
              <h3 className="">{title}</h3>
            </div>
            <div className="font-light text-gray-600">
              <p className="">{content}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentRenderer;
