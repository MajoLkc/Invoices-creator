import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import BasicTable from "../BasicTable"
import Address from "../Address"

const Box = styled.div`
  width: 45%;
  height: 260px;
  border-right: 1px solid black;
  display: inline-block;
  vertical-align: top;
`

const Provider: React.FC = () => {
  const [vatPayer, setVatPayer] = useState(false)
  const { t } = useTranslation(["invoice"])
  const personColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
  ]
  const personData = [
    { key: "1", name: t("Provider.ID"), value: 44111122 },
    { key: "2", name: t("Provider.VAT1"), value: 44111122 },
    {
      key: "3",
      name: vatPayer ? t("Provider.VAT2") : t("Provider.VATnonPayer"),
      value: vatPayer ? 44111122 : "",
    },
  ]
  const accountData = [
    { key: "1", name: t("Provider.Account"), value: 2195894843134861445 },
    { key: "2", name: t("Provider.Bank"), value: "Tatra banka, a.s." },
    {
      key: "3",
      name: t("Provider.IBAN"),
      value: "SK75006000000001211589641",
    },
  ]
  return (
    <Box>
      <Address
        name="Meno Firmy"
        street="Ulica"
        houseNumber={259}
        postalCode="033 22"
        city="Kosice"
      />
      <BasicTable data={personData} columns={personColumns} />
      <BasicTable data={accountData} columns={personColumns} />
    </Box>
  )
}

export default Provider
