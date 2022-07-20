import { Children, FC } from "react"
import FontTitle from "./style"

interface TitleProps{
  children: string
}

const Title: FC<TitleProps> = (props)=>{
  const {children} = props
  return <FontTitle>{children}</FontTitle>
}

export default Title
