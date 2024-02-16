import Banner from "../components/ContactHeader";
import ContactForm from "../components/ContactForm";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <header>
        <Banner title="Kontakt os" />
      </header>
      <div className="mx-auto flex flex-col max-w-1080">
        <main>
          <h1 className="font-bold text-3xl">
            Vi sidder klar til at beskrive dine spørgsmål
          </h1>
          <hr className="w-[110px] border-t-4 border-Button mt-[10px] mb-[20px]" />
          <p>
            Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang
            med at sælge sin bolig. <br />
            Vores medarbejdere sider klar alle ugens dage til at svare på dine
            spørgsmål.
          </p>
          <ContactForm />
        </main>
        <div className="flex flex-col items-center justify-center p-4 space-y-10 w-[445px] h-[710px] shadow">
          <div className="bg-Button rounded-full text-white p-4">
            <FiPhoneCall className="text-lg" />
          </div>

          <div className="flex items-center space-x-3">
            <span className="font-medium">Ring til os</span>
            <a href="tel:+4570704000" className="font-medium">
              +45 7070 4000
            </a>
          </div>
          <hr />
          <div className="bg-Button rounded-full text-white p-4">
            <FiMail />
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-medium">send en mail</span>
            <a href="mailto:4000@dinmaegler.dk" className="font-medium">
              4000@dinmaegler.dk
            </a>
          </div>
          <div className="bg-Button rounded-full text-white p-4">
            <FiMapPin className="text-lg" />
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-medium">Besøg butikken</span>
            <address className="font-medium">
              Stændertorvet 78, 4000 Roskilde
            </address>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
