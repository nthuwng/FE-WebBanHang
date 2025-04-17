import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ProductPage from "../pages/client/ProductPage/ProductPage.jsx";
import HomePage from "../pages/client/HomePage/HomePage.jsx";
import LoginPage from "../pages/client/LoginPage/LoginPage.jsx";
import CartPage from "../pages/client/CartPage/CartPage.jsx";
import Iphone_information_product from "../components/common/client/Information_product/Iphone_information_product.jsx";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage/AdminDashboardPage.jsx";
import ProtectedRoute from "../components/common/admin/ProtectedRoute/ProtectedRoute.jsx";
import AdminLayout from "../components/layout/admin/AdminLayout/AdminLayout.jsx";
import AdminProductPage from "../pages/admin/AdminProductPage/AdminProductPage.jsx";

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
    element: (
      <ProtectedRoute requiredRole="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      {
        path: "/admin/products",
        element: <AdminProductPage />,
      },
    ],
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
