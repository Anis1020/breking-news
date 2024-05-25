import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../shared/ErrorPage";
import Contact from "../pages/Contact";
import AllNews from "../pages/AllNews";
import Dashboard from "../dashboard/Dashboard";
import AddNews from "../dashboard/AddNews";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivetRoute from "./PrivetRoute";
import NewsDetails from "../components/home/NewsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/allNews",
        element: <AllNews></AllNews>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/details/:id",
        // loader: ({ params }) =>
        //   fetch(`http://localhost:3000/news/${params.id}`),
        element: (
          <PrivetRoute>
            <NewsDetails></NewsDetails>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard/postNews",
        element: <AddNews></AddNews>,
      },
    ],
  },
]);
