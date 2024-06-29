import * as p from "../constants/routes";
import { Dashboard, Home, Login, NotFound, Schedule, Signup, Standings } from "../pages";
import AuthorizedRoutes from "./AuthorizeRoutes";
import Root from "./Root";

const routes = [
  {
    path: p.ROOT,
    element: <Root />,
    children: [
      {
        path: p.DASHBOARD,
        element: (
          <AuthorizedRoutes>
            <Dashboard />
          </AuthorizedRoutes>
        ),
      },
      { path: p.LOGIN, element: <Login /> },
      { path: p.NOT_FOUND, element: <NotFound /> },
      { path: p.ROOT, element: <Home /> },
      { path: p.SCHEDULE, element: <Schedule /> },
      { path: p.SIGNUP, element: <Signup /> },
      { path: p.STANDINGS, element: <Standings /> },
    ],
  },
];

export default routes;
