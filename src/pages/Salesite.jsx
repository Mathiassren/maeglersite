import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/ContactHeader";
import ReactLoading from "react-loading";

const Listview = () => {
  const [homes, setHomes] = useState([]);
  const [filteredHomes, setFilteredHomes] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [propertyType, setPropertyType] = useState("");
  const [maxPrice, setMaxPrice] = useState(12000000);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dinmaegler.onrender.com/homes")
      .then((response) => response.json())
      .then((data) => {
        setHomes(data);
        setFilteredHomes(data);
        setIsLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Set loading to false in case of error
      });
  }, []);

  useEffect(() => {
    const filtered = homes.filter(
      (home) =>
        (propertyType ? home.type === propertyType : true) &&
        home.price <= maxPrice
    );
    setFilteredHomes(filtered);
  }, [propertyType, maxPrice, homes]);

  return (
    <section>
      <Banner title="Boliger til salg" />
      <div className="max-w-1080 mx-auto p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-left">
            Søg efter dit drømmehus
          </h1>
          <hr className="w-[60px] border-t-4 border-Button mt-[10px] mb-[20px]" />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <ReactLoading
              type="bars"
              color="#0000FF"
              height={"5%"}
              width={"5%"}
            />
          </div>
        ) : (
          <>
            <p className="pb-[14px]">Ejendomstype</p>
            <div className="flex gap-4 justify-left mb-8">
              <div>
                <select
                  className="shadow border rounded py-2 px-3 text-gray-700"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Alle Ejendomstyper</option>
                  <option value="Villa">Villa</option>
                  <option value="Byhus">Byhus</option>
                  <option value="Landejendom">Landejendom</option>
                  <option value="Ejerlejlighed">Ejerlejlighed</option>
                </select>
              </div>

              <div>
                <p>Pris-interval</p>
                <input
                  type="range"
                  min="0"
                  max="12000000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-[540px] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="text-right">
                  {maxPrice.toLocaleString()} kr.
                </div>
              </div>
            </div>
            {/* Homes List */}
            <div className="grid container text-left mx-auto max-w-1080 md:grid-cols-2 gap-4 mb-4">
              {filteredHomes
                .slice(0, showAll ? filteredHomes.length : 4)
                .map((home) => (
                  <Link to={`/details/${home.id}`} key={home.id}>
                    <div className="bg-white cursor-pointer h-[446px] shadow-md rounded-lg overflow-hidden">
                      <img
                        className="w-full h-64 object-cover"
                        src={home.images[0].url}
                        alt={`View of ${home.address1}`}
                      />
                      <div className="p-4">
                        <h2 className="text-xl font-semibold">
                          {home.adress1}
                        </h2>
                        <p className="text-gray-600">{home.adress2}</p>
                        <p className="text-gray-800">
                          {home.type} - Ejerudgift: {home.gross}
                        </p>
                        <hr className="mt-4" />
                        <div className="flex justify-between items-center mt-4">
                          <span
                            className={`px-3 py-1 text-white ${
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

            {filteredHomes.length > 4 && (
              <button
                className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Listview;
