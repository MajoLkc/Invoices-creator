import styled from "styled-components";
import configData from "../../config.json"

const paperWidth = configData.sizes.A4.width
const paperHeight = configData.sizes.A4.height

export const PdfWrapper = styled.div`
  margin: 0px auto;
  background-color: yellow;
  width: ${paperWidth};
  height: ${paperHeight};
  display: flex;
`

export const InvoiceWrapper = styled.div`
width: 190mm;
height: 277mm;
margin: 10mm;
border: 2px solid black;
position: relative;
`