import { useCallback, useContext, useEffect, useState } from "react"
import type { FC } from "react"


import * as S from "./style"
import PlayerCounter from "../../components/PlayerCounter"
import { GameSetupContext, ValuesPosition } from "../../context/GameSetupContext"

interface GameProps {

}

const Game: FC<GameProps> = () => {
  const {numberPlayers, positionPlayers , players} = useContext(GameSetupContext)
  const tableForOne = useCallback(() => (
    <>
      <PlayerCounter life={players[0].life} id={'ID_PLAYER_1'}/>
    </>
  ), [])

  const tableForTwo = useCallback(() => (
    <>
      <PlayerCounter rotate="rotate(180deg)"  life={players[0].life} id={'ID_PLAYER_1'}/>
      <PlayerCounter life={players[1].life} id={'ID_PLAYER_2'}/>
    </>
  ), [])
  const tableForTwoLateral = useCallback(() => (
    <>
      <PlayerCounter rotate="rotate(-90deg)" isLateral={true} life={players[0].life} id={'ID_PLAYER_1'}/>
      <PlayerCounter rotate="rotate(90deg)" isLateral={true} life={players[1].life} id={'ID_PLAYER_2'}/>
    </>
  ), [])
  const tableForThree = useCallback(() => (
    <>
        <PlayerCounter rotate="rotate(180deg)" life={players[0].life} id={'ID_PLAYER_1'} />
      <S.Rotate>
        <PlayerCounter rotate="rotate(180deg)" life={players[1].life} id={'ID_PLAYER_2'}/>
        <PlayerCounter  life={players[2].life} id={'ID_PLAYER_3'}/>
      </S.Rotate>
    </>
  ), [])
  const tableForFour = useCallback(() => (
    <>
      <S.Rotate>
        <PlayerCounter rotate="rotate(180deg)" life={players[0].life} id={'ID_PLAYER_1'}/>
        <PlayerCounter  life={players[1].life} id={'ID_PLAYER_2'}/>
      </S.Rotate>
      <S.Rotate>
        <PlayerCounter rotate="rotate(180deg)" life={players[2].life} id={'ID_PLAYER_3'}/>
        <PlayerCounter  life={players[3].life} id={'ID_PLAYER_4'}/>
      </S.Rotate>
    </>
  ), [])
  const tableForFourLateral = useCallback(() => (
    <>
      <S.Rotate>
        <PlayerCounter rotate="rotate(180deg)" life={players[0].life} id={'ID_PLAYER_1'}/>
        <PlayerCounter  life={players[1].life} id={'ID_PLAYER_2'}/>
      </S.Rotate>
      <S.Rotate>
        <PlayerCounter rotate="rotate(180deg)" life={players[2].life} id={'ID_PLAYER_3'}/>
        <PlayerCounter  life={players[3].life} id={'ID_PLAYER_4'}/>
      </S.Rotate>
    </>
  ), [])

  const tableGame = (number:number, position:ValuesPosition)=>{
   if(number===1) return tableForOne()
   if(number===3) return tableForThree()
   if(position != ValuesPosition.unset){
    if(number===2 && position===ValuesPosition.TwoPlayers) return tableForTwo()
    if(number===2 && position===ValuesPosition.TwoPlayersLateral) return tableForTwoLateral()
    if(number===4 && position===ValuesPosition.FourPlayers) return tableForFour()
    if(number===4 && position===ValuesPosition.TwoPlayersLateral) return tableForFourLateral() 
   }
  }
  return (
    <S.Game>
      {tableGame(numberPlayers, positionPlayers)}
    </S.Game>
  )
}

export default Game