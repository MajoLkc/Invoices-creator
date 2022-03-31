import { useTranslation } from "react-i18next"
import styled from "styled-components"
import DateBox from "../DateBox"

const Box = styled.div`
  height: 60px;
  margin: 0 -1px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`

const Dates: React.FC = () => {
  const { t } = useTranslation(["invoice"])
  return (
    <Box>
      <DateBox date="20.3.2020" text={t("Dates.Issue")} />
      <DateBox date="20.3.2020" text={t("Dates.Delivery")} />
      <DateBox date="20.3.2020" text={t("Dates.Due")} />
    </Box>
  )
}

export default Dates
