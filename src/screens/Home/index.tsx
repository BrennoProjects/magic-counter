import type { FC } from "react";
import { useNavigate } from "react-router-dom"
import MagicCounterLogo from "../../assets/Logo";
import Button from "../../components/button";
import Text from "../../components/Text";
import Title from "../../components/Title";
import * as S from "./style";


const Home: FC = () => {
  const Navigate = useNavigate()
  return (
    <S.WrapperHome>
      <MagicCounterLogo />
      <S.BoxTextButton>
        <Title>Magic Counter</Title>
        <Button onClick={() => Navigate("/set-life")}>
          <Text margin={"20px 0px"}>Start</Text>
        </Button>
      </S.BoxTextButton>
      <S.BoxAboutUs>
        <Button
          onClick={() => Navigate("/about-us")}
          border={false}
          width={"auto"}
          height={"auto"}
        >
          <S.AboutUs>About us</S.AboutUs>
        </Button>
      </S.BoxAboutUs>
    </S.WrapperHome>
  );
};
export default Home;
