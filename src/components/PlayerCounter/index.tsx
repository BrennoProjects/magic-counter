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
  position?: 'relative' | 'fixed' | 'absolute'
}

const PlayerCounter: FC<PlayerCounterProps> = (props) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { handleLifePlayer, handleSetCounter, handleChangeCounters, players } = useContext(GameSetupContext);
  const { rotate = 'unset', width, height, life, id, marginBottom = 'unset', position = 'relative' } = props;
  const [counters, setCounters] = useState(players.find(x => x.id === id)?.counters);
  const handleSetCounters = useCallback(() => setCounters(players.find(x => x.id === id)?.counters), []);
  const [lengthCounters, setLengthCounters] = useState<number>(0);
  const handleSetLengtCounters = useCallback(() => {
    if (Object.keys(counters).length !== undefined) {
      setLengthCounters(Object.keys(counters).length);
    } else {
      setLengthCounters(0);
    }
  }, []);

  useEffect(() => {
    handleSetCounters();
    handleSetLengtCounters();
    console.log(lengthCounters);
  });

  const handleDrawer = (value: boolean): void => {
    if (!value) {
      setOpenDrawer(true);
    } else {
      setOpenDrawer(false);
    }
  };
  const handleShowCounters = (counter: 'infect' | 'poison' | 'commanderDamage', counterValue: number | undefined, svg: JSX.Element): JSX.Element | undefined => {
    if (counterValue !== undefined) {
      return (
        <S.WrapperLife lenghtCounters={lengthCounters}>
          <S.WrapperCount lenghtCounters={lengthCounters}>
            <Button onClick={() => handleChangeCounters(id, true, counter)} height="48%" width="100%" border={false} background="transparent">
              <></>
            </Button>
            <Button onClick={() => handleChangeCounters(id, false, counter)} height="48%" width="100%" border={false} background="transparent">
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
    <S.WrapperPlayer rotate={rotate} width={width} height={height} marginBottom={marginBottom} position={position} lenghtCounters={lengthCounters}>
      <S.WrapperLife lenghtCounters={lengthCounters}>
        <S.WrapperCount lenghtCounters={lengthCounters}>
          <Button onClick={() => handleLifePlayer(id, true)} height="48%" width="100%" border={false} background="transparent">
            <></>
          </Button>
          <Button onClick={() => handleLifePlayer(id, false)} height="48%" width="100%" border={false} background="transparent">
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
      <S.Drawer handleDrawer={openDrawer}>
        <S.Hr onClick={() => handleDrawer(openDrawer)} handleDrawer={openDrawer} />
        <S.WrapperCounters handleDrawer={openDrawer}>
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
    </S.WrapperPlayer>
  );
};

export default PlayerCounter;
