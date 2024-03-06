import { useState } from "react";
import { Outlet, useOutlet } from "react-router-dom";
import Info from "./components/Info";
import InfoNav from "./components/InfoNav";
import Footer from "./components/Footer";
import { AuthProvider } from "./components/Auth/AuthContext";

function App() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <AuthProvider>
      <div className={"app " + (darkmode && "dark ")}>
        <Info />
        <InfoNav />
        <Outlet />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
