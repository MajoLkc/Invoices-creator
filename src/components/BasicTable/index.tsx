import { Table } from "antd"

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

const BasicTable = ({ data, columns }: TableProps) => (
  <Table
    pagination={false}
    showHeader={false}
    columns={columns}
    dataSource={data}
  />
)

export default BasicTable
