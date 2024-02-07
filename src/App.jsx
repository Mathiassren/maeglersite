import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Index.css";
import Info from "./components/Info";
import Nav from "./components/Nav";

function App() {
  let [darkmode, setDarkmode] = useState(false);
  return (
    <div className={"app " + (darkmode && "dark ")}>
      <div className="dark:bg-black">
        <Info />
        <Nav />
        <Outlet context={[darkmode, setDarkmode]} />
      </div>
    </div>
  );
}

export default App;
