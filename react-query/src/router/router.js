import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import SidePage from "../pages/side-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/side",
    element: <SidePage />,
  },
]);

export default router;
