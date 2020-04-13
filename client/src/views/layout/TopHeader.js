import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import '../home/index.css';
import { Menu } from 'antd';
import { Link } from "react-router-dom";

export default class TopHeader extends Component {

    render() {
        return (
            <Fragment>
                <div className="layout">
                    <div >
                        <div className="logo" style={{ marginLeft: '24px' }}>
                            <h3 style={{ marginLeft: '24px' }}>
                                <Link to="/Home">ARPS</Link></h3>
                        </div>
                        <Menu theme="dark" mode="horizontal" style={{ paddingTop: '8px' }} >
                            <Menu.Item key="1"><Link to="/OrderDetailPage" />Order</Menu.Item>
                            <Menu.Item key="2"><Link to="/Driver" />Driver</Menu.Item>
                            <Menu.Item key="3"><Link to="/" />Logout</Menu.Item>
                            {/* <span>
                                <Link to="/">Logout</Link>
                            </span> */}
                        </Menu>




                    </div>
                </div>
            </Fragment>
        );
    }
}

