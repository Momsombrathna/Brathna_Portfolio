import React from "react";
import pdf from "../assets/E-Attendance_Report_Defences.pdf";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Contact from "../pages/Contact";

const ReportViewer = () => {
  return (
    <>
      <div className="area fixed-content h-screen px-3">
        <Link to="/">
          <button
            type="button"
            class="text-white bg-gradient-to-r flex justify-center items-center from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2 text-center shadow-lg mt-3"
          >
            <FaLongArrowAltLeft size={"1.5rem"} />
          </button>
        </Link>

        <main className="flex flex-col mt-3 items-center justify-center md:px-0 h-full">
          <iframe
            title="E-attendance Report"
            src={pdf}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            className="max-h-screen  "
          />
        </main>
        <Contact />
        <ul className="circles max-h-screen z-0">
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

export default ReportViewer;
