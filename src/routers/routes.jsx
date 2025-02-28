import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import UserPage from "../pages/user.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
]);

export default router;
