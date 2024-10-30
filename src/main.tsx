import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Faucet from "./pages/Faucet.tsx";
import MainLayout from "./layouts/MainLayout.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <App />
      },

      {
        path: "/faucet",
        element: <Faucet />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
