import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import '../home/index.css';
import '../../assets/css/index.css'
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

export default class TopHeader extends Component {

    render() {
        return (
            <Layout>
                <Fragment>
                    <div className="topHeader">
                        <div className="logo"
                            style={{
                                width: '100px',
                                marginLeft: '24px',
                                marginTop: '8px',
                                marginBottom: '30px'
                            }}>
                            <img src={require('../../assets/img/logo.png')} alt="logo"
                                style={{
                                    width: "55%",
                                    marginLeft: '24px'
                                }} />

                        </div>
                        <Menu theme="dark" mode="horizontal" style={{ paddingTop: '12px', paddingBottom: '' }}>
                            <Menu theme="dark" mode="horizontal" style={{ float: 'left' }}>

                                <Menu.Item className="homeBtn" key="1"><Link to="/home" /><b>Home</b></Menu.Item>


                            </Menu>
                            <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
                                <Menu.Item className="logoutBtn" key="2"><Link to="/" style={{ marginLeft: '' }} /><b>Logout</b></Menu.Item>
                            </Menu>
                        </Menu>




                    </div>

                </Fragment>
            </Layout>
        );
    }
}

