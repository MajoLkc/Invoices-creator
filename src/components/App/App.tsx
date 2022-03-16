import Invoice from "../Invoice"
import PdfContext from "../PdfContext"

const App: React.FC = () => (
  <>
    <PdfContext>
      <Invoice />
    </PdfContext>
  </>
)

export default App
