import { useCallback, useState } from "react"
import type { FC } from "react"

import * as S from "./style"
import PlayerCounter from "../../components/PlayerCounter"
import { GameSetupContext } from "../../context/GameSetupContext"

interface GameProps {

}

const Game: FC<GameProps> = () => {
  const tableForTwo = useCallback(() => (
    <>
        <PlayerCounter></PlayerCounter>
        <PlayerCounter></PlayerCounter>
    </>

  ), [])
  return (
    <S.Game>
      {tableForTwo()}
    </S.Game>
  )
}

export default Game