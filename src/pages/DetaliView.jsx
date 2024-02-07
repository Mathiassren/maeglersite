import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsView = () => {
  const [homeDetails, setHomeDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dinmaegler.onrender.com/homes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setHomeDetails(data);
      })
      .catch((error) => console.error("Error fetching home details:", error));
  }, [id]);

  if (!homeDetails) return <div>Loading...</div>;

  return (
    <div>
      <h1>{homeDetails.address1}</h1>
      <p>Energy Label: {homeDetails.energylabel}</p>
      <p>Type: {homeDetails.type}</p>
      <img src={homeDetails.images[0].url} alt="House" />
    </div>
  );
};

export default DetailsView;
