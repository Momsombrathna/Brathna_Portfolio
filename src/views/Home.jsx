import React, { useRef, useEffect} from 'react';
import Nav from '../components/Nav';
import Detail from '../pages/Detail';
import About from '../pages/About';
import Skill from '../pages/Skill';
import Contact from '../pages/Contact'; 
import Project from '../pages/Project';

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

  // use useEffect to scroll to the home component on mount
  useEffect(() => {
    scrollToRef(homeRef);
  }, []);

  return (
    <>
      <div className="area fixed-content">
        <Nav
          // pass the scrollToRef function and the refs as props to the Nav component
          scrollToRef={scrollToRef}
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillRef={skillRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
        <main className="flex flex-col items-center justify-center px-2 md:px-0">
          <ul>
            {/* add the ref attribute to each component */}
            <li ref={homeRef}>
              {" "}
              <Detail />{" "}
            </li>
            <li ref={aboutRef}>
              {" "}
              <About />{" "}
            </li>
            <li ref={skillRef}>
              {" "}
              <Skill />{" "}
            </li>
            <li ref={projectRef}>
              {" "}
              <Project />{" "}
            </li>
            <li ref={contactRef}>
              {" "}
              <Contact />{" "}
            </li>
          </ul>
        </main>
        <ul className="circles max-h-screen">
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
    </>
  );
};

export default Home;