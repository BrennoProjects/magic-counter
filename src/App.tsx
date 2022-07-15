import styled from "styled-components";
import { useRoutes, BrowserRouter, Router, Routes } from "react-router-dom";
import routes from "./router";
import Home from "./screens/Home";

function App() {
  const Screens = useRoutes(routes);
  console.log(Screens, "teste");
  const App = styled.div``;
  return (
    <App className="App">
      {Screens}
    </App>
  );
}

export default App;
