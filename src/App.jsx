import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/layout/HeaderComponent/HeaderComponent.jsx";
import FooterComponent from "./components/layout/FooterComponent/FooterComponent.jsx";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="content-outlet">
        <Outlet />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
