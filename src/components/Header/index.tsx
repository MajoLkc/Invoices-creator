import { PageHeader, Tabs, Button, Menu, Dropdown } from "antd"
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
    ></PageHeader>
  )
}

export default Header
