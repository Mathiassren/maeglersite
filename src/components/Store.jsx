import { FaApple, FaGooglePlay } from "react-icons/fa"; // Ensure correct import paths
import leftPhone from "../assets/Phoneleft.png";
import rightPhone from "../assets/Phoneright.png";

const Store = () => {
  return (
    <div className="bg-Button">
      <main className="bg-Button h-[512px] max-w-1080 mx-auto text-white flex items-center justify-center">
        <div className="flex-1">
          <h1 className="text-3xl pb-[20px]">
            Hold dig opdateret
            <br /> på salgsprocessen
          </h1>
          <p className="pb-[24px] w-[634px]">
            Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den
            ansvarlige mægler eller butik med vores app. Her kan du også se
            statistik på interessen for din bolig i alle vores salgskanaler.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center justify-center w-[189px] h-[62px] text-Button bg-white">
              <FaGooglePlay /> Store
            </button>
            <button className="flex items-center justify-center w-[189px] h-[62px] border border-white">
              <FaApple /> Google Play
            </button>
          </div>
        </div>

        {/* Images Container */}
        <div className="flex-1 flex justify-center mt-[88px] ml-[150px]">
          <img src={leftPhone} alt="Left Phone" />
          <img src={rightPhone} alt="Right Phone" />
        </div>
      </main>
    </div>
  );
};

export default Store;
