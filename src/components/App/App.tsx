import "antd/dist/antd.css"
import Invoice from "../Invoice"
import PdfContext from "../PdfContext"
// import { Spin } from "antd"
// import styled from "styled-components"
import Header from "../Header"

// const Div = styled.div`
//   margin: 20px 0;
//   margin-bottom: 20px;
//   padding: 30px 50px;
//   text-align: center;
//   background: rgba(0, 0, 0, 0.05);
//   border-radius: 4px;
//   z-index: 1;
// `

// const StyledSpin = styled(Spin)`
//   z-index: 1;
// `

const App: React.FC = () => {
  return (
    // <Div>
    //   <Spin />
    //   <PdfContext>
    //     <Invoice />
    //   </PdfContext>
    // </Div>
    <>
      <Header />
      <PdfContext>
        <Invoice />
      </PdfContext>
    </>
  )
}

export default App
