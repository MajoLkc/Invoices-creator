import SignatureCanvas from "react-signature-canvas"

const Signature: React.FC = () => (
  <SignatureCanvas
    penColor="blue"
    canvasProps={{
      width: 500,
      height: 200,
      className: "sigCanvas",
    }}
  />
)

export default Signature
