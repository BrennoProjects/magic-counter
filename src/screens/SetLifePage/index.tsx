import * as S from "./style";
import BackArrow from "../../assets/BackArrow";
import Button from "../../components/button";
const SetLifePage = () => {
  return (
    <S.WrapperSetLifePage>
      <S.WrapperButtons>
        <Button onClick={()=>localStorage.setItem('InitialLife', '60')} width="9.375rem">
          60
        </Button>
        <Button onClick={()=>localStorage.setItem('InitialLife', '40')} width="9.375rem">
          40
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button onClick={()=>localStorage.setItem('InitialLife', '30')} width="9.375rem">
          30
        </Button>
        <Button onClick={()=>localStorage.setItem('InitialLife', '20')} width="9.375rem">
          20
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button onClick={()=>localStorage.setItem('InitialLife', '30')}>
          custom
        </Button>
      </S.WrapperButtons>
    </S.WrapperSetLifePage>
  );
};

export default SetLifePage;
