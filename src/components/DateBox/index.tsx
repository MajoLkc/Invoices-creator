import SmallText from "../SmallText"
import styled from "styled-components"

const Box = styled.div`
  width: 33.3%;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`

const DateWrapper = styled.div`
  width: 70%;
  background-color: white;
  text-align: center;
  margin: 2px 0 2px 29%;
  font-size: 18px;
`

type DateBoxProps = {
  text: string
  date: string
}

const DateBox: React.FC<DateBoxProps> = ({ text, date }) => (
  <>
    <Box>
      <SmallText label={text} />
      <DateWrapper>{date}</DateWrapper>
    </Box>
  </>
)

export default DateBox
