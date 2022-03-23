import styled from "styled-components"
import qr_code from "../../assets/images/qr_code.png"

const Box = styled.div`
  background-color: orange;
  width: 160px;
  min-height: 150px;
  position: absolute;
  right: 0;
`

const Image = styled.img`
  width: 150px;
  margin: 4px 6px;
`

const QRcode: React.FC = () => (
  <Box>
    <Image src={qr_code} />
  </Box>
)

export default QRcode
