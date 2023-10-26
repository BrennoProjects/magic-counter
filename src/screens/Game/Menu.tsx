import { CSSProperties, useTheme } from 'styled-components';
import Logo from '../../assets/Logo';
import { useContext } from 'react';
import { GameMenuContext } from '../../context/GameMenuScreen';
import { GameSetupContext } from '../../context/GameSetupContext';

export interface IMenuProps{
  show: boolean
  buttonPosition: 'middle' | 'top'
}

const Menu = ({ show, buttonPosition }: IMenuProps): JSX.Element => {
  const theme = useTheme();
  const { setShowMenuScreen, setIsFirstRender } = useContext(GameMenuContext);
  const { players } = useContext(GameSetupContext);
  const isMenuOpen = (): boolean => {
    return players.some((player) => player.isMenuPlayerOpen);
  };

  const buttonPositionConfig = (): CSSProperties => {
    if (buttonPosition === 'top') {
      return {
        top: '10px'
      };
    };
    return {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    };
  };

  const handleShowMenu = (): undefined => {
    setIsFirstRender(false);
    if (isMenuOpen()) {
      return undefined;
    }
    setShowMenuScreen(true);
  };
  return (
    <div
      style={{
        borderRadius: '100%',
        backgroundColor: `${theme.background}`,
        position: 'absolute',
        zIndex: 2,
        padding: '8px',
        display: 'flex',
        justifyContent: 'center',
        transition: '0.5s',
        opacity: isMenuOpen() ? 0 : 100,
        alignContent: 'center',
        ...buttonPositionConfig()
      }}
      onClick={() => handleShowMenu()}
    >
      <Logo size="35" />
    </div>
  );
};

export default Menu;
