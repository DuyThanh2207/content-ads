import { Navigate, createBrowserRouter } from "react-router-dom";
import Admin from "../pages/admin/index";
import Consumer from "../pages/consumer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/admin" replace={true} />,
  },
  {
    path: "admin",
    element: <Admin />,
  },
  {
    path: "consumer",
    element: <Consumer />,
  },
]);
