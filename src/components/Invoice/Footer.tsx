import { useTranslation } from "react-i18next"
import styled from "styled-components"
import NormalText from "../NormalText"
import Price from "../Price"
import SmallText from "../SmallText"

const FooterWrapper = styled.div`
  width: 100.3%;
  height: 130px;
  border-top: 1px solid black;
  margin: 0 -1px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`

const FooterBox = styled.div`
  width: 33.3%;
  border-right: 1px solid black;
  margin: -1px 0;
`

const PricesWrapper = styled.div`
  width: 50%;
  height: 20px;
  line-height: 20px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  margin-right: -1px;
  font-size: 13px;
`

const PricesWrapperBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Footer: React.FC = () => {
  const { t } = useTranslation(["invoice"])
  return (
    <FooterWrapper>
      <FooterBox>
        <SmallText label={t("Footer.Provider")} />
      </FooterBox>
      <FooterBox>
        <SmallText label={t("Footer.Client")} />
      </FooterBox>
      <FooterBox>
        <PricesWrapperBox>
          <PricesWrapper>
            <NormalText text={t("Items.TotalPrice")} />
          </PricesWrapper>
          <PricesWrapper>
            <Price price={1000} currency="EUR" />
          </PricesWrapper>
        </PricesWrapperBox>
        <PricesWrapperBox>
          <PricesWrapper>
            <NormalText text={t("Footer.Deposits")} />
          </PricesWrapper>
          <PricesWrapper>
            <Price price={1000} currency="EUR" />
          </PricesWrapper>
        </PricesWrapperBox>
        <PricesWrapperBox>
          <PricesWrapper>
            <NormalText text={t("Footer.Balance")} />
          </PricesWrapper>
          <PricesWrapper>
            <Price price={1000} currency="EUR" />
          </PricesWrapper>
        </PricesWrapperBox>
        <NormalText text={t("Footer.Balance")} />
        <Price price={1000} currency="EUR" isMain={true} />
        <SmallText label="Sto desat euro" />
      </FooterBox>
    </FooterWrapper>
  )
}

export default Footer
