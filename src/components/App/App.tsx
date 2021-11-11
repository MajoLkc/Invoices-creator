import React from "react"
// @ts-ignore
import Pdf from "react-to-pdf"
import Wrapper from "../PdfWrapper"
import Invoice from "../Invoice"

const ref: any = React.createRef()

function App() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {/* @ts-ignore */}
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <Wrapper ref={ref}>
        <Invoice />
      </Wrapper>
    </div>
  )
}

export default App
