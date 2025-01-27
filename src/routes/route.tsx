import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import About from "@/pages/About";
import ProductDetails from "@/pages/ProductDetails";
import AllProducts from "@/pages/AllProducts";
import OrderDetails from "@/pages/Order";
import OrderVerification from "@/pages/VerifyOrder";
import PrivetRoute from "./PrivetRoute";
import Layout from "@/layout/layout";
import Profile from "@/pages/dashboard/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/all-product",
        element: <AllProducts />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Layout />
      </PrivetRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/order",
        element: (
          <PrivetRoute>
            <OrderDetails />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/order/verification",
    element: <OrderVerification />,
  },
]);

export default router;
