import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0A192F] flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or email me at: shoaibiqbal0@gmail.com
          </p>
          <input
            className="my-4 p-2 bg-gray-300"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-gray-300"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-gray-300 p-2"
            name="message"
            rows="10"
            placeholder="Message"
          />
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
