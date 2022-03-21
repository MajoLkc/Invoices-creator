import styled from "styled-components"
import { useTranslation } from "react-i18next"
import SmallText from "../SmallText"
import BasicTable from "../BasicTable"
import { useState } from "react"
import Address from "../Address"

const Box = styled.div`
  width: 55%;
  height: 260px;
  display: inline-block;
  background-color: white;
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

const ClientBox = styled.div`
  width: 90%;
  height: 70%;
  background-color: red;
  margin: 0px auto;
`

const Client: React.FC = () => {
  const [vatPayer, setVatPayer] = useState(false)
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

  return (
    <Box>
      <HeadBox>
        <BasicTable data={paymentData} columns={columns} />
      </HeadBox>
      <HeadBox>
        <BasicTable data={symbolsData} columns={columns} />
      </HeadBox>
      <SmallText label={t("Footer.Client")} />
      <ClientBox>
        <Address
          name="Nazov klienta"
          street="Ulica"
          houseNumber={663}
          postalCode="038 52"
          city="Sucany"
        />
        <BasicTable data={personData} columns={personColumns} />
      </ClientBox>
    </Box>
  )
}

export default Client
