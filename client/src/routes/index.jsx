import * as p from "../constants/path";
import { Home } from "../pages";
import Root from "./Root";

const routes = [
  {
    path: p.ROOT,
    element: <Root />,
    children: [{ path: p.ROOT, element: <Home /> }],
  },
];

export default routes;
