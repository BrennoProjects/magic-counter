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
  let arr: [number, number] = [0, 0]
  const [percentOpenDrawer, setPercentOpenDrawer] = useState<number>(10)
  //const [initialAxisY, setInitialAxisY] = useState<number>(325)



  const handleInitialAxisY = useCallback((y: number) => {
    arr[0] = y
  }, [])


  const handleDrawer = useCallback((y: number): void => {
    arr[1] = y
    partialValueDrawer = (arr[0] - arr[1])
    percent = ((partialValueDrawer * 100) / playerHeightDiv) + 5
    if (percent === 100) { }
    if (percent < 101 && percent > 10) {
      setPercentOpenDrawer(percent)
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
        <S.Drawer height={String(percentOpenDrawer + '%')} onTouchMove={(e) => handleDrawer(e.touches[0].clientY)} onTouchStart={(e) => handleInitialAxisY(e.touches[0].clientY)}>
          <S.Hr />
        </S.Drawer>
      </S.WrapperText>
    </S.WrapperPlayer>
  )
}

export default PlayerCounter