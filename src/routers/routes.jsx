import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ProductPage from "../pages/client/ProductPage/ProductPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import CartPage from "../pages/client/CartPage/CartPage.jsx";
import Iphone_information_product from "../components/common/Information_product/Iphone_information_product.jsx";
import HomePage from "../pages/client/HomePage/HomePage.jsx";
import AdminDashboard from "../pages/admin/AdminDashboardPage/AdminDashboardPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/carts",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/test",
    element: <Iphone_information_product />,
  },
]);

export default router;
