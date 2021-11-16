import { Table } from "antd"

type TableProps = {
  data: any
  columns: any
}

const BasicTable = ({ data, columns }: TableProps) => {
  return (
    <Table
      pagination={false}
      showHeader={false}
      columns={columns}
      dataSource={data}
    />
  )
}

export default BasicTable
