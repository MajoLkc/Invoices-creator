import { Space, Typography } from "antd"
import styled from "styled-components"

const { Text } = Typography

type TextProps = {
  name: string
  surname?: string
  street: string
  houseNumber: number
  postalCode: string
  city: string
}

const StyledSpace = styled(Space)`
  display: block;
  margin: 0 3px;
`

const NameText = styled(Text)`
  margin: 1px;
  font-size: 22px;
`

const AddressText = styled(Text)`
  margin: 1px;
  font-size: 18px;
`

const Address: React.FC<TextProps> = ({
  name,
  surname,
  street,
  houseNumber,
  postalCode,
  city,
}) => (
  <StyledSpace>
    <NameText>{`${name} ${surname !== undefined ? surname : ""}`}</NameText>
    <AddressText>{`${street} ${houseNumber}`}</AddressText>
    <AddressText>{`${postalCode} ${city}`}</AddressText>
  </StyledSpace>
)

export default Address
