import React, { useState, useEffect } from "react";
import { MdOutlinePerson } from "react-icons/md";
import Pic from "../assets/profile.jpg";

function About(props) {
  return (
    <>
      <section className="flex items-center flex-col justify-center mt-16">
        <div className="flex flex-row backdrop-blur shadow  px-2 py-1 rounded-lg items-center justify-center">
          <MdOutlinePerson className="text-white text-2xl" />
          <h1 className=" text-white text-xl  pl-2 font-bold">ABOUT ME</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center  justify-center gap-10">
          {/* <div className="avatar md:mt-0 mt-5">
            <img src={Pic} alt="" className=" w-full h-full rounded-full" />
          </div> */}
          <div className="avatar-container">
            <div className="avatar-glow">
              <img src={Pic} alt="profile" className="avatar-img" />
            </div>
          </div>

          <div className=" md:w-1/2 max-w-full px-3">
            <p className=" text-indigo-200 text-base">
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Hello! my name is
              <span className=" text-base text-white font-semibold">
                {" "}
                Mom Sombrathna{" "}
              </span>
              . I am a passionate and motivated
              <span className=" text-base text-white font-semibold">
                {" "}
                ITE student{" "}
              </span>
              of{" "}
              <span className=" text-base text-white font-semibold">
                {" "}
                Bachelor of Information Technology Engineering{" "}
              </span>{" "}
              at
              <span className=" text-base text-white font-semibold">
                {" "}
                Royal University of Phnom Penh{" "}
              </span>
              . I have a keen interest in
              <span className=" text-base text-white font-semibold">
                {" "}
                Web development{" "}
              </span>
              ,
              <span className=" text-base text-white font-semibold">
                {" "}
                data analysis{" "}
              </span>{" "}
              and
              <span className=" text-base text-white font-semibold">
                {" "}
                artificial intelligence{" "}
              </span>
              . I have excellent communication, teamwork and problem-solving
              skills, and I am eager to learn new technologies and apply them in
              real-world scenarios
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
