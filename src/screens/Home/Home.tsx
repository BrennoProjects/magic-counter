import { FC } from "react";
import MagicCounterLogo from "../../assets/HomePageLogo";
import Button from "../../components/button";
import Navigate from "../../utils/navigate";
import * as S from "./style";

const Home: FC = () => {
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
