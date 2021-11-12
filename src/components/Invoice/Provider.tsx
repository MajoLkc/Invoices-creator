import { Table, Typography } from "antd"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { useState } from "react"

const Box = styled.div`
  width: 45%;
  height: 260px;
  display: inline-block;
`

const { Title } = Typography

const TitleText = styled(Title)`
  margin: 1px;
  font-weight: normal;
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
      <TitleText level={2}>Meno firmy</TitleText>
      <TitleText level={3}>Ulica 290/85</TitleText>
      <TitleText level={3}>038 52 Kosice</TitleText>
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
