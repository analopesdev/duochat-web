import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "../login";
import App from "../../App";
import { Rooms } from "../rooms";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/rooms", element: <Rooms /> }, // protegida (via App)
      // { path: "/rooms/:id", element: <Room /> }, // protegida (via App)
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
