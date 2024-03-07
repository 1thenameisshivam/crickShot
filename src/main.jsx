import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LandingPage from "./pages/LandingPage.jsx";
import IccRanking from "./pages/IccRanking.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import { Provider } from "react-redux";
import store from "./utility/store.js";

const router = createBrowserRouter([
  {
    path: "/main",
    element: <App />,
    children: [
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "/main/iccRanking",
        element: <IccRanking />,
      },
    ],
  },
  {
    path: "/",
    element: <LandingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
