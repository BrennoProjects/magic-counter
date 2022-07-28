import { useCallback } from "react"
import type { FC } from "react"

import * as S from "./style"
import HeartIcon from "../../assets/HeartIcon"
import MinusIcon from "../../assets/MinusIcon"
import PlusIcon from "../../assets/PlusIcon"


interface PlayerCounterProps {

}

const PlayerCounter: FC<PlayerCounterProps> = () => {
  return (
    <S.WrapperPlayer>
      <S.WrapperText>
        <PlusIcon width={40} height={40} />
        <>
        <S.TextHud fontSize="80px">40</S.TextHud>
        <HeartIcon width={30} height={30} />
        </>
        <MinusIcon width={40} height={40} />
      </S.WrapperText>
    </S.WrapperPlayer>
  )
}

export default PlayerCounter