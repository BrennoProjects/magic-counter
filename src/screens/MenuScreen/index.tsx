import { FC, useContext } from 'react';
import * as S from './style';
import Button from '../../components/button';
import { GameMenuContext } from '../../context/GameMenuScreen';
import ResetIcon from '../../assets/ResetIcon';
import CloseIcon from '../../assets/CloseIcon';
import ConfigIcon from '../../assets/ConfigIcon';
import { useTheme } from 'styled-components';
import { GameSetupContext } from '../../context/GameSetupContext';
import { useNavigate } from 'react-router-dom';
import QuitGameSVG from '../../assets/QuitGame';

interface IMenuScreenProps {
  show: boolean
}
interface IOptionMenu {
  callback: () => void
  svg: JSX.Element
  text: string
}
const MenuScreen: FC<IMenuScreenProps> = (props) => {
  const { show } = props;
  const { handleResetGameState } = useContext(GameSetupContext);
  const theme = useTheme();
  const navigate = useNavigate();
  // const [firstRender, setFirstRender] = useState<boolean>(true);
  const { setShowMenuScreen, isFirstRender, setIsFirstRender } = useContext(GameMenuContext);

  const OptionMenu = ({ callback, text, svg }: IOptionMenu): JSX.Element => {
    return (
      <Button
        onClick={() => callback()}
        height="60px"
        background={theme.green}
        border={false}
        margin="10px"
        // width="100%"
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 0 0 10px',
            position: 'relative'
          }}
        >
          {svg}
          <p
            style={{
              color: theme.background,
              fontSize: '24px',
              fontWeight: 'bold',
              margin: '5px 15px'
            }}
          >
            {text}
          </p>
        </div>
      </Button>
    );
  };

  const handleResetGame = (): void => {
    handleResetGameState();
    setShowMenuScreen(false);
  };

  const handleReconfig = (path: string): void => {
    navigate(path);
    setShowMenuScreen(false);
    setIsFirstRender(true);
  };

  return (
      <S.MenuScreen firstRender={isFirstRender} show={show}>
        <S.WrapperButtons>
          <OptionMenu
            callback={() => setShowMenuScreen(false)}
            svg={<CloseIcon />}
            text="Quit menu"
          />
          <OptionMenu
            callback={() => handleResetGame()}
            svg={<ResetIcon />}
            text="Reset game"
          />
          <OptionMenu
            callback={() => handleReconfig('/setup-life')}
            svg={<ConfigIcon />}
            text="Reconfigure"
          />
          <OptionMenu
            callback={() => handleReconfig('/')}
            svg={<QuitGameSVG />}
            text="Quit game"
          />
        </S.WrapperButtons>
      </S.MenuScreen>
  );
};

export default MenuScreen;
