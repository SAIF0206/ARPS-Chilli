import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../home/index.css';
import { DatePicker, Button } from 'antd';
import TopHeader from '../layout/TopHeader'
import moment from "moment"
import RoutePlanTable from '../table/RoutePlan.table'


// function onChange(date, dateString) {

//     console.log(date, dateString);

// }

function disabledDate(current) {
    // DataPicker restirct only today and the day after today
    return current && current < moment().endOf('day').subtract(1, 'day');
}

export default class RoutePlanPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.handleClickWW = this.handleClickWW.bind(this)
    }


    handleClickWW() {
        this.props.history.push("/RoutePlan")
    }
    render() {
        return (
            <div className="layout">
                <TopHeader />
                <div style={{ padding: '0 50px' }}>
                    <div className="site-layout-content" >
                        <br />
                        <div>
                            <DatePicker
                                //Pass selected date here
                                defaultValue={moment('2020-04-19')}
                                disabledDate={disabledDate}
                                disabled />
                            <Button type="primary" danger style={{ marginLeft: '8px' }} onClick={this.handleClickWW}>Send to Workwave</Button>
                        </div>
                        <br />
                        <RoutePlanTable />
                    </div>
                </div>

            </div>
        );
    }
}

