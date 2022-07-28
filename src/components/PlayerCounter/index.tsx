import { useCallback } from "react"
import type { FC } from "react"

import * as S from "./style"
import HeartIcon from "../../assets/HeartIcon"
import MinusIcon from "../../assets/MinusIcon"
import PlusIcon from "../../assets/PlusIcon"


interface PlayerCounterProps {
rotate?: string,
}

const PlayerCounter: FC<PlayerCounterProps> = (props) => {
  const {rotate='unset'} = props
  return (
    <S.WrapperPlayer rotate={rotate} >
      <S.WrapperText>
        <PlusIcon width={40} height={40} />
        <>
        <S.TextHud fontSize="80px">40</S.TextHud>
        <HeartIcon width={30} height={30} />
        </>
        <MinusIcon width={40} height={40} />
        <S.Drawer>
          <S.Hr/>
        </S.Drawer>
      </S.WrapperText>
    </S.WrapperPlayer>
  )
}

export default PlayerCounter