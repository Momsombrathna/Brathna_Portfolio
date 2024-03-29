import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Detail(props) {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center mt-28">
        <div className="App">
          <p className="text-4xl  text-indigo-300 font-bold">
            {" "}
            <span className="text-reveal text-2xl md:text-5xl text-white  inline-block overflow-hidden whitespace-nowrap animate-reveal">
              Hi my name is
            </span>{" "}
            BraThna
          </p>
          <h1 className="text-4xl mt-3 text-indigo-300 font-bold">
            I am{" "}
            <span className="text-reveal text-2xl md:text-5xl text-white   inline-block overflow-hidden whitespace-nowrap animate-reveal">
              A Web Developer
            </span>{" "}
          </h1>
          <p className="text-lg md:text-2xl mt-3 text-indigo-300  font-bold">
            {" "}
            <span className="text-lg md:text-2xl text-white"> from </span>Royal
            University of Phnom Penh.
          </p>

          <Link to="/resume" className="flex justify-center items-center">
            <button
              type="button"
              class="text-white bg-gradient-to-r flex justify-center items-center from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2 text-center shadow-lg mt-3"
            >
              <div className="flex flex-row gap-2">
                <p className=" font-bold text-md">Resume</p>
                <FaArrowUpRightFromSquare size={"1rem"} />
              </div>
            </button>
          </Link>
        </div>
        <div>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: require("../assets/picture2.json"),
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </div>
      </section>
    </>
  );
}

export default Detail;
