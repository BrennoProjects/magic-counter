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
  let pixelsMove: number =0
  let percent: number = 10
  let arr: [number, number] = [0, 0]
  const [percentOpenDrawer, setPercentOpenDrawer] = useState<number>(10)
  const [handleOpenDrawer, sethandleOpenDrawer] = useState<boolean>(false)
  //const [initialAxisY, setInitialAxisY] = useState<number>(325)



  const handleInitialAxisY = useCallback((y: number) => {
    arr[0] = y
    if(percent===100){
      partialValueDrawer=0
    }
  }, [])

  const handleDrawer = useCallback((y: number): void => {
    
    arr[1] = y
    if (arr[1] < arr[0]) {
      partialValueDrawer = (arr[1] - arr[0])
      percent = (partialValueDrawer * 100) / playerHeightDiv
      //console.log('first arr[1]',arr[1], 'arr[0]',arr[0])
    } else if(arr[0] > arr[1]){
      partialValueDrawer = (arr[0] - arr[1])
      //console.log('second arr[0]',arr[0], 'arr[1]',arr[1])
    }
    percent = (partialValueDrawer * 100) / playerHeightDiv
    
    setPercentOpenDrawer(percent*-1)

  }, [])


  useEffect(() => {
    playerHeightDiv = WrapperPlayerRef.current.clientHeight
    console.log(percentOpenDrawer)
  }, [/* percentOpenDrawer */])


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