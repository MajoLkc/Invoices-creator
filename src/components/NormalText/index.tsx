import { Typography } from "antd"
import styled from "styled-components"

const { Text } = Typography

type TextProps = {
  text: string
}

const StyledText = styled(Text)`
  font-size: 12px;
  margin: 2px 1px;
`

const NormalText: React.FC<TextProps> = ({ text }) => (
  <StyledText>{text}</StyledText>
)

export default NormalText
