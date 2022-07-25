import type { RouteObject } from "react-router-dom";
import Home from "./screens/Home";
import SetLifePage from "./screens/SetLife";
import SetPlayer from "./screens/SetPlayer";

const routes: RouteObject[] = [
  {path: '/', element:<Home />,},
  {path: '/set-life', element:<SetLifePage />,},
  {path: '/set-players', element:<SetPlayer />,}
]
export default routes
