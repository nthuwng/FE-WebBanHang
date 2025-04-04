import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routes";
import "./styles/global.css";
import { AuthWrapper } from "./components/context/auth.context";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
  // </StrictMode>
);
