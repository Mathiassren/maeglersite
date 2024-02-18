import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Horisontal from "../assets/Horisontal.png";
import Layers from "../assets/Layers.png";
import Map from "../assets/Map.png";
import Heart from "../assets/Heart.png";
import { FaPhone, FaPaperPlane } from "react-icons/fa6";

const DetailsView = () => {
  const [homeDetails, setHomeDetails] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dinmaegler.onrender.com/homes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setHomeDetails(data);
      })
      .catch((error) => console.error("Error fetching home details:", error));
  }, [id]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === homeDetails.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? homeDetails.images.length - 1 : prevIndex - 1
    );
  };

  if (!homeDetails) return <div>Loading...</div>;

  return (
    <div className="mb-[247px]">
      {lightboxOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative">
            <button
              className="absolute top-0 right-0 mr-2 mt-2 text-white text-xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img
              className="max-h-screen max-w-full"
              src={homeDetails.images[currentImageIndex].url}
              alt="House"
            />
            <button
              className="absolute top-1/2 -translate-y-1/2 left-4 text-white text-3xl"
              onClick={prevImage}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4 text-white text-3xl"
              onClick={nextImage}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
      <img
        className="w-full cursor-pointer"
        src={homeDetails.images[0].url}
        alt="House"
        onClick={() => openLightbox(0)}
      />
      <main className="text-center max-w-1080 mt-10 mx-auto">
        <section>
          <div className="flex text-left justify-between">
            <div className="">
              <p>{homeDetails.adress1}</p>
              <p>{homeDetails.adress2}</p>
            </div>
            <div className="flex space-x-10">
              <img
                className="cursor-pointer"
                src={Horisontal}
                alt=""
                onClick={() => openLightbox(0)}
              />
              <img className="cursor-pointer" src={Layers} alt="" />
              <img className="cursor-pointer" src={Map} alt="" />
              <img className="cursor-pointer" src={Heart} alt="" />
            </div>

            <p className="font-bold text-2xl">Kr. {homeDetails.price}</p>
          </div>
          <hr className="mt-4" />
          <div className="flex text-left justify-between pt-10">
            <div>
              <p>Sagsnummer: 1234567</p>
              <p>Boligareal: {homeDetails.livingspace}</p>
              <p>Grundareal: {homeDetails.lotsize}</p>
              <p>Rum/værelser: {homeDetails.rooms}</p>
              <p>Antal plan: {homeDetails.floorplan.size}</p>
            </div>
            <div>
              <p>Kælder: {homeDetails.basementsize}</p>
              <p>Byggeår: {homeDetails.built}</p>
              <p>Ombygget: {homeDetails.remodel}</p>
              <p>Energimærke: {homeDetails.energylabel}</p>
            </div>
            <div>
              <p>Udbetaling: {homeDetails.payment}</p>
              <p>Brutto ex ejerudgift: {homeDetails.gross}</p>
              <p>Netto ex ejerudgift: {homeDetails.netto}</p>
              <p>Ejerudgifter: {homeDetails.cost}</p>
            </div>
          </div>
        </section>
        <div className="flex mt-10">
          <div className="text-left w-[540px]">
            <p>
              <span className="font-bold text-2xl">Beskrivelse</span>
              <p>{homeDetails.description}</p>
            </p>
          </div>
          <div>
            <p className="font-bold text-left ml-[43px] mb-[22px]">
              Ansvarlig mægler
            </p>
            <section className="shadow ml-[43px] w-[730px] h-[354px] items-center justify-center flex ">
              <img
                className="w-[280px] h-[200px]"
                src={homeDetails.agent.image.url}
                alt=""
              />

              <div className="text-left ml-10">
                <p className="font-bold text-2xl pb-4">
                  {homeDetails.agent.name}
                </p>
                <p className="pb-4">{homeDetails.agent.title}</p>
                <hr className="w-12" />
                <p className="flex pt-4 items-center">
                  <FaPhone />
                  {homeDetails.agent.phone}
                </p>
                <p className="flex pt-4 items-center">
                  <FaPaperPlane /> {homeDetails.agent.email}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailsView;
