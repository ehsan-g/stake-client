import { lazy } from "react";
import { Navigate } from "react-router-dom";
import TopAppBar from "../components/TopAppBar";
import Loadable from "../layout/full-layout/loadable/Loadable";

const FullLayout = Loadable(
  lazy(() => import("../layout/full-layout/FullLayout"))
);
const BlankLayout = Loadable(
  lazy(() => import("../layout/plain-layout/PlainLayout"))
);

const Main = Loadable(lazy(() => import("../pages/main")));

const Router = [
  {
    path: "/",
    element: (
      <>
        <TopAppBar />
        <FullLayout />
      </>
    ),
    children: [
      { path: "/", element: <Navigate to="/main" /> },
      { path: "/main", element: <Main /> },
      { path: "*", element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: "auth",
    element: <BlankLayout />,
    children: [{ path: "*", element: <Navigate to="/auth/404" /> }],
  },
];

export default Router;
