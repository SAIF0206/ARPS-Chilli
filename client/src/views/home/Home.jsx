import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { DatePicker, Button } from 'antd';
import TopHeader from '../layout/TopHeader'
import BotFooter from '../layout/BotFooter'
import Order from '../table/Order'
import moment from "moment"
import { Link } from "react-router-dom";


// const { Header,Content,Footer} = Layout;

function onChange(date, dateString) {
    // let orderDate=moment().get('year').toString()+'-'+moment().get('month').toString()+'-'+moment().get('date').toString();
    console.log(date, dateString);
    // console.log(orderDate)
}
function disabledDate(current) {
    // DataPicker restirct only today and the day after today
    return current && current < moment().endOf('day').subtract(1, 'day');
}

// const orderData=c

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleClickBtn = this.handleClickBtn.bind(this)
    }


    handleClickBtn(){
        this.props.history.push("/driver")
    }
    render() {
        return (
            <div className="layout">
                <TopHeader />
                <div style={{ padding: '0 50px' }}>
                    <div className="site-layout-content" >
                        <br />
                        <div>

                            <DatePicker disabledDate={disabledDate} onChange={onChange} />
                            <Button type="primary" style={{ marginLeft: '8px' }} onClick={this.handleClickBtn}>Driver</Button>
                            <Button type="primary" danger style={{ marginLeft: '8px' }}><Link to="/OrderDetail" />Send to Workwave</Button>
                        </div>
                        <br />
                        <Order />
                    </div>
                </div>
                <BotFooter />
            </div>
        );
    }
}

export default Index;
