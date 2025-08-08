import React, { useRef } from "react";
import Nav from "../components/Nav";
import Detail from "../pages/Detail";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Contact from "../pages/Contact";
import Project from "../pages/Project";

const Home = () => {
  // create a ref for each component
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  // create a function that takes a ref and scrolls to it
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Background area with animated circles */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/* Main content */}
      <div className="fixed-content">
        <Nav
          // pass the scrollToRef function and the refs as props to the Nav component
          scrollToRef={scrollToRef}
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillRef={skillRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
        <main className="flex flex-col items-center justify-center w-full">
          <div ref={homeRef} className="w-full">
            <Detail />
          </div>
          <div ref={aboutRef} className="w-full mt-16">
            <About />
          </div>
          <div ref={skillRef} className="w-full mt-16">
            <Skill />
          </div>
          <div ref={projectRef} className="w-full mt-16 px-5 md:px-10">
            <Project />
          </div>
          <div ref={contactRef} className="w-full">
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
