import { useCallback, useState } from "react"
import type { FC } from "react"

import * as S from "./style"
import PlayerCounter from "../../components/PlayerCounter"
import { GameSetupContext } from "../../context/GameSetupContext"

interface GameProps {

}

const Game: FC<GameProps> = () => {
  const [players, setPlayers] = useState<number>(4)
  const tableForOne = useCallback(() => (
    <>
      <PlayerCounter></PlayerCounter>
    </>

  ), [])
  const tableForTwo = useCallback(() => (
    <>
      <PlayerCounter rotate="rotate(180deg)"></PlayerCounter>
      <PlayerCounter></PlayerCounter>
    </>

  ), [])
  const tableForThree = useCallback(() => (
    <>
      <PlayerCounter rotate="rotate(180deg)"></PlayerCounter>
      <PlayerCounter></PlayerCounter>
      <PlayerCounter></PlayerCounter>
    </>

  ), [])
  const tableForFour = useCallback(() => (
    <>
      <S.RotatePlayers>
        <PlayerCounter rotate="rotate(180deg)"></PlayerCounter>
        <PlayerCounter></PlayerCounter>
      </S.RotatePlayers>
      <S.RotatePlayers>
        <PlayerCounter rotate="rotate(180deg)"></PlayerCounter>
        <PlayerCounter></PlayerCounter>
      </S.RotatePlayers>
        
    </>

  ), [])
  return (
    <S.Game>
      {tableForFour()}
    </S.Game>
  )
}

export default Game