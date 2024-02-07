import { FaPaperPlane } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="bg-MainBlue text-white h-16">
      <nav className="max-w-1080 mx-auto flex items-center justify-between w-full h-full">
        <div className="flex items-center cursor-pointer space-x-4">
          <FaPaperPlane />
          <p>4000@dinmaegler.com</p>
          <FaPhone />
          <p>+45 7070 4000</p>
        </div>

        <div className="flex items-center">
          <FaPerson />
          <Link to="/login">
            <p className="cursor-pointer">Log Ind</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Info;
