import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/layout/HeaderComponent/HeaderComponent.jsx";
import FooterComponent from "./components/layout/FooterComponent/FooterComponent.jsx";
import ScrollToTopButton from "./components/layout/ScrollToTopButton/ScrollToTopButton.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./components/context/auth.context.jsx";
import { getAccountAPI } from "./services/api.service.js";

function App() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 400,
    });
    fetchUserInfor();
  }, []);

  const fetchUserInfor = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      setUser(res.data);
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="content-outlet">
        <Outlet />
        <ScrollToTopButton />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
