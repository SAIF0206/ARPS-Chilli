import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';

import { DatePicker } from 'antd';
import moment from "moment"

export default class DateSelect extends Component {

    handleSelectDate(selectDate, dateString) {
        console.log('Selected Time: ', selectDate);
        console.log('Formatted Selected Time: ', dateString);
    }

    disabledDate(current) {
        // DataPicker restirct only today and the day after today
        return current && current < moment().endOf('day').subtract(1, 'day');
    }

    render() {
        return (
            <Fragment>

                <DatePicker disabledDate={this.disabledDate} onChange={this.handleSelectDate} />
                </Fragment>

        );
    }
}