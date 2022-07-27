import type { FC } from "react";
import { useNavigate } from "react-router-dom"
import MagicCounterLogo from "../../assets/Logo";
import Button from "../../components/button";
import Text from "../../components/Text";
import Title from "../../components/Title";
import * as S from "./style";


const Home: FC = () => {
  const navigate = useNavigate()
  return (
    <S.WrapperHome>
      <MagicCounterLogo />
      <S.WrapperTextButton>
        <Title margin={"0 0 20px 0"}>Magic Counter</Title>
        <Button onClick={() => navigate("/setup-life")}>
          <Text>Start</Text>
        </Button>
      </S.WrapperTextButton>
      <S.WrapperAboutUs>
        <Button
          onClick={() => navigate("/about-us")}
          border={false}
          width={"auto"}
          height={"auto"}
        >
          <S.AboutUs>About us</S.AboutUs>
        </Button>
      </S.WrapperAboutUs>
    </S.WrapperHome>
  );
};
export default Home;
