import type { RouteObject } from 'react-router-dom';
import Home from './screens/Home';
import SetupLifePage from './screens/SetupLife';
import SetupPosition from './screens/SetupPosition';
import SetupPlayer from './screens/SetupPlayer';
import Game from './screens/Game';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/setup-life', element: <SetupLifePage /> },
  { path: '/setup-position', element: <SetupPosition /> },
  { path: '/setup-players', element: <SetupPlayer /> },
  { path: '/Game', element: <Game /> }
];
export default routes;
