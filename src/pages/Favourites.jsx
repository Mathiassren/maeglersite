import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

const HomeCard = ({ home }) => {
  return (
    <div className="shadow mt-4">
      <div className="flex justify-evenly pt-[40px]">
        <img className="w-[282px]" src={home.images[0].url} alt="House" />
        <div className="flex-col space-y-6 text-left">
          <p className="font-bold">{home.adress1}</p>
          <p>{home.adress2}</p>
          <p>
            <span className="font-bold">{home.type}</span> • Ejerudgift:{" "}
            {home.cost}
          </p>
        </div>
        <div className="flex">
          <div className="font-bold text-xl">{home.address}</div>
          <div className="flex space-x-4">
            <p>{home.energylabel}</p>
            <p className="text-gray-700 text-base">
              {home.rooms} værelser • {home.size} m²
            </p>
            <p className="text-gray-900 font-bold text-xl">
              Kr. {home.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 flex justify-end pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Fjern fra favoritter
        </button>
      </div>
    </div>
  );
};

const HomesList = () => {
  const [homes, setHomes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ReactLoading type="bars" color="#0000FF" />
      </div>
    );
  }

  return (
    <div className="max-w-1080 mb-[300px] mt-[218px] mx-auto">
      <input
        id="name"
        className="border px-3 py-2"
        type="text"
        placeholder="Søg i favoritter"
      />
      <hr className="mt-[16px] mb-[32px]" />
      {homes.map((home) => (
        <Link to={`/details/${home.id}`} key={home.id}>
          <HomeCard home={home} />
        </Link>
      ))}
    </div>
  );
};

export default HomesList;
