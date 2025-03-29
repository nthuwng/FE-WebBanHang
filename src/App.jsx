import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/layout/HeaderComponent/HeaderComponent.jsx";
import FooterComponent from "./components/layout/FooterComponent/FooterComponent.jsx";
import ScrollToTopButton from "./components/layout/ScrollToTopButton/ScrollToTopButton.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 400,
    });
  }, []);

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
