import React, { Component, Fragment } from 'react'
import { DatePicker } from 'antd'
import moment from "moment"
import 'antd/dist/antd.css'

export default class DateSelect extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     selectDate:null,
        // }
        this.SelectDate = this.SelectDate.bind(this);
    }

    SelectDate( date,dateString) {
        console.log('Selected Time: ', date);
        console.log('Formatted Selected Time: ', dateString);
        // this.setState({
        //     selectDate:dateString
        // })
        //Pass dateString to Home via props (son to father)
        this.props.handleSelectDate(dateString)

    }

    disabledDate(current) {
        // DataPicker restirct only today and the day after today
        return current && current < moment().endOf('day').subtract(1, 'day');
    }

    render() {
        return (
            <Fragment>
                <DatePicker 
                // disabledDate={this.disabledDate}
                 onChange={this.SelectDate} />
                </Fragment>

        );
    }
}