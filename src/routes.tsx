import type { RouteObject } from "react-router-dom";
import Home from "./screens/Home";
import SetupLifePage from "./screens/SetupLife";
import SetupPlayer from "./screens/SetupPlayer";

const routes: RouteObject[] = [
  {path: '/', element:<Home />,},
  {path: '/set-life', element:<SetupLifePage />,},
  {path: '/set-players', element:<SetupPlayer />,}
]
export default routes
