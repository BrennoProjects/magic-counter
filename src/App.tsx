import styled from "styled-components";
import routes from "./router";
import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  const Screens = useRoutes(routes);
  const App = styled.div``;
  return (
    <App className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </App>
  );
}

export default App;
