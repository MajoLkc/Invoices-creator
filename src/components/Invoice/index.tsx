import styled from "styled-components"
import Header from "./Header"
import Provider from "./Provider"
import Client from "./Client"
import Dates from "./Dates"
import Items from "./Items"
import QRcode from './QRcode'

const Footer = styled.div`
  background-color: pink;
  width: 100%;
  min-height: 200px;
  position: absolute;
  bottom: 0;
`

const Invoice: React.FC = () => (
  <>
    <Header />
    <Provider />
    <Client />
    <Dates />
    <Items />
    <QRcode />
    <Footer />
  </>
)

export default Invoice
