import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Button, Popover } from 'antd';
import TopHeader from '../layout/TopHeader'
import BotFooter from '../layout/BotFooter'
import Order from './Order/Order'
import DateSelect from '../../components/DateSelect.js'
import DriverStatus from './Driver/DriverStatus';


class Index extends Component {
    state = {
        //popover
        visible: false,
    };
    constructor(props) {
        super(props)

        this.state = {
            order: null,
            selectDate: null,
            driver: null,
            date: null,
            passDate: null,
            driverData: [],
        }

        // this.handleClickDriver = this.handleClickDriver.bind(this)
        this.handleClickWW = this.handleClickWW.bind(this)
        this.handleSelectDate = this.handleSelectDate.bind(this)
        this.handleDriverData = this.handleDriverData.bind(this)

    }

    //set select date as state.date
    handleSelectDate = (selectDate) => {
        // console.log('date: ',date)
        this.setState({
            date: selectDate
        })
    }

    handleDriverData(driverData) {
        // console.log('driver data: ', driverData)
        this.setState({
            driverData: driverData
        })
    }


    //confirm driver status and store/send datax
    hide = () => {
        this.setState({
            visible: false,
        });
    };

    handleVisibleChange = visible => {
        this.setState({ visible });
    };

    //btn link to API to send data to WorkWave  
    handleClickWW() {
        //TODO
        let date = this.state.date
        console.log('date', date)
        this.setState({
            passDate: date
        })
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
                            {/*Dateselect component and get selected date from it*/}
                            <DateSelect handleSelectDate={(dateString) => this.handleSelectDate(dateString)} value={this.state.driverData} s/>

                            {/*Btn to workstatus*/}

                            <Popover placement="rightBottom"
                                content={
                                    //clickContent,
                                    <div>
                                        <div>
                                            <DriverStatus onChange={this.handleDriverData} />
                                        </div>
                                        <center>
                                            <Button type='primary' onClick={this.hide}>
                                                Confirm
                                            </Button>
                                        </center>
                                    </div>
                                }
                                title={'Driver Status'}
                                trigger="click"
                                visible={this.state.visible}
                                onVisibleChange={this.handleVisibleChange}
                            >
                                <Button type="primary" style={{ marginLeft: '16px', width:'80px' }} ><b>Driver</b></Button>
                            </Popover>


                            {/*Btn to submit to WorkWave*/}
                            <Button type="primary" danger style={{ marginLeft: '16px', width:'160px'}} onClick={this.handleClickWW} date={this.state.date} ><b>Send to Workwave</b></Button>
                        </div>
                        <br />

                        {/*Order Index Table
                            Pass the date from datepicker => orderindex to filter the order with the selected dat*/}
                        <Order date={this.state.date} />
                    </div>
                </div>
                <BotFooter />
            </div>
        );
    }
}

export default Index;
