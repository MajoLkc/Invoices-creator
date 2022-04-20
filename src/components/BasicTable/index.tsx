import { Table } from "antd"
import styled from "styled-components"

const StyledTable = styled(Table)`
  margin: 3px;
  .ant-table {
    line-height: 0.3;
  }
  .ant-table-tbody > tr > td {
    border-bottom: none;
  }
  td:first-child {
    font-size: 10px;
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
    size="small"
    pagination={false}
    showHeader={false}
    columns={columns}
    dataSource={data}
  />
)

export default BasicTable
