import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import routes from './routes';
import { useContext, useEffect } from 'react';
import { GameSetupContext } from './context/GameSetupContext';

function App (): JSX.Element {
  const Screens = useRoutes(routes);
  const navigate = useNavigate();
  const location = useLocation();
  const { initialLife, numberPlayers, players } = useContext(GameSetupContext);
  const accessIsAuthorized = (): void => {
    if (location.pathname === '/setup-players' && initialLife === 0) {
      navigate('/');
    }
    if (location.pathname === '/setup-position' && initialLife === 0 && numberPlayers === 0) {
      navigate('/');
    }
    if (location.pathname === '/game' && initialLife === 0 && numberPlayers === 0 && players.length === 1 && players[0].id === '') {
      navigate('/');
    }
  };
  useEffect(() => {
    accessIsAuthorized();
  }, []);
  return (
    <div className='App'>
      <div style={{ maxWidth: '400px', maxHeight: '800px', overflow: 'hidden' }}>
      {Screens}
      </div>
    </div>
  );
}

export default App;
