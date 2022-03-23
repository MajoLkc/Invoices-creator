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
      amount: 9,
      measureUnit: "kus",
      price: 5000,
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
      amount: 25,
      measureUnit: "kus",
      price: 50,
    },
  ]

  const mappedData = DUMMY_DATA.map((item) => {
    const { key, description, amount, measureUnit, price } = item
    return {
      key,
      description,
      amount,
      measureUnit,
      price,
      total: price * amount,
    }
  })

  return (
    <Box>
      <ItemsTable measureUnit="kus" data={mappedData} />
    </Box>
  )
}

export default Items
