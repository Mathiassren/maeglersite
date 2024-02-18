import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const FooterComponent = () => {
  return (
    <footer className="w-100 h-100 bg-gradient-to-b from-gray-200 to-white">
      <div className="max-w-1080 mx-auto">
        <div className="container mx-auto py-8 px-5 ">
          <div className="lg:w-1/3 mb-6 lg:mb-0 pb-[30px]">
            <img src={Logo} alt="" />
            <p className="mt-2 text-sm text-gray-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-2/3 justify-between ">
            <div className="flex bg-white justify-center items-center w-[444px] h-[434px] shadow">
              <div>
                <p className="text-gray-600 text-xs ml-10 ">Ring til os</p>
                <ul className="list-none">
                  <li className="flex items-center mb-[32px]">
                    <div className="rounded-full bg-Button p-3 mr-2">
                      <FaPhoneAlt className="text-white" />
                    </div>
                    +45 7070 4000
                  </li>
                  <p className="text-gray-600 text-xs ml-10 ">Send en mail</p>
                  <li className="flex items-center mb-[32px]">
                    <div className="rounded-full bg-Button p-3 mr-2">
                      <FaEnvelope className="text-white" />
                    </div>
                    4000@dinmaegler.com
                  </li>
                  <p className="text-gray-600 ml-10 text-xs">Butik</p>
                  <li className="flex items-center">
                    <div className="rounded-full bg-Button p-3 mr-2">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    Standertorvet 17, 4000 Roskilde
                  </li>
                  <p className="mt-[30px]">
                    Din Mægler Roskilde, er din
                    <br /> boligibutik i lokalområdet.
                  </p>
                </ul>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
              <h2 className="text-gray-900 text-sm font-semibold mb-3">
                Quick Links
              </h2>{" "}
              <nav className="list-none">
                <li className="mb-3">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Boliger til salg
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Købte boliger
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Kontakt os
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Log ind / bliv bruger
                  </a>
                </li>{" "}
                <div className="w-[250px]">
                  <p className="mt-[190px]">Medlem af</p>
                  <h2 className="text-3xl font-bold text-gray-500">DMS</h2>
                  <p>Dansk Mægler Sammenslutning</p>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              Din Mægler Roskilde, en del af boligkæden | Boligudvalget
            </p>
          </div>
        </div>
      </div>
      <div className="bg-Button text-white h-[90px] items-center flex justify-center">
        <p className="">Layout by UI Bazar 2020</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
