import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

const AgentsDetailsView = () => {
  const [agent, setAgentDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dinmaegler.onrender.com/agents/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAgentDetails(data);
      })
      .catch((error) => console.error("Error fetching agent details:", error));
  }, [id]);

  if (!agent)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className=" p-6 bg-white shadow-md">
      <div className="flex mx-auto max-w-1080 flex-wrap">
        <div className="w-full lg:w-2/3 p-4">
          <div className="flex  items-center">
            <img
              src={agent.image.url} // Replace with the correct property for the agent's image URL
              alt={agent.name}
              className=" w-[autopx] h-[280px] mr-4"
            />
            <div className="">
              <h2 className="text-2xl font-bold">{agent.name}</h2>
              <p className="text-gray-600">{agent.title}</p>
              <hr />
              <p className="flex items-center text-blue-600 mt-2">
                <FaPhone className="mr-2" />
                {agent.phone}
              </p>
              <p className="flex items-center text-blue-600">
                <FaEnvelope className="mr-2" />
                {agent.email}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Om {agent.name}</h3>
            <p className="text-gray-700">{agent.description}</p>
          </div>
        </div>
      </div>
      <section className="w-[650px]  h-[704px] max-w-1080 mx-auto shadow">
        <div className="ml-[40px] pt-[40px]">
          <h2 className="">Kontakt {agent.name}</h2>
          <hr className="w-16" />
        </div>
        <div class="flex ml-[40px] space-x-8">
          <div class="flex flex-col">
            <label for="name" class="mb-2">
              Navn
            </label>
            <input
              id="name"
              class="border px-3 py-2"
              type="text"
              placeholder="Indtast navn"
            />
          </div>

          <div class="flex flex-col ">
            <label for="email" class="mb-2">
              Email
            </label>
            <input
              id="email"
              class="border px-3 py-2"
              type="email"
              placeholder="Indtast email"
            />
          </div>
        </div>
        <div className="ml-[40px]">
          <p>Emne</p>
          <input
            className="border  px-3 py-2"
            type="text"
            placeholder="Hvad drejer din henvendelse om?"
          />
        </div>
        <div className="ml-[40px]">
          <p>Besked</p>
          <input
            className="border w-[570px] h-[180px]"
            type="text"
            placeholder="Skriv din besked her.."
          />
        </div>{" "}
        <button className="ml-[40px] mt-[30px] w-[168px] h-[62px] bg-Button text-white">
          Send besked
        </button>
      </section>
    </div>
  );
};

export default AgentsDetailsView;
