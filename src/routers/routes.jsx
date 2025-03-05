import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import UserPage from "../pages/user.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import LoginForm from "../pages/SignInPage/SignInPage.jsx";
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
    path: "/login",
    element: <LoginForm />,
  },
]);

export default router;
