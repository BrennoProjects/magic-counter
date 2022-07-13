import styled from "styled-components";
import Button from "./components/button";
function App() {
  const App = styled.div``;
  const Test = styled.span`
    font-size: 40px;
    font-weight: bold;
  `;
  return (
    <App className="App">
      
      <Button
        width={"100%"}
        height={"70px"}
        border
        background={"#000000"}
        fullRadius={false}
        positionAbsolute
        onClick={()=>{console.log('teste')}}
      >
        <Test>Start</Test>
      </Button>
    </App>
  );
}

export default App;
