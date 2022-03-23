import { Table } from "antd"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

const StyledTable = styled(Table)`
  width: 100%;
  thead {
    text-align: left;
  }
  th, td {
    padding: 2px 5px;
  }
  th:first-of-type {
    width: 250px;
  }
`

type TableProps = {
  data: {
    key: number
    description: string
    amount: number
    measureUnit: string
    price: number
    total: number
  }[]
  measureUnit: string
}

const ItemsTable: React.FC<TableProps> = ({ data, measureUnit }) => {
  const { t } = useTranslation(["invoice"])
  const columns = [
    {
      title: t("Items.ItemDescription"),
      dataIndex: "description",
      key: "description",
    },
    {
      title: t("Items.Amount"),
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: t("Items.MeasureUnit"),
      dataIndex: "measureUnit",
      key: "measureUnit",
    },
    {
      title: `${t("Items.PriceFor")} ${measureUnit}`,
      dataIndex: "price",
      key: "price",
    },
    {
      title: t("Items.TotalPrice"),
      dataIndex: "total",
      key: "total",
    },
  ]

  return (
    <StyledTable
      pagination={false}
      columns={columns}
      dataSource={data}
      // tableLayout="fixed"
    />
  )
}

export default ItemsTable
