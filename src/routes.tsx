import type { RouteObject } from "react-router-dom";
import Home from "./screens/Home";
import SetupLifePage from "./screens/SetupLife";
import SetupPosition from "./screens/SetupPosition";
import SetupPlayer from "./screens/SetupPlayer";

const routes: RouteObject[] = [
  {path: '/', element:<Home />,},
  {path: '/setup-life', element:<SetupLifePage />,},
  {path: '/setup-position', element:<SetupPosition />,},
  {path: '/setup-players', element:<SetupPlayer />,}
]
export default routes
