import React from "react";
import Heroimg from "../assets/Hero.jpg"; // Ensure this path is correct relative to this file

const Hero = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${Heroimg})` }} // Using template literals to refer to the imported image
    >
      <div className="bg-white bg-opacity-75 w-[920px] rounded p-8">
        <h1 className="text-2xl font-bold mb-4">
          Søg blandt 158 boliger til salg i 74 butikker{" "}
        </h1>
        <p>Hvad skal din næste bolig indeholde</p>
        <div className="flex gap-4">
          <input
            type="text"
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg w-[728px] text-sm focus:outline-none"
            placeholder="Søg på fx. glaskeramisk komfur, byggeråd, kælder eller lignende"
          />

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Søg
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
