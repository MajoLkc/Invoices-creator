import { Typography } from "antd"
import styled from "styled-components"

const { Text } = Typography

type PriceProps = {
  currency: string
  price: number
  isMain?: boolean
}

const NormalPrice = styled(Text)`
  font-size: 12px;
  text-align: right;
  display: block;
  margin: 2px 1px;
`

const MainPrice = styled(NormalPrice)`
  font-size: 18px;
  font-weight: bold;
  display: block;
`

const Price: React.FC<PriceProps> = ({ currency, price, isMain }) => {
  return isMain ? (
    <MainPrice>{`${price} ${currency}`}</MainPrice>
  ) : (
    <NormalPrice>{`${price} ${currency}`}</NormalPrice>
  )
}

export default Price
