import React, { Component } from 'react';
import { Button, Popover } from 'antd';
import OrderInfo from '../unuse/OrderInfo'

export default class OrderDetailPop extends React {
    state = {}
    render() {
        return (
            <Popover
                onClick={this.onShowDetail.bind(this, record, index)}
                placement="right"
                content={
                    //clickContent,
                    <div>
                        <OrderInfo data={record} />
                    </div>
                }
                trigger="click"
            >
                <Button type="link" ><b>{text}</b></Button>
            </Popover>
        );
    }
}

