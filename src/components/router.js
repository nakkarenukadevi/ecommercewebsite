import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Navbar from "./Navbar";
import SingleProduct from "./SingleProduct";

import Slider from "./Slider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Slider />,
      },
      {
        path: "navbar",
        element: <Navbar />,
      },

      {
        path: "singleproduct/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);
export default router;
