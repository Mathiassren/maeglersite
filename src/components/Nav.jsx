import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Header from "../components/Header";

const Nav = () => {
  return (
    <div className="bg-white shadow">
      <div className="max-w-6xl mx-auto w-full px-10">
        <section className="h-[90px] flex items-center justify-between text-black">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-[60px]" />
          </Link>
          <img src={Logo} alt="Logo" className="h-[60px]" />

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
              <Link to="/fav">
                <li>
                  <a>Mine favoritter</a>
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <a>Kontakt os</a>
                </li>
              </Link>
            </ul>
          </nav>
        </section>
      </div>{" "}
      <Header />
    </div>
  );
};

export default Nav;
