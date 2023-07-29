import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Main from "./Layout/Main";
import Orders from "./Component/Orders/Orders";

import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import { Toaster } from "react-hot-toast";

import ReviewPage from "./Component/Orders/ReviewPage";
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute";
import DashboardLayout from "./Layout/DashboardLayout";
import MyPanel from "./Component/Dashboard/MyPanel/MyPanel";
import AllUsers from "./Component/Dashboard/AllUsers/AllUsers";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () =>
            fetch("https://watch-shop-server.vercel.app/watchCollections"),
          element: <Home></Home>,
        },

        {
          path: "/orders",
          element: <Orders></Orders>,
        },

        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/review",
          element: (
            <PrivateRoute>
              <ReviewPage></ReviewPage>
            </PrivateRoute>
          ),
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },

    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <DashboardLayout></DashboardLayout>
        </PrivateRoute>
      ),
      children: [
        {
          path: "/dashboard/mypanel",
          element: <MyPanel></MyPanel>,
        },
        {
          path: "/dashboard/allusers",
          element: <AllUsers></AllUsers>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
