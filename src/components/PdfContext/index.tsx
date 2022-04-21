import { createRef } from "react"
import { useTranslation } from "react-i18next"
// @ts-ignore
import Pdf from "react-to-pdf"
import { InvoiceWrapper, PdfWrapper } from "./StyledComponents"
import { Button } from "antd"

const ref: any = createRef()

const PdfContext: React.FC = (props) => {
  const { t } = useTranslation(["invoice"])
  return (
    <>
      <Pdf targetRef={ref} filename="example.pdf">
        {/* @ts-ignore */}
        {({ toPdf }) => <Button onClick={toPdf}>{t("GenerateButton")}</Button>}
      </Pdf>
      <PdfWrapper ref={ref}>
        <InvoiceWrapper>{props.children}</InvoiceWrapper>
      </PdfWrapper>
    </>
  )
}

export default PdfContext
