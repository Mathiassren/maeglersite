import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Banner from "../components/ContactHeader";
import ReactLoading from "react-loading";

const AgentsDetailsView = () => {
  const [agent, setAgentDetails] = useState(null);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dinmaegler.onrender.com/agents/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAgentDetails(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching agent details:", error));
  }, [id]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <ReactLoading type="bars" color="#162A41" height={"5%"} width={"5%"} />
      </div>
    );

  if (!agent)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <main>
      <Banner title="Kontakt en medarbejder" />
      <section className="flex  justify-center space-x-4 mx-auto max-w-7xl p-6">
        <div className="w-[730px] shadow mx-auto max-w-1080 p-6">
          <div className="flex mx-auto max-w-1080">
            <div className="w-full lg:w-2/3 p-4">
              <div className="flex">
                <img
                  src={agent.image.url}
                  alt={agent.name}
                  className=" w-[autopx] h-[280px] mr-4"
                />
                <div className="">
                  <h2 className="text-2xl font-bold">{agent.name}</h2>

                  <p className="text-gray-600 mb-[16px]">{agent.title}</p>
                  <hr className="mb-[20px] w-[58px] " />
                  <p className="flex items-center mt-2">
                    <FaPhone className="mr-2 text-Button" />
                    {agent.phone}
                  </p>
                  <p className="flex items-center">
                    <FaEnvelope className="mr-2 text-Button" />
                    {agent.email}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2">Om {agent.name}</h3>
                <hr className="w-[60px] border-t-4 border-Button mb-[20px]" />
                <p className="text-gray-700">{agent.description}</p>
              </div>
            </div>
          </div>

          <section className="w-[650px] h-[704px] mt-4 shadow max-w-1080 mx-auto">
            <div className="ml-[40px] pt-[40px]">
              <h2 className="pb-[12px] font-bold">Kontakt {agent.name}</h2>
              <hr className="w-16 border-t-4 mb-[20px] border-Button" />
            </div>
            <div class="flex ml-[40px] space-x-8">
              <div class="flex flex-col mb-[20px]">
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
            <div className="ml-[40px] mb-[20px]">
              <p className="mb-2">Emne</p>
              <input
                className="border w-[570px] px-3 py-2"
                type="text"
                placeholder="Hvad drejer din henvendelse om?"
              />
            </div>
            <div className="ml-[40px]">
              <p className="mb-2">Besked</p>
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
        <div className="flex flex-col w-3/4">
          <div className="bg-Search mb-[20px] h-[175px] w-[350px] p-4 shadow">
            <h3 className="font-bold text-lg mb-4">Search Property</h3>
            <hr className="mb-[24px]" />
            <input
              className="border p-2 w-full mb-4"
              type="text"
              placeholder="Search"
            />
          </div>

          <div className="bg-Button w-[350px] h-[450px] text-center text-white p-4">
            <h3 className="font-bold mt-[92px] text-2xl">
              Find The Best
              <br /> Property <br />
              For Rent Or Buy
            </h3>
            <hr className="w-[80px] border-t-2 mx-auto mt-[21px] mb-[15px]" />
            <p className="mb-[4px]">call Us Now</p>
            <p className="text-3xl">+00 123 456 789</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AgentsDetailsView;
