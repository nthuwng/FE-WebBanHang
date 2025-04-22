import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
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
import AdminUsersPage from "../pages/admin/AdminUsersPage/AdminUsersPage.jsx";
=======


import ProductPage from "../pages/ProductPage/ProductPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import SignInPage from "../pages/SignInPage/SignInPage.jsx";

import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import AdminPage from "../pages/AdminPage/AdminPage.jsx";
import LoginAdminPage from "../pages/LoginAdminPage/LoginAdminPage.jsx";
import AdminUser from "../components/AdminUser/AdminUser.jsx";
>>>>>>> ced4914ffc15eee44bbd42ee98e48a21de826ab5

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
      {
        path: "/admin/users",
        element: <AdminUsersPage />,
      },
    ],
  },
  {
<<<<<<< HEAD
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/test",
    element: <Iphone_information_product />,
  },
=======
    path: "/sign-up",
    element: <RegisterPage />,
  },

  {
    path: "/admin",
    element: <AdminPage />,
    

  
       
    
  }, 
  {
    path: "/login-admin",
    element: <LoginAdminPage />,
  },
  {
    path: "/admin-user",
    element: <AdminUser/>,
  },

 
  
  
>>>>>>> ced4914ffc15eee44bbd42ee98e48a21de826ab5
]);

export default router;
