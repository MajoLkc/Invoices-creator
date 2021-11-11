import styled from "styled-components"
import Header from "./Header"

const Creator = styled.div`
  background-color: green;
  width: 45%;
  height: 260px;
  display: inline-block;
`

const Client = styled.div`
  background-color: blue;
  width: 55%;
  height: 260px;
  display: inline-block;
`

const Dates = styled.div`
  background-color: brown;
  width: 100%;
  height: 60px;
`

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

const Invoice = () => {
  return (
    <>
      <Header />
      <Creator />
      <Client />
      <Dates />
      <Items />
      <QRcode />
      <Footer />
    </>
  )
}

export default Invoice
