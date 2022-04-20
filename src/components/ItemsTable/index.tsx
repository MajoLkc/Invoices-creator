import { Table } from "antd"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

const StyledTable = styled(Table)`
  margin: 10px 25px;
  border: 1px solid;
  thead {
    text-align: left;
  }
  th,
  td {
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
  totalPrice: number
}

const ItemsTable: React.FC<TableProps> = ({
  data,
  measureUnit,
  totalPrice,
}) => {
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
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>
              {t("Items.Total")}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1}></Table.Summary.Cell>
            <Table.Summary.Cell index={2}></Table.Summary.Cell>
            <Table.Summary.Cell index={3}></Table.Summary.Cell>
            <Table.Summary.Cell index={4}>{totalPrice}</Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  )
}

export default ItemsTable
