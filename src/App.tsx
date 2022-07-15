import styled from "styled-components";
import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  const Screens = useRoutes(routes);
  const App = styled.div``;
  return (
    <App className="App">
      {Screens}
    </App>
  );
}

export default App;
