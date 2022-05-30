import React from "react";
import Css from "../assets/css.png";
import GitHub from "../assets/github.png";
import JavaScript from "../assets/javascript.png";
import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import ReactImg from "../assets/react.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0A192F] text-gray-300 w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies i've worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500 rounded-lg">
            <img className="w-20 mx-auto mt-4" src={Css} alt="CSS Icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500 rounded-lg">
            <img
              className="w-20 mx-auto mt-4"
              src={JavaScript}
              alt="CSS Icon"
            />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500 rounded-lg">
            <img className="w-20 mx-auto mt-4" src={GitHub} alt="CSS Icon" />
            <p className="my-4">GitHub</p>
          </div>

          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500 rounded-lg">
            <img className="w-20 mx-auto mt-4" src={Mongo} alt="CSS Icon" />
            <p className="my-4">Mongo</p>
          </div>

          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500 rounded-lg">
            <img className="w-20 mx-auto mt-4" src={Node} alt="CSS Icon" />
            <p className="my-4">Node</p>
          </div>

          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500 rounded-lg">
            <img className="w-20 mx-auto mt-4" src={ReactImg} alt="CSS Icon" />
            <p className="my-4">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
