import type { FC } from "react";
import { useNavigate } from "react-router-dom"
import MagicCounterLogo from "../../assets/HomePageLogo";
import Button from "../../components/button";
import * as S from "./style";


const Home: FC = () => {
  const Navigate = useNavigate()
  return (
    <S.HomeDiv>
      <MagicCounterLogo />
      <S.BoxTextButton>
        <S.H1>Magic Counter</S.H1>
        <Button onClick={() => Navigate("/life-page")}>
          <S.TextButton>Start</S.TextButton>
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
    </S.HomeDiv>
  );
};
export default Home;
