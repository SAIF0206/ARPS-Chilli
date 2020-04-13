import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../home/index.css';
// import { Layout } from 'antd';
import DriverStatus from '../table/DriverStatus'
import TopHeader from '../layout/TopHeader'
import BotFooter from '../layout/BotFooter'

// const { TopHeader,Content,BotFooter} = Layout;

export default class Driver extends Component {
    render() {
        return (
            <div className="layout">
                <TopHeader />
                <div style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <h2>Driver</h2>
                        <DriverStatus />
                    </div>
                </div >
                <BotFooter />
            </div>
        );
    }
}

