import styled from "styled-components"
import { useTranslation } from "react-i18next"
import SmallText from "../SmallText"
import BasicTable from "../BasicTable"

const Box = styled.div`
  width: 55%;
  height: 260px;
  display: inline-block;
`

const HeadBox = styled.div`
  margin: 0;
  padding: 0;
  width: 48.98%;
  height: 50px;
  display: inline-block;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
`

const Client: React.FC = () => {
  const { t } = useTranslation(["invoice"])
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "value",
      dataIndex: "value",
      key: "value",
    },
  ]
  const paymentData = [
    { key: "1", name: t("Payment.Payment"), value: t("Payment.Cash") },
  ]
  const symbolsData = [
    { key: "1", name: t("Payment.Symbols.Variable"), value: 44111122 },
    { key: "2", name: t("Payment.Symbols.Constant"), value: 44111122 },
  ]

  return (
    <Box>
      <HeadBox>
        <BasicTable
          data={paymentData}
          columns={columns}
        />
      </HeadBox>
      <HeadBox>
        <BasicTable
          data={symbolsData}
          columns={columns}
        />
      </HeadBox>
      <SmallText label={t("Footer.Client")} />
    </Box>
  )
}

export default Client
