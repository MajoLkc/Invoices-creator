import styled from "styled-components"
import ItemsTable from "../ItemsTable"

const Box = styled.div`
  background-color: white;
  width: 100%;
  min-height: 60px;
`

const Items: React.FC = () => {
  const DUMMY_DATA = [
    {
      key: 1,
      description: "Auto",
      amount: 1,
      measureUnit: "kus",
      price: 4390,
    },
    {
      key: 2,
      description: "Sedacka",
      amount: 19,
      measureUnit: "kus",
      price: 149,
    },
    {
      key: 3,
      description: "Kolesa",
      amount: 4,
      measureUnit: "kus",
      price: 50,
    },
  ]

  let totalInvoicePrice = 0

  const mappedData = DUMMY_DATA.map((item) => {
    const { key, description, amount, measureUnit, price } = item
    const itemTotalPrice = price * amount
    totalInvoicePrice = totalInvoicePrice + itemTotalPrice
    return {
      key,
      description,
      amount,
      measureUnit,
      price,
      total: itemTotalPrice,
    }
  })

  return (
    <Box>
      <ItemsTable
        measureUnit="kus"
        data={mappedData}
        totalPrice={totalInvoicePrice}
      />
    </Box>
  )
}

export default Items
