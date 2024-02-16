import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa"; // Ensure this matches the version you're using

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://dinmaegler.onrender.com/agents")
      .then((response) => response.json())
      .then((data) => {
        setAgents(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="max-w-1080 pt-11 text-center mx-auto">
      <div>
        <p className="font-bold text-3xl">Mød vores engagerede medarbejdere</p>
        <p className="pb-[60px] pt-[16px]">
          Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
          <br />
          Kontakt en af vores medarbejdere.
        </p>
      </div>
      <div className="flex gap-4 justify-center flex-wrap">
        {agents.slice(0, showAll ? agents.length : 3).map((agent) => (
          <Link
            to={`/agents/${agent.id}`}
            key={agent.id}
            className="flex flex-col shadow gap-4 items-center w-[30%] min-w-[300px]"
          >
            <img src={agent.image.url} alt={agent.name} />
            <p>{agent.name}</p>
            <p>{agent.title}</p>
            <div className="flex gap-4 pb-4">
              <FaEnvelope />
              <FaLinkedinIn />
            </div>
          </Link>
        ))}
      </div>
      <button
        className="bg-Button w-[194px] h-[62px] text-white mb-[114px] mt-[42px]"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Se mindre" : "Se alle mæglere"}
      </button>
    </div>
  );
};

export default Agents;
