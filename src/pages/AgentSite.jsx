import AgentsList from "../components/Agents";
import Banner from "../components/ContactHeader";
import Footer from "../components/Footer";

const AgentSite = () => {
  return (
    <>
      <main>
        <header>
          <Banner title="Medarbejdere i Roskilde" />
        </header>
        <AgentsList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AgentSite;
