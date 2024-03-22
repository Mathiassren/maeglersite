import React, { useState, useEffect } from "react";
import banner from "../assets/Newsletter.png";
import Listview from "./ListView";
import Agents from "../components/Agents";
import Header from "../components/Header";
import Store from "../components/Store";
import Family from "../assets/Family.png";
import home1 from "../assets/home1.png";
import house1 from "../assets/house1.png";
import mapIcon from "../assets/mapicon.png";
import property from "../assets/propertyhand.png";
import customer from "../assets/customer.png";

const Start = () => {
  return (
    <main className="">
      <Header />
      <div className="bg-white mx-auto max-w-1080 pb-[217px] rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          {/* Image and text */}
          <div className="flex space-x-4 mt-[120px]">
            <img
              src={Family}
              alt="Family"
              className="rounded-lg w-[477px] h-[502px] object-cover"
            />
            <div className="pl-[93px]">
              <h2 className="font-semibold text-3xl pb-[32px]">
                Vi har fulgt danskerne hjem i snart 4 årtier
              </h2>
              <p className="text-gray-600 font-bold text-xl pb-[12px]">
                Det synes vi siger noget om os!
              </p>
              <p className="w-[540px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has normal
                distribution.
              </p>
              <p className="w-[540px] mt-[20px] pb-[40px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="flex justify-between w-[400px] mt-[40px]">
                <div className="text-left flex">
                  <div className="bg-blue-100 flex justify-center items-center h-[70px] w-[70px]">
                    <img
                      className="max-h-full max-w-full"
                      src={house1}
                      alt=""
                    />
                  </div>
                  <div className="flex-col ml-4">
                    <span className="text-3xl font-bold">4829</span>
                    <p className="text-gray-600">boliger solgt</p>
                  </div>
                </div>
                <div className="text-left flex">
                  <div className="bg-blue-100 flex justify-center items-center h-[70px] w-[70px]">
                    <img className="max-h-full max-w-full" src={home1} alt="" />
                  </div>

                  <div className="flex-col ml-4">
                    <span className="text-3xl font-bold">158</span>
                    <p className="text-gray-600">boliger til salg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-[70px] pt-[70px]">
          {/* Features */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex text-left items-start">
              <img src={property} alt="" className="mr-4" />

              <div>
                <h3 className="font-semibold">Bestil et salgstjek</h3>
                <p className="text-gray-600">
                  Mere end de Mæglerkæder vi ofte bliver sammenlignet med i din
                  bolig.
                </p>
              </div>
            </div>

            <div className="flex text-left items-start">
              <img src={mapIcon} alt="" className="mr-4" />

              <div>
                <h3 className="font-semibold">74 butikker</h3>
                <p className="text-gray-600">
                  Mere end de Mæglerkæder vi ofte bliver sammenlignet med i din
                  bolig.
                </p>
              </div>
            </div>

            <div className="flex text-left items-start">
              <img src={customer} alt="" className="mr-4" />

              <div>
                <h3 className="font-semibold">Tilmeld køberkartotek</h3>
                <p className="text-gray-600">
                  Mere end de Mæglerkæder vi ofte bliver sammenlignet med i din
                  bolig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      <Store />
    </main>
  );
};

export default Start;
