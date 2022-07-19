import type { RouteObject } from "react-router-dom";
import Home from "./screens/Home";
import SetLifePage from "./screens/SetLifePage";

const routes: RouteObject[] = [
  {path: '/', element:<Home />,},
  {path: '/set-life', element:<SetLifePage />,}
]
export default routes
