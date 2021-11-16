import { Table } from "antd"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import MainText from "../MainText"

const Box = styled.div`
  width: 45%;
  height: 260px;
  display: inline-block;
`

const Provider = () => {
  const [vatPayer, setVatPayer] = useState(false)
  const { t } = useTranslation(["invoice"])
  const personColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "number",
      dataIndex: "number",
      key: "number",
    },
  ]
  const personData = [
    { key: "1", name: t("Provider.ID"), number: 44111122 },
    { key: "2", name: t("Provider.VAT1"), number: 44111122 },
    {
      key: "3",
      name: vatPayer ? t("Provider.VAT2") : t("Provider.VATnonPayer"),
      number: vatPayer ? 44111122 : null,
    },
  ]
  const accountData = [
    { key: "1", name: t("Provider.Account"), number: 2195894843134861445 },
    { key: "2", name: t("Provider.Bank"), number: "Taktra banka, a.s." },
    {
      key: "3",
      name: t("Provider.IBAN"),
      number: "SK75006000000001211589641",
    },
  ]
  return (
    <Box>
      <MainText level={2}>Meno firmy</MainText>
      <MainText level={3}>Ulica 290/85</MainText>
      <MainText level={3}>038 52 Kosice</MainText>
      <Table
        dataSource={personData}
        columns={personColumns}
        pagination={false}
        showHeader={false}
      />
      <Table
        dataSource={accountData}
        columns={personColumns}
        pagination={false}
        showHeader={false}
      />
    </Box>
  )
}

export default Provider
