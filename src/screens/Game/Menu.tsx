import { CSSProperties, useTheme } from 'styled-components';
import Logo from '../../assets/Logo';
import { useContext } from 'react';
import { GameMenuContext } from '../../context/GameMenuScreen';

export interface IMenuProps{
  show: boolean
  buttonPosition: 'middle' | 'top'
}

const Menu = ({ show, buttonPosition }: IMenuProps): JSX.Element => {
  const theme = useTheme();
  const { setShowMenuScreen } = useContext(GameMenuContext);
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
  return (
    <div
      style={{
        borderRadius: '100%',
        backgroundColor: `${theme.background}`,
        position: 'absolute',
        zIndex: show ? 10 : 0,
        padding: '8px',
        display: 'flex',
        justifyContent: 'center',
        transition: '0.5s',
        opacity: show ? 100 : 0,
        alignContent: 'center',
        ...buttonPositionConfig()
      }}
      onClick={() => setShowMenuScreen(true)}
    >
      <Logo size="35" />
    </div>
  );
};

export default Menu;
