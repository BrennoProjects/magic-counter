import type { RouteObject } from "react-router-dom";
import Home from "./screens/Home";
import SetLifePage from "./screens/SetLife";
import SetPosition from "./screens/SetPosition";

const routes: RouteObject[] = [
  {path: '/', element:<Home />,},
  {path: '/set-life', element:<SetLifePage />,},
  {path: '/set-position', element:<SetPosition />,}
]
export default routes
