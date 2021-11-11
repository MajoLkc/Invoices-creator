import React from "react"
// @ts-ignore
import Pdf from "react-to-pdf"
import styled from "styled-components"
import Invoice from "../Invoice"
import configData from "../../config.json"

const paperWidth = configData.sizes.A4.width
const paperHeight = configData.sizes.A4.height

const PdfWrapper = styled.div`
  margin: 0px auto;
  background-color: yellow;
  width: ${paperWidth};
  height: ${paperHeight};
  display: flex;
`

const Bordering = styled.div`
  width: 190mm;
  height: 277mm;
  margin: 10mm;
  border: 2px solid black;
  position: relative;
`

const ref: any = React.createRef()

function App() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {/* @ts-ignore */}
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <PdfWrapper ref={ref}>
        <Bordering>
          <Invoice />
        </Bordering>
      </PdfWrapper>
    </div>
  )
}

export default App
