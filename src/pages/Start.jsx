import React, { useState, useEffect } from "react";
import banner from "../assets/Newsletter.png";
import Listview from "./ListView";

const Start = () => {
  return (
    <main>
      <Listview />
      <section
        className="h-[284px]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <form className="mx-auto flex max-w-1080" action="">
          <p className="text-white text-3xl font-bold">
            Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
          </p>
          <input
            className="border-2  border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg w-[728px] text-sm focus:outline-none"
            type="text"
            name=""
            id=""
          />
        </form>
      </section>
    </main>
  );
};

export default Start;
