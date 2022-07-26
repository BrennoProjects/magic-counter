import type { RouteObject } from "react-router-dom";
import Home from "./screens/Home";
import SetLifePage from "./screens/SetLife";
import SetupPosition from "./screens/SetupPosition";

const routes: RouteObject[] = [
  {path: '/', element:<Home />,},
  {path: '/set-life', element:<SetLifePage />,},
  {path: '/set-position', element:<SetupPosition />,}
]
export default routes
