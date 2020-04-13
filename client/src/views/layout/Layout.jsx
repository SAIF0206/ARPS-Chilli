import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import TopHeader from './TopHeader';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <TopHeader/>
                {this.props.children}
            </div>
        );
    }
}

