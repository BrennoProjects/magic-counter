import styled from "styled-components";
import Button from "./components/button";
function App() {
  const App = styled.div``;

  return (
    <App className="App">
      <Button width={'100%'} height={'70px'} border background={"#000000"} fullRadius={false}>
        Start
      </Button>
    </App>
  );
}

export default App;
