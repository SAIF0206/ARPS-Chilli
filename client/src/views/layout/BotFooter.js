import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../home/index.css';
import { Layout } from 'antd';

const { Footer } = Layout;
class BotFooter extends Component {
    render() {
        return (
            <Layout className="footer">
                <Footer style={{ textAlign: 'center' }}>ARPS - Mohd Saif and Chai Cai- Chilli Api</Footer>
            </Layout> 
        );
    }
}

export default BotFooter;
