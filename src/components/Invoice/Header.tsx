import { Typography } from "antd"
import styled from "styled-components"

const Box = styled.div`
  margin: 0;
  padding: 0;
  height: 30px;
  border: 3px solid black;
  display: flex;
  justify-content: space-between;
`

const { Title } = Typography

const TitleText = styled(Title)`
  margin: 0px;
  font-weight: normal;
`

const Header = () => {
  return (
    <Box>
      <TitleText level={2}>FAKTÚRA</TitleText>
      <TitleText level={2}>FA001</TitleText>
    </Box>
  )
}

export default Header
