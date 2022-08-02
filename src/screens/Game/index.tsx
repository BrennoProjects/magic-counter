import { useCallback, useState } from "react"
import type { FC } from "react"

import * as S from "./style"
import PlayerCounter from "../../components/PlayerCounter"
import { GameSetupContext } from "../../context/GameSetupContext"

interface GameProps {

}

const Game: FC<GameProps> = () => {
  const [players, setPlayers] = useState<number>(2)

  const tableForTwo = useCallback(() => {
    <>
      <PlayerCounter rotate="rotate(180deg)" />
      <PlayerCounter />
    </>
  }, [])
  const tableForTwoLateral = useCallback(() => {
    <>
      <PlayerCounter rotate="rotate(-90deg)" />
      <PlayerCounter rotate="rotate(90deg)" />
    </>
  }, [])

  return (
    <S.Game>
      <PlayerCounter rotate="rotate(-90deg)" isLateral={true}/>
      <PlayerCounter rotate="rotate(90deg)"  isLateral={true}/>
    </S.Game>
  )
}

export default Game