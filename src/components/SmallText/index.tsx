import styled from "styled-components"

const Text = styled.p`
  font-size: 10px;
  margin: 2px;
`

interface TextProps {
  label: string
}

const SmallText = (props: TextProps) => {
  return <Text>{props.label}</Text>
}

export default SmallText
