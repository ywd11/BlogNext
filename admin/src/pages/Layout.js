import React, {useState}  from 'react';
import { Route } from "react-router-dom";
import AddArticle from './AddArticle'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import '../static/css/Layout.css'
const { Header, Sider, Content } = Layout;

function SiderDemo() {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(
      !collapsed
    );
  };
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
             <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  <div>
                    <Route path="/index/" exact  component={AddArticle} />
                  </div>
             </div>
          </Content>
        </Layout>
      </Layout>
    )
}
export default SiderDemo
