import type { FC } from "react"
import React from "react"

interface MinusIconProps{
  width: number,
  height: number 
}
const MinusIcon:FC<MinusIconProps> = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.83334 18.75L32.1667 18.75V22.0834L8.83334 22.0834V18.75Z" fill="white"/>
    </svg>
    
  )
}

export default MinusIcon
