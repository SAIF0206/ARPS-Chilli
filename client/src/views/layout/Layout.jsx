import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';

import Order from '../table/Order'

const { Header, Content, Footer } = Layout;
class Index extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Order</Menu.Item>
                        <Menu.Item key="2">Driver</Menu.Item>
                        <Menu.Item key="3">Plan</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <Order/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>ARPS - Mohd Saif and Chai Cai- Chilli Api</Footer>
            </Layout>
        );
    }
}

export default Index;
