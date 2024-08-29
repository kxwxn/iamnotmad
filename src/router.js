import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import Landing from "./pages/Landing";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "about", element: <About /> },
    ],
  },
]);
