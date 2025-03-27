import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import CartPage from "../pages/CartPage/CartPage.jsx";
import Iphone_information_product from "../components/common/Information_product/Iphone_information_product.jsx";


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
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/test",
    element: <Iphone_information_product />,
  },
]);

export default router;
