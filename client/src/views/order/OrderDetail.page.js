import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../home/index.css';

import OrderInfo from '../../views/table/OrderInfo'
import TopHeader from '../layout/TopHeader'
import BotFooter from '../layout/BotFooter'

class OrderDetailPage extends Component {
    render() {
        return (
            <div className="layout">
                <TopHeader/>
                <div style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <h2>Order Details Page</h2>
                        <OrderInfo />
                    </div>
                </div>
                <BotFooter/>
            </div>
        );
    }
}

export default OrderDetailPage;
