import { Outlet } from "react-router-dom";
import "aos/dist/aos.css";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin.jsx";
import FooterAdmin from "./FooterAdmin/FooterAdmin.jsx";

function AdminLayout() {
  return (
    <>
      <HeaderAdmin />
      <div className="admin_content-outlet">
        <Outlet />
      </div>
      <FooterAdmin />
    </>
  );
}

export default AdminLayout;
