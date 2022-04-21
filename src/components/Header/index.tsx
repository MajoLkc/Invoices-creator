import {
  PageHeader,
  Tabs,
  Button,
  Statistic,
  Descriptions,
  Menu,
  Dropdown,
} from "antd"
import { UnorderedListOutlined } from "@ant-design/icons"
import i18next from "i18next"
import { useTranslation } from "react-i18next"

const { TabPane } = Tabs

const languageOptions = [
  {
    key: "sk-SK",
    label: "Slovenský",
  },
  {
    key: "en-GB",
    label: "English",
  },
]

const selectLanguageHandler = (e: any) => {
  const selectedLanguage = e.key
  i18next.changeLanguage(selectedLanguage)
}

const mappedLanguageOptions = languageOptions.map((option) => (
  <Menu.Item onClick={selectLanguageHandler} key={option.key}>
    {option.label}
  </Menu.Item>
))

const menu = <Menu>{mappedLanguageOptions}</Menu>

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu} placement="bottomRight">
    <Button
      type="text"
      icon={<UnorderedListOutlined style={{ fontSize: 20 }} />}
    />
  </Dropdown>
)

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
    <Descriptions.Item label="Association">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="Remarks">
      Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
)

const extraContent = (
  <div
    style={{
      display: "flex",
      width: "max-content",
      justifyContent: "flex-end",
    }}
  >
    <Statistic
      title="Status"
      value="Pending"
      style={{
        marginRight: 32,
      }}
    />
    <Statistic title="Price" prefix="$" value={568.08} />
  </div>
)

const Content = ({ children, extra }: any) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
)

const Header: React.FC = () => {
  const { t } = useTranslation(["form"])
  return (
    <PageHeader
      className="site-page-header-responsive"
      onBack={() => window.history.back()}
      title="Title"
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
        <DropdownMenu key="more" />,
      ]}
      footer={
        <Tabs defaultActiveKey="1">
          <TabPane tab={t("Form")} key="1" />
          <TabPane tab={t("Invoice")} key="2" />
        </Tabs>
      }
    >
      <Content extra={extraContent}>{renderContent()}</Content>
    </PageHeader>
  )
}

export default Header
