import { useContext, useState } from "react"
import type { FC } from "react"
import type { PlayerID } from "../../context/GameSetupContext"
import { GameSetupContext } from "../../context/GameSetupContext"

import * as S from "./style"
import HeartIcon from "../../assets/HeartIcon"
import MinusIcon from "../../assets/MinusIcon"
import PlusIcon from "../../assets/PlusIcon"
import Button from "../button"


interface PlayerCounterProps {
  rotate?: string |"rotate(90deg)" | "rotate(-90deg)" | "rotate(180deg)" ,
  isLateral?: boolean,
  life: number,
  id: PlayerID,

}

const PlayerCounter: FC<PlayerCounterProps> = (props) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const {handleLifePlayer} = useContext(GameSetupContext)
  let { rotate = 'unset', isLateral = false, life, id } = props 
  const handleDrawer = (value: boolean) => {
    if (value === false) {
      setOpenDrawer(true)
    } else {
      setOpenDrawer(false)
    }
  }
  
  return (
    <S.WrapperPlayer rotate={rotate} isLateral={isLateral}>
      <S.Wrapper>
        <Button onClick={()=>handleLifePlayer(id, true)} height="45%" width="100%" border={false} background="transparent">
          <></>
        </Button>
        <Button onClick={()=>handleLifePlayer(id, false)} height="45%" width="100%" border={false} background="transparent">
          <></>
        </Button>
      </S.Wrapper>
      <S.WrapperText>
        <PlusIcon width={40} height={40} />
        <>
          <S.TextHud fontSize="80px">{life}</S.TextHud>
          <HeartIcon width={30} height={30} />
        </>
        <MinusIcon width={40} height={40} />
        <S.Drawer handleDrawer={openDrawer}>
          <S.Hr onClick={() => handleDrawer(openDrawer)} handleDrawer={openDrawer} />
        </S.Drawer>
      </S.WrapperText>
    </S.WrapperPlayer>
  )
}

export default PlayerCounter