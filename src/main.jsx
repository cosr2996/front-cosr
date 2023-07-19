import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import NuevoCertificate from "./pages/nuevoCertificate";
import NuevoProyecto from "./pages/NuevoProyecto";
import ErrorPage from "./components/ErrorPage";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },
      {
        path: "/certificates/:id",
        element: <Certificate />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:id",
        element: <Project />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/nuevoCertificate",
        element: <NuevoCertificate />,
      },
      {
        path: "/nuevoProject",
        element: <NuevoProyecto />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
