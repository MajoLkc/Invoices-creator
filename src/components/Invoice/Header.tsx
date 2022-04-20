import styled from "styled-components"
import { useTranslation } from "react-i18next"
import MainText from "../MainText"

const Box = styled.div`
  margin: 0 -1px;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
`

const Header: React.FC = () => {
  const { t } = useTranslation(["invoice"])
  return (
    <Box>
      <MainText isUppercase={true}>{t("Invoice")}</MainText>
      <MainText isUppercase={false}>fa01258pkfds</MainText>
    </Box>
  )
}

export default Header
