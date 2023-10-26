import { useCallback, useContext, useEffect, useState } from 'react';
import type { FC } from 'react';
import { PlayerID, GameSetupContext } from '../../context/GameSetupContext';

import * as S from './style';
import HeartIcon from '../../assets/HeartIcon';
import Button from '../button';
import CommanderDamage from '../../assets/CommanderDamage';
import Infect from '../../assets/Infect';
import Poison from '../../assets/poison';
import Monarch from '../../assets/Monarch';

interface PlayerCounterProps {
  rotate?: string | 'rotate(90deg)' | 'rotate(-90deg)' | 'rotate(180deg)'
  width: string
  height: string
  life: number
  id: PlayerID
  marginBottom?: string
  marginTop?: string
  margin?: string
  position?: 'relative' | 'fixed' | 'absolute'
  setShowMenu: (value: boolean) => void

}

const PlayerCounter: FC<PlayerCounterProps> = (props) => {
  const { handleLifePlayer, handleSetCounter, handleChangeCounters, players, handleMenuPlayerController, getPlayer } = useContext(GameSetupContext);
  const { rotate = 'rotate(0deg)', width, height, life, id, marginBottom = '', margin = '', marginTop = '', position = 'relative' } = props;
  // const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [monarch, setMonarch] = useState<boolean | any>(players.find(x => x.id === id)?.monarch);
  const [counters, setCounters] = useState<any>(players.find(x => x.id === id)?.counters);
  const [lengthCounters, setLengthCounters] = useState<number>(0);
  const handleSetCounters = useCallback(() => setCounters(players.find(x => x.id === id)?.counters), []);

  const drawerState = (): boolean => {
    const player = getPlayer(id);
    if (player !== undefined) {
      return player.isMenuPlayerOpen;
    }
    return false;
  };

  const handleSetMonarch = useCallback(() => setMonarch(players.find(x => x.id === id)?.monarch), []);
  const handleSetLengthCounters = useCallback(() => {
    if (Object.keys(counters).length !== undefined) {
      setLengthCounters(Object.keys(counters).length);
    } else {
      setLengthCounters(0);
    }
  }, []);

  useEffect(() => {
    handleSetCounters();
    handleSetLengthCounters();
    handleSetMonarch();
  });

  const handleDrawer = (value: boolean): void => {
    if (!value) {
      // setOpenDrawer(true);
      handleMenuPlayerController(id, true);
      props.setShowMenu(false);
    } else {
      // setOpenDrawer(false);
      handleMenuPlayerController(id, false);
      props.setShowMenu(true);
    }
  };

  const handleMonarch = (isMonarch: boolean): any => {
    if (isMonarch) {
      return (
        <S.WrapperMonarch>
          <Monarch />
        </S.WrapperMonarch>
      );
    }
  };

  const handleShowCounters = (counter: 'infect' | 'poison' | 'commanderDamage', counterValue: number | undefined, svg: JSX.Element): JSX.Element | undefined => {
    if (counterValue !== undefined) {
      return (
        <S.WrapperLife lenghtCounters={lengthCounters}>
          <S.WrapperCount lenghtCounters={lengthCounters}>
            <Button rounded={'none'} onClick={() => handleChangeCounters(id, true, counter)} height="48%" width="100%" border={false} background="transparent">
              <></>
            </Button>
            <Button rounded={'none'} onClick={() => handleChangeCounters(id, false, counter)} height="48%" width="100%" border={false} background="transparent">
              <></>
            </Button>
          </S.WrapperCount>
          <>
            <S.TextHud fontSize="4em">{counterValue}</S.TextHud>
            {svg}
          </>
        </S.WrapperLife>
      );
    }
  };

  return (
    <S.Wrapper
      margin={margin}
      width={width}
      height={height}
      marginBottom={marginBottom}
      marginTop={marginTop}
      rotate={rotate}
    >
      <S.WrapperPlayer
        width={width}
        height={height}
        marginBottom={marginBottom}
        position={position}
        lenghtCounters={lengthCounters}
        handleDrawer={drawerState()}
      >
        {handleMonarch(monarch)}
        <S.WrapperLife lenghtCounters={lengthCounters}>
          <S.WrapperCount lenghtCounters={lengthCounters}>
            <Button rounded={'none'} onClick={() => handleLifePlayer(id, true)} height="48%" width="100%" border={false} background="transparent">
              <></>
            </Button>
            <Button rounded={'none'} onClick={() => handleLifePlayer(id, false)} height="48%" width="100%" border={false} background="transparent">
              <></>
            </Button>
          </S.WrapperCount>
          <>
            <S.TextHud fontSize="4em">{life}</S.TextHud>
            <HeartIcon width={30} height={30} />
          </>
        </S.WrapperLife>
        {handleShowCounters('commanderDamage', counters?.commanderDamage, CommanderDamage())}
        {handleShowCounters('infect', counters?.infect, Infect())}
        {handleShowCounters('poison', counters?.poison, Poison())}
      </S.WrapperPlayer>
      <S.Drawer handleDrawer={drawerState()} totalHeight={height}>
        <S.Hr onClick={() => handleDrawer(drawerState())} handleDrawer={drawerState()} />
        <S.WrapperCounters handleDrawer={drawerState()}>
          <Button onClick={() => handleSetCounter(id, 'commanderDamage')} border={false} background="transparent" height="100px">
            <CommanderDamage />
          </Button>
          <Button onClick={() => handleSetCounter(id, 'infect')} border={false} background="transparent" height="100px">
            <Infect />
          </Button>
          <Button onClick={() => handleSetCounter(id, 'poison')} border={false} background="transparent" height="100px">
            <Poison />
          </Button>
          <Button onClick={() => handleSetCounter(id, 'monarch')} border={false} background="transparent" height="100px">
            <Monarch />
          </Button>
        </S.WrapperCounters>
      </S.Drawer>
    </S.Wrapper>

  );
};

export default PlayerCounter;
