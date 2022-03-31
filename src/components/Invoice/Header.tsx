import styled from "styled-components"
import { useTranslation } from "react-i18next"
import MainText from "../MainText"

const Box = styled.div`
  margin: 0 -1px;
  padding: 0;
  height: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
`

const Header: React.FC = () => {
  const { t } = useTranslation(["invoice"])
  return (
    <Box>
      <MainText isUppercase={true} level={2}>
        {t("Invoice")}
      </MainText>
      <MainText isUppercase={true} level={2}>
        fa001
      </MainText>
    </Box>
  )
}

export default Header
