import { Table } from "antd"
import styled from "styled-components"

const StyledTable = styled(Table)`
  td:first-child {
    font-size: 13px;
  }
`

type TableProps = {
  data: {
    key: string
    name: string
    value: string | number
  }[]
  columns: {
    title: string
    dataIndex: string
    key: string
  }[]
}

const BasicTable: React.FC<TableProps> = ({ data, columns }) => (
  <StyledTable
    pagination={false}
    showHeader={false}
    columns={columns}
    dataSource={data}
  />
)

export default BasicTable
