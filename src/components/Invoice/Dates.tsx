import { useTranslation } from "react-i18next"
import styled from "styled-components"
import DateBox from "../DateBox"

const Box = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
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
