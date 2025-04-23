import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ProductPage from "../pages/client/ProductPage/ProductPage.jsx";
import HomePage from "../pages/client/HomePage/HomePage.jsx";
import LoginPage from "../pages/client/LoginPage/LoginPage.jsx";
import CartPage from "../pages/client/CartPage/CartPage.jsx";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage/AdminDashboardPage.jsx";
import ProtectedRoute from "../components/common/admin/ProtectedRoute/ProtectedRoute.jsx";
import AdminLayout from "../components/layout/admin/AdminLayout/AdminLayout.jsx";
import AdminProductPage from "../pages/admin/AdminProductPage/AdminProductPage.jsx";
import AdminUsersPage from "../pages/admin/AdminUsersPage/AdminUsersPage.jsx";
import AdminOrdersPage from "../pages/admin/AdminOrdersPage/AdminOrdersPage.jsx";
import CheckoutPage from "../pages/client/CheckOutPage/CheckOutPage.jsx";

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
      {
        path: "/checkout",
        element: <CheckoutPage />,
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
      {
        path: "/admin/users",
        element: <AdminUsersPage />,
      },
      {
        path: "/admin/orders",
        element: <AdminOrdersPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
