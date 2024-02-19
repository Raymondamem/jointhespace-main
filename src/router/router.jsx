import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../components/NotFound";
import Main from "../layouts/main";
import { Contact } from "../pages/Contact";
import { Articles } from "../pages/Articles";
import { Investors } from "../pages/Investors";
import { Services } from "../pages/Services";
import { Space } from "../pages/Space";
import { Projects } from "../pages/Projects";
import { Box } from "@react-three/drei";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/space-jobs",
        element: <Space />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/investors-hub",
        element: <Investors />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/test",
      //   element: <Box />,
      // },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <NotFound />
      </div>
    ),
  },
]);

export default router;
