import type { FC } from "react"
import React from "react"

interface PlusIconProps {
  width: number,
  height: number
}
const PlusIcon: FC<PlusIconProps> = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.833323 10.0834L10.8333 10.0834L10.8333 0.0834141H14.1667L14.1667 10.0834L24.1667 10.0834V13.4167L14.1667 13.4167L14.1667 23.4167H10.8333L10.8333 13.4167L0.833323 13.4167V10.0834Z" fill="white" />
    </svg>

  )
}

export default PlusIcon
