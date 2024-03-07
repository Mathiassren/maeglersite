import { Link } from "react-router-dom";
import { useAuth } from "../components/Auth/AuthContext"; // Correct the path as necessary
import Logo from "../assets/Logo.png";

const InfoNav = () => {
  const { token } = useAuth(); // Use the token to determine if the user is logged in

  return (
    <div className="bg-white shadow">
      <div className="max-w-6xl mx-auto w-full px-10">
        <section className="h-[90px] flex items-center justify-between text-black">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-[60px]" />
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <Link to="/sale">
                <li>
                  <a>Boliger til salg</a>
                </li>
              </Link>
              <Link to="/agentsite">
                <li>
                  <a>Mæglere</a>
                </li>
              </Link>
              {token && ( // Conditionally render this link if the user is logged in
                <Link to="/fav">
                  <li>
                    <a>Mine favoritter</a>
                  </li>
                </Link>
              )}
              <Link to="/contact">
                <li>
                  <a>Kontakt os</a>
                </li>
              </Link>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default InfoNav;
