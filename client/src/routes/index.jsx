import * as p from "../constants/routes";
import { Home, Login, NotFound, Profile, Schedule, Signup, Standings } from "../pages";
import Root from "./Root";

const routes = [
  {
    path: p.ROOT,
    element: <Root />,
    children: [
      { path: p.ROOT, element: <Home /> },
      { path: p.SCHEDULE, element: <Schedule /> },
      { path: p.STANDINGS, element: <Standings /> },
      { path: p.LOGIN, element: <Login /> },
      { path: p.SIGNUP, element: <Signup /> },
      { path: p.PROFILE, element: <Profile /> },
      { path: p.NOT_FOUND, element: <NotFound /> },
    ],
  },
];

export default routes;
