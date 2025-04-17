import { Outlet } from "react-router-dom";
import "aos/dist/aos.css";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin.jsx";
import NavbarAdmin from "../../../common/admin/NavbarAdmin/NavbarAdmin.jsx";
import "./AdminLayout.css";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <NavbarAdmin />
      <div className="admin-main-content">
        <HeaderAdmin />
        <div className="admin-page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;