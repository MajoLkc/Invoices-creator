import Invoice from "../Invoice"
import PdfContext from "../PdfContext"

const App: React.FC = () => {
  return (
    <>
      <PdfContext>
        <Invoice />
      </PdfContext>
    </>
  )
}

export default App
