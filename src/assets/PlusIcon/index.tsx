import type { FC } from "react"
import React from "react"

interface PlusIconProps {
  width: number,
  height: number
}
const PlusIcon: FC<PlusIconProps> = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 14.25H14V5.25H17V14.25L26 14.25V17.25H17V26.25H14L14 17.25H5V14.25Z" fill="white" />
    </svg>
  )
}

export default PlusIcon
