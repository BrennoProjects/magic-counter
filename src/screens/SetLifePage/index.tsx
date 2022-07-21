import { useNavigate } from "react-router-dom";

import * as S from "./style";
import BackArrow from "../../assets/BackArrow";
import Button from "../../components/button";
import Text from "../../components/Text";
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";
import setConfig from "../../utils/setConfig";

const SetLifePage = () => {
  const navigate = useNavigate();
  return (
    <S.WrapperSetLifePage>
      <NavBar>
        <Button
          width={"30px"}
          height={"30px"}
          border={false}
          onClick={() => navigate(-1)}
        >
          <BackArrow />
        </Button>
      </NavBar>
      <Title>Initial Life</Title>
      <S.WrapperButtons>
        <Button
          onClick={() => {localStorage.setItem("initialLife", "60"), navigate("/set-players-number")}}
          width="9.375rem"
        >
          <Text>60</Text>
        </Button>
        <Button
          onClick={() => {localStorage.setItem("initialLife", "40"), navigate("/set-players-number")}}
          width="9.375rem"
        >
          <Text>40</Text>
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button
         onClick={() => {localStorage.setItem("initialLife", "30"), navigate("/set-players-number")}}
          width="9.375rem"
        >
          <Text>30</Text>
        </Button>
        <Button
          onClick={() => {localStorage.setItem("initialLife", "20"), navigate("/set-players-number")}}
          width="9.375rem"
        >
          <Text>20</Text>
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button onClick={() => localStorage.setItem("InitialLife", "custom")}>
          <Text>custom</Text>
        </Button>
      </S.WrapperButtons>
    </S.WrapperSetLifePage>
  );
};

export default SetLifePage;
