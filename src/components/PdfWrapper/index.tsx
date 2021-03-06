import styled from "styled-components"

const PdfWrapper = styled.div`
  margin: 0px auto;
  width: 210mm;
  height: 297mm;
  display: flex;
`

const Bordering = styled.div`
  width: 190mm;
  height: 277mm;
  margin: 10mm;
  border: 2px solid black;
  position: relative;
`

const Wrapper:React.FC = (props) => (
  <PdfWrapper>
    <Bordering>{props.children}</Bordering>
  </PdfWrapper>
)

export default Wrapper
