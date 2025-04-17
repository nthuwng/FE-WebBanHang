import { Navigate } from "react-router-dom";

// ProtectedRoute component
const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || user.role !== "admin") {
    return <Navigate to="/login" />;
  }
  return "hehe";

};

export default ProtectedRoute;
