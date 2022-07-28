import type { FC } from "react"
import React from "react"

interface PlusIconProps {
  width: number,
  height: number
}
const PlusIcon: FC<PlusIconProps> = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 14.1071L13.8571 14.1071L13.8571 4.25H17.1429L17.1429 14.1071L27 14.1071V17.3929H17.1429V27.25H13.8571L13.8571 17.3929L4 17.3929V14.1071Z" fill="white" />
    </svg>

  )
}

export default PlusIcon
