import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App (): JSX.Element {
  const Screens = useRoutes(routes);

  return (
    <div className='App'>
      {Screens}
    </div>
  );
}

export default App;
