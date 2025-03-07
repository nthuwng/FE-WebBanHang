import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import SignInPage from "../pages/SignInPage/SignInPage.jsx";
import Register from "../pages/RegisterPage/RegisterPage.jsx";

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
    ],
  },

  {
    path: "/sign-in",
    element: <SignInPage />,
  },

  {
    path: "/sign-up",
    element: <Register />,
  },
]);

export default router;
