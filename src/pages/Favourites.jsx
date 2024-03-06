import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/ContactHeader";
import ReactLoading from "react-loading";

const HomeCard = ({ home }) => {
  return (
    <div className="shadow-lg p-4 mt-4">
      <div className="grid grid-cols-[1fr_3fr_2fr] ">
        <img className="w-full h-auto" src={home.images[0].url} alt="House" />
        <div className="flex flex-col justify-between pl-4">
          <p className="font-bold text-lg">{home.adress1}</p>
          <p className="text-sm">{home.adress2}</p>
          <p className="text-sm">
            <span className="font-bold">{home.type}</span> • Ejerudgift:{" "}
            {home.cost} kr.
          </p>
        </div>
        <div className="flex flex-col items-end justify-between pr-4">
          <div className="flex items-center">
            <div
              className={`px-4 py-2 text-white text-sm ${
                home.energylabel === "A"
                  ? "bg-green-500"
                  : home.energylabel === "B"
                  ? "bg-yellow-500"
                  : home.energylabel === "C"
                  ? "bg-orange-500"
                  : "bg-red-500"
              }`}
            >
              {home.energylabel}
            </div>
            <p className="ml-4 text-sm">
              {home.rooms} værelser • {home.size} m²
            </p>{" "}
            <p className="font-bold ml-4 text-lg">
              Kr. {home.price.toLocaleString()}
            </p>
          </div>

          <button className="bg-[#162A41] hover:bg-blue-700 text-white font-bold py-2 px-4  mt-10">
            Fjern fra favoritter
          </button>
        </div>
      </div>
    </div>
  );
};

const HomesList = () => {
  const [homes, setHomes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dinmaegler.onrender.com/homes")
      .then((response) => response.json())
      .then((data) => {
        setHomes(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching homes:", error);
        setIsLoading(false);
      });
  }, []);

  //search logic
  const filteredHomes = homes.filter((home) =>
    home.adress1.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <ReactLoading type="bars" color="#162A41" />
        <p className="text-2xl">
          Vent venligst mens listen af favoritter hentes
        </p>
      </div>
    );
  }

  return (
    <div>
      <Banner title="Mine favoritboliger" />
      <div className="max-w-1080 mb-[300px] mt-[218px] mx-auto">
        <input
          id="name"
          className="border px-3 py-2"
          type="text"
          placeholder="Søg i favoritter"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query based on input
        />
        <hr className="mt-[16px] mb-[32px]" />
        {filteredHomes.map((home) => (
          <Link to={`/details/${home.id}`} key={home.id}>
            <HomeCard home={home} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomesList;
