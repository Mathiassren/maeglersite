import React from "react";
import Banner from "../assets/Banner.png";

// The `title` prop is destructured from the component's props
const ContactHeader = ({ title }) => {
  return (
    <div className="relative inline-block">
      <img src={Banner} alt="Contact Header" />
      {/* Dynamically display the title if it's provided */}
      {title && (
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
          {title}
        </span>
      )}
    </div>
  );
};

export default ContactHeader;
