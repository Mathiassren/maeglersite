import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Index.css";
import Info from "./components/Info";
import InfoNav from "./components/InfoNav";
import Footer from "./components/Footer";

function App() {
  let [darkmode, setDarkmode] = useState(false);
  return (
    <div className={"app " + (darkmode && "dark ")}>
      <div className="">
        <Info />
        <InfoNav />
        <Outlet context={[darkmode, setDarkmode]} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
