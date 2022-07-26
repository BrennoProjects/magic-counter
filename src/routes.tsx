import type { RouteObject } from "react-router-dom";
import Home from "./screens/Home";
import SetLifePage from "./screens/SetupLife";
import SetPlayer from "./screens/SetupPlayer";

const routes: RouteObject[] = [
  {path: '/', element:<Home />,},
  {path: '/set-life', element:<SetLifePage />,},
  {path: '/set-players', element:<SetPlayer />,}
]
export default routes
