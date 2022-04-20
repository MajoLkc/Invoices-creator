import styled from "styled-components"

type TextProps = {
  children: string
  isUppercase?: boolean
}

const TitleText = styled.span<TextProps>`
  margin: 0px 3px;
  font-size: 17px;
  font-weight: 600;
  text-transform: ${(props) => (props.isUppercase ? "uppercase" : null)};
`

const MainText: React.FC<TextProps> = ({ children, isUppercase }) => (
  <TitleText isUppercase={isUppercase}>{children}</TitleText>
)

export default MainText
