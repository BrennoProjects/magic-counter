import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  const Screens = useRoutes(routes);
 
  return (
    <div className="App">
      {Screens}
    </div>
  );
}

export default App;
