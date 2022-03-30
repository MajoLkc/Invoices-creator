import Header from "./Header"
import Provider from "./Provider"
import Client from "./Client"
import Dates from "./Dates"
import Items from "./Items"
import QRcode from "./QRcode"
import Footer from "./Footer"

const Invoice: React.FC = () => (
  <>
    <Header />
    <Provider />
    <Client />
    <Dates />
    <Items />
    <QRcode />
    <Footer />
  </>
)

export default Invoice
