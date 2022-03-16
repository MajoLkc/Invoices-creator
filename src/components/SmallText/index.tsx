import styled from "styled-components"

const Text = styled.p`
  font-size: 10px;
  margin: 2px;
`

type TextProps = {
  label: string
}

const SmallText: React.FC<TextProps> = ({ label }) => <Text>{label}</Text>

export default SmallText
