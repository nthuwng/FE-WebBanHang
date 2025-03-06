import { createBrowserRouter } from "react-router-dom";


import ProductPage from "../pages/ProductPage/ProductPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import SignInPage from "../pages/SignInPage/SignInPage.jsx";

import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import AdminPage from "../pages/AdminPage/AdminPage.jsx";
import LoginAdminPage from "../pages/LoginAdminPage/LoginAdminPage.jsx";
import AdminUser from "../components/AdminUser/AdminUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/products",
        element: <ProductPage />,
      },
    ],
  },

  {
    path: "/sign-in",
    element: <SignInPage />,
  },

  {
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

 
  
  
]);



export default router;
