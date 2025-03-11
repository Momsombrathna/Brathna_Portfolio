import React from "react";

const ProjectCard = ({ item }) => {
  const { img, title, description, link } = item;

  return (
    <>
      <div class=" w-full rounded-lg flex justify-center  shadow bg-indigo-800">
        <div className="flex flex-col">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <img
              class="p-2 rounded-t-lg
            w-full h-full object-cover object-center
            
            "
              src={img}
              alt={title}
            />
          </a>
          <div class="px-5 pb-2 items-center flex-col justify-center ">
            <h5 class="text-lg font-semibold text-start text-white">{title}</h5>
          </div>
          <div class="px-5 pb-5 items-center flex-col justify-center  inline-block ">
            <p class="text-sm text-start text-indigo-200 line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
