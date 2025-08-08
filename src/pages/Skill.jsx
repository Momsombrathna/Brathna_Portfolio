import React from "react";
import { MdOutlinePerson, MdOutlinePsychology } from "react-icons/md";
import { languages, framework, database } from "../data/data";
import Card from "../components/Card";
import SmallCard from "../components/SmallCard";
import { TbPointFilled } from "react-icons/tb";

const Skill = (props) => {
  return (
    <>
      <section className="mt-16">
        <div className="flex items-center flex-col justify-center">
          <div className="flex flex-row backdrop-blur shadow px-2 py-1 rounded-lg items-center justify-center">
            <MdOutlinePsychology className="text-white text-2xl" />
            <h1 className=" text-white text-xl pl-2 font-bold">MY SKILLS</h1>
          </div>

          {/* ---------------------Languages--------------------------- */}
          <div className="mt-10 flex lg:flex-row flex-col justify-center gap-12">
            <div className="flex gap-3 flex-row justify-center">
              <TbPointFilled className="text-xl flex items-center text-white" />
              <h1 className="text-xl text-white font-bold">
                Programming &nbsp;Languages
              </h1>
            </div>

            <div className=" w-full">
              <div className="container mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4  gap-4">
                  {languages.map((item) => {
                    return <Card key={item.id} item={item} />;
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------Frameworks--------------------------- */}
          <div className="mt-16 flex lg:flex-row flex-col justify-center gap-12">
            <div className="flex gap-3 flex-row justify-center">
              <TbPointFilled className="text-xl flex items-center text-white" />
              <h1 className="text-xl text-white font-bold">Frameworks</h1>
            </div>

            <div className=" w-full">
              <div className="container mx-auto lg:pl-24 pl-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {framework.map((item) => {
                    return <SmallCard key={item.id} item={item} />;
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------atabase--------------------------- */}
          <div className="mt-16 flex lg:flex-row flex-col justify-center gap-12">
            <div className="flex gap-3 flex-row justify-center">
              <TbPointFilled className="text-xl flex items-center text-white" />
              <h1 className="text-xl text-white font-bold">Database</h1>
            </div>

            <div className=" w-full">
              <div className="container mx-auto lg:pl-28 pl-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {database.map((item) => {
                    return <SmallCard key={item.id} item={item} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
