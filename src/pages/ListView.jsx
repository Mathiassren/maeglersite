import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link

const Listview = () => {
  const [homes, setHomes] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://dinmaegler.onrender.com/homes")
      .then((response) => response.json())
      .then((data) => {
        setHomes(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Udvalgte Boliger</h1>
      <p className="mb-8">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form.
      </p>
      <div className="grid container text-left mx-auto max-w-1080 md:grid-cols-2 gap-4 mb-4">
        {homes.slice(0, showAll ? homes.length : 4).map((home) => (
          <Link to={`/details/${home.id}`} key={home.id}>
            <div className="bg-white cursor-pointer h-[446px] shadow-md rounded-lg overflow-hidden">
              <img
                className="w-full h-64 object-cover"
                src={home.images[0].url}
                alt={`View of ${home.address1}`}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{home.adress1}</h2>
                <p className="text-gray-600">{home.adress2}</p>
                <p className="text-gray-800">
                  {home.type} - Ejerudgift: {home.gross}
                </p>
                <hr className="mt-4" />
                <div className="flex justify-between items-center mt-4">
                  <span
                    className={`px-2 py-1 rounded-lg text-white ${
                      home.energylabel === "A"
                        ? "bg-green-500"
                        : home.energylabel === "B"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {home.energylabel}
                  </span>
                  <span>{home.rooms} værelser</span>
                  <span>{home.size} m²</span>
                  <span className="font-bold">{home.price} kr.</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {homes.length > 4 && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Listview;
