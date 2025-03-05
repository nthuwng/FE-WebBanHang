import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent.jsx";
import FooterComponent from "../../components/FooterComponent/FooterComponent.jsx";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default HomePage;
