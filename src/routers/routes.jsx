import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import UserPage from "../pages/user.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;
