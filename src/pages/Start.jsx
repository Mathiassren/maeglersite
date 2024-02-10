import React, { useState, useEffect } from "react";
import banner from "../assets/Newsletter.png";
import Listview from "./ListView";
import Agents from "../components/Agents";
import Nav from "../components/Nav";

const Start = () => {
  return (
    <main>
      <Nav />
      <Listview />
      <section
        className="h-[284px]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <form
          className="mx-auto flex max-w-1080 items-center pt-[105px]"
          action=""
        >
          <p className="text-white text-3xl items-center font-bold">
            Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
          </p>
          <input
            className="border-2border-gray-300 bg-white h-[74px] px-5 pr-16 rounded-lg w-[728px] text-sm focus:outline-none"
            type="text"
            name=""
            id=""
          />
        </form>
      </section>
      <Agents />
    </main>
  );
};

export default Start;
