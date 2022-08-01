import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react"
import type { FC } from "react"

import * as S from "./style"
import HeartIcon from "../../assets/HeartIcon"
import MinusIcon from "../../assets/MinusIcon"
import PlusIcon from "../../assets/PlusIcon"
import Button from "../button"


interface PlayerCounterProps {
  rotate?: string,
}

const PlayerCounter: FC<PlayerCounterProps> = (props) => {

  const { rotate = 'unset' } = props
  const WrapperPlayerRef = useRef() as React.MutableRefObject<HTMLDivElement>
  let playerHeightDiv: number = 0
  let partialValueDrawer: number = 0
  let percent: number = 10
  let initialPosition:number = 0
  let currentPosition:number = 0
  const [percentOpenDrawer, setPercentOpenDrawer] = useState<number>(10)
  //const [initialAxisY, setInitialAxisY] = useState<number>(325)



  const handleInitialAxisY = useCallback((y: number) => {
    initialPosition = y
  }, [])

  const handleDrawer = useCallback((y: number): void => {
    
    currentPosition = y
    if (initialPosition < currentPosition ) {
      partialValueDrawer = (currentPosition - initialPosition)
      console.log('first currentPosition',currentPosition, 'initialPosition',initialPosition)
    } else if(initialPosition > currentPosition){
      partialValueDrawer = (initialPosition - currentPosition)
      console.log('second initialPosition',initialPosition, 'currentPosition',currentPosition)
    } 
    percent = (partialValueDrawer * 100) / playerHeightDiv
    if(percent>10){
      setPercentOpenDrawer(percent)
    }else{
      setPercentOpenDrawer(10)
    } 

  }, [])


  useEffect(() => {
    playerHeightDiv = WrapperPlayerRef.current.clientHeight
    console.log(percentOpenDrawer)
  }, [percentOpenDrawer])


  return (
    <S.WrapperPlayer ref={WrapperPlayerRef} rotate={rotate} >
      <S.WrapperText>
        <PlusIcon width={40} height={40} />
        <>
          <S.TextHud fontSize="80px">40</S.TextHud>
          <HeartIcon width={30} height={30} />
        </>
        <MinusIcon width={40} height={40} />
        <S.Drawer height={Math.round(percentOpenDrawer)} onTouchStart={(e) => handleInitialAxisY(e.touches[0].clientY)} onTouchMove={(e) => handleDrawer(e.touches[0].pageY)} >
          <S.Hr />
        </S.Drawer>
      </S.WrapperText>
    </S.WrapperPlayer>
  )
}

export default PlayerCounter