import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import About from "@/pages/About";
import ProductDetails from "@/pages/ProductDetails";
import AllProducts from "@/pages/AllProducts";
import OrderVerification from "@/pages/VerifyOrder";
import PrivetRoute from "./PrivetRoute";
import Layout from "@/layout/layout";
import Profile from "@/pages/dashboard/Profile";
import MyOrder from "@/pages/dashboard/MyOrder";
import ManageProducts from "@/pages/dashboard/ManageProducts";
import ManageUsers from "@/pages/dashboard/ManageUsers";
import ManageOrders from "@/pages/dashboard/ManageOrder";
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
        path: "my-order",
        element: (
          <PrivetRoute>
            <MyOrder />
          </PrivetRoute>
        ),
      },
      {
        path: "manage-orders",
        element: (
          <PrivetRoute>
            <ManageOrders />
          </PrivetRoute>
        ),
      },
      {
        path: "manage-products",
        element: (
          <PrivetRoute>
            <ManageProducts />
          </PrivetRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivetRoute>
            <ManageUsers />
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
