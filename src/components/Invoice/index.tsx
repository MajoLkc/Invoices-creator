import styled from "styled-components"
import Header from "./Header"
import Provider from "./Provider"
import Client from "./Client"
import Dates from "./Dates"

const Items = styled.div`
  background-color: purple;
  width: 100%;
  min-height: 60px;
`

const QRcode = styled.div`
  background-color: orange;
  width: 150px;
  min-height: 150px;
  position: absolute;
  right: 0;
`

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
