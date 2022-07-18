import styled from "styled-components";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import palette from "./style/theme.ts";

function App() {
  const Screens = useRoutes(routes);
  const App = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${palette.black};
  `;
  return (
    <App className="App">
      {Screens}
    </App>
  );
}

export default App;
