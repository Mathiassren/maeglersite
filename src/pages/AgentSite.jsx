import AgentsList from "../components/Agents";
import Banner from "../components/ContactHeader";

const AgentSite = () => {
  return (
    <>
      <main>
        <header>
          <Banner title="Medarbejdere i Roskilde" />
        </header>
        <AgentsList />
      </main>
    </>
  );
};

export default AgentSite;
