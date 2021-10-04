import {Layout} from "antd";
import {MenuUnfoldOutlined, MenuFoldOutlined} from "@ant-design/icons";

export const Header = ({collapsed, onToggle}) => {
    const handleClickToggle = () => {
        onToggle(!collapsed);
    } ;

    return(
        <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
            {
                collapsed ? (
                    <MenuUnfoldOutlined className="trigger" onClick={handleClickToggle}/>
                ): (
                    <MenuFoldOutlined className="trigger" onClick={handleClickToggle} />
                )
            }
        </Layout.Header>
    )
}