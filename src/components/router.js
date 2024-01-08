import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Navbar from "./Navbar";
import ProductData from "./ProductData";
import Cart from "./Cart";
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
        path: "productdata/:id",
        element: <ProductData />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
export default router;
