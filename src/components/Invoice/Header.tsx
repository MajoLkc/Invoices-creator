import { Typography } from "antd"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

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
  margin: 1px;
  font-weight: normal;
  text-transform: uppercase;
`

const Header = () => {
  const { t } = useTranslation(["invoice"])
  return (
    <Box>
      <TitleText level={2}>{t("Invoice")}</TitleText>
      <TitleText level={2}>FA001</TitleText>
    </Box>
  )
}

export default Header
