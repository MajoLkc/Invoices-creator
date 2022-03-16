import { Table } from "antd"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import SmallText from "../SmallText"

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
        <Table
          dataSource={paymentData}
          columns={columns}
          pagination={false}
          showHeader={false}
        />
      </HeadBox>
      <HeadBox>
        <Table
          dataSource={symbolsData}
          columns={columns}
          pagination={false}
          showHeader={false}
        />
      </HeadBox>
      <SmallText label={t("Footer.Client")} />
    </Box>
  )
}

export default Client
