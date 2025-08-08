import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Logo from "../assets/logo.png";

function Nav(props) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // define a function that will close the navbar
  const closeNav = () => {
    setOpenNav(false);
  };

  // destructure the props
  const { scrollToRef, homeRef, aboutRef, skillRef, projectRef, contactRef } =
    props;

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row  lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-sans text-lg"
        // pass the closeNav function as a prop
        closeNav={closeNav}
      >
        <a
          href="#"
          className="flex text-white hover:underline md:p-0 p-2 px-2 md:px-2  rounded-2xl items-center"
        >
          <button
            onClick={() => {
              scrollToRef(homeRef);
              closeNav();
            }}
          >
            Home
          </button>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-sans text-lg"
        // pass the closeNav function as a prop
        closeNav={closeNav}
      >
        <a
          href="#"
          className="flex text-white hover:underline  md:p-0 p-2  px-2 md:px-2 rounded-2xl  items-center"
        >
          <button
            onClick={() => {
              scrollToRef(aboutRef);
              closeNav();
            }}
          >
            About
          </button>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-sans text-lg"
        // pass the closeNav function as a prop
        closeNav={closeNav}
      >
        <a
          href="#"
          className="flex listpadding text-white hover:underline  md:p-0 p-2 px-2 md:px-2 rounded-2xl  items-center"
        >
          <button
            onClick={() => {
              scrollToRef(skillRef);
              closeNav();
            }}
          >
            Skill
          </button>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-sans text-lg"
        // pass the closeNav function as a prop
        closeNav={closeNav}
      >
        <a
          href="#"
          className="flex text-white hover:underline md:p-0 p-2 px-2 md:px-2 rounded-2xl items-center"
        >
          <button
            onClick={() => {
              scrollToRef(projectRef);
              closeNav();
            }}
          >
            Project
          </button>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-sans text-lg"
        // pass the closeNav function as a prop
        closeNav={closeNav}
      >
        <a
          href="#"
          className="flex text-white hover:underline md:p-0 p-2 px-2 md:px-2 rounded-2xl items-center"
        >
          <button
            onClick={() => {
              scrollToRef(contactRef);
              closeNav();
            }}
          >
            Contact
          </button>
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-sans text-lg"
        // pass the closeNav function as a prop
        closeNav={closeNav}
      >
        <a
          href="/resume"
          className="flex text-white hover:underline md:p-0 p-2 px-2 md:px-2 rounded-2xl items-center"
        >
          <button
            onClick={() => {
              closeNav();
            }}
          >
            Resume
          </button>
        </a>
      </Typography>
    </ul>
  );
  return (
    <>
      <div className="">
        <nav className="fixed bg-inherit top-0 z-10 w-full backdrop-blur-sm h-auto rounded-none py-1 px-2 lg:px-4 lg:py-2 ">
          <div className="flex items-center justify-evenly text-white">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5  font-sans  text-2xl"
            >
              <div className="flex flex-row gap-2 justify-center items-center">
                <img src={Logo} alt="logo" className=" w-auto h-16" />
                <div className="flex flex-col">
                  <p className="font-bold md:text-2xl text-xl">
                    Mom Sombrathna
                  </p>
                  <p className="text-white text-sm font-thin">portfolio</p>
                </div>
              </div>
            </Typography>
            <div className="flex items-center justify-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav} className=" md:ml-0 ml-5">
            {navList}
          </MobileNav>
        </nav>
      </div>
    </>
  );
}

export default Nav;
