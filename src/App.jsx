import { Outlet, useOutlet } from "react-router-dom";
import Info from "./components/Info";

import InfoNav from "./components/InfoNav";
import Footer from "./components/Footer";
import { AuthProvider } from "./components/Auth/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Info />
      <InfoNav />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
}

export default App;
