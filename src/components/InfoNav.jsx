import Logo from "../assets/Logo.png";
const InfoNav = () => {
  return (
    <div className="bg-white shadow">
      <div className="max-w-6xl mx-auto w-full px-10">
        <section className="h-[90px] flex items-center justify-between text-black">
          <img src={Logo} alt="Logo" className="h-[60px]" />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a>Boliger til salg</a>
              </li>
              <li>
                <a>Mæglere</a>
              </li>
              <li>
                <a>Mine favoritter</a>
              </li>
              <li>
                <a>Kontakt os</a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default InfoNav;
