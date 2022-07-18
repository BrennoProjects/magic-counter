import { FC } from "react";
import MagicCounterLogo from "../../assets/HomePageLogo";
import Button from "../../components/button";
import * as S from "./style";

const Home: FC = () => {
  return (
    <S.HomeDiv>
      <MagicCounterLogo />
      <S.BoxTextButton>
        <S.H1>Magic Counter</S.H1>
        <Button>
          <S.TextButton>Start</S.TextButton>
        </Button>
      </S.BoxTextButton>
      <S.BoxAboutUs>
        <Button border={false}>
          <S.AboutUs>About us</S.AboutUs>
        </Button>
      </S.BoxAboutUs>
    </S.HomeDiv>
  );
};
export default Home;
