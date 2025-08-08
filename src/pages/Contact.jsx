import React from "react";
import { Typography } from "@material-tailwind/react";
import Telegram from "../assets/telegram.jpg";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { ImNpm } from "react-icons/im";

const currentYear = new Date().getFullYear();

function Contact(props) {
  return (
    <>
      <footer className=" w-full mt-16">
        <div className="mx-auto w-full max-w-7xl px-8 ">
          <div className="grid grid-cols-1 text-white justify-between gap-4 md:grid-cols-2">
            <Typography variant="h5" className="mb-6 mt-10">
              Contact me
            </Typography>

            <div className="md:mt-16 mt-0 flex flex-col gap-5">
              <div className="flex flex-row gap-5">
                <div className="font-bold">Phone:</div>
                <div>
                  <p>+855 96 9153551</p>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="font-bold">Email:</div>
                <div>
                  <p typeof="email">mom.sombrathna26@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="font-bold">Telegram:</div>
                <a
                  href="https://t.me/brathna_26"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Telegram}
                    className="md:w-48 md:h-52 w-32 h-36 rounded-md"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-white text-center font-normal md:mb-0"
            >
              &copy; {currentYear}{" "}
              <a href="https://material-tailwind.com/">Mom Sombrathna</a>. All
              Rights Reserved.
            </Typography>
            <div className="flex gap-4  text-white sm:justify-center">
              <Typography
                as="a"
                href="https://github.com/Momsombrathna/"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <FaGithub className="w-8 h-8" />
              </Typography>
              <Typography
                as="a"
                href="https://www.npmjs.com/~brathna26"
                target="_blank"
                rel="noopener noreferrer"
                title="npm"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <ImNpm className="w-8 h-8" />
              </Typography>
              <Typography
                as="a"
                href="https://www.linkedin.com/in/mom-sombrathna-6932a7289/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <BsLinkedin className="w-8 h-8" />
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
