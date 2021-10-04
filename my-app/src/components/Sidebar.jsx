import {Layout} from "antd";
import {UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export const Sidebar = ({collapsed}) => {
    return (
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <nav>
                <NavLink to="/" exact activeClassName="active-Link">
                    <span>
                        <UserOutlined/>
                    </span>
                    {!collapsed && <span>Home</span>}
                </NavLink>
                <NavLink to="/schedule" exact activeClassName="active-Link">
                    <span>
                        <VideoCameraOutlined/>
                    </span>
                    {!collapsed && <span> schedule</span>}
                </NavLink>
            </nav>
        </Layout.Sider>
    )
}