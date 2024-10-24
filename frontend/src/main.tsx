import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TablePage from "./pages/TablePage";
import AboutPage from "./pages/AboutPage";
import MSABrowserPage from "./pages/MSABrowserPage";
import MainPage from "./pages/MainPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/table",
        element: <TablePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/msabrowser",
        element: <MSABrowserPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
