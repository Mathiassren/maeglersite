import React from "react";
import Banner from "../assets/Banner.png";

const ContactHeader = ({ title }) => {
  return (
    <div className="relative inline-block">
      <img src={Banner} alt="Contact Header" />
      {/* Overlay with transparent blue */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#162A41] bg-opacity-50"
        style={{ backgroundColor: "rgba(22, 42, 65, 0.9)" }} // Adjust opacity as needed
      ></div>
      {/* Dynamically display the title if it's provided */}
      {title && (
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold z-10">
          {title}
        </span>
      )}
    </div>
  );
};

export default ContactHeader;
