import { Typography } from "antd"
import styled from "styled-components"

const { Title } = Typography

type TextProps = {
  children: string
  level: 1 | 2 | 3 | 4 | 5
  isUppercase?: boolean
}

const TitleText = styled(Title)<TextProps>`
  margin: 1px;
  font-weight: normal;
  text-transform: ${(props) => (props.isUppercase ? "uppercase" : null)};
`

const MainText = ({ children, level, isUppercase }: TextProps) => {
  return (
    <TitleText isUppercase={isUppercase} level={level}>
      {children}
    </TitleText>
  )
}

export default MainText
