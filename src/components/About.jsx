import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0A192F] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <p className="sm:text-right text-4xl font-bold">
            Hi. I'm Shoaib, nice to meet you. Please take a look around.
          </p>
          <div>
            <p>
              I am passionate about technology and comfortable building scalable
              full stack application using the latest technologies such as;
              React, Node, Express and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
