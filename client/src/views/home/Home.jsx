import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Button } from 'antd';
import TopHeader from '../layout/TopHeader'
import BotFooter from '../layout/BotFooter'
import Order from '../table/Order'
// import { Link } from "react-router-dom";
import DateSelect from '../../components/DateSelect.js'


class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date:"",
        }
    
        this.handleClickDriver = this.handleClickDriver.bind(this)
        this.handleClickWW = this.handleClickWW.bind(this)
        this.handleSelectDate=this.handleSelectDate.bind(this)
    }

    handleSelectDate(date){
        this.setState({
            date
        })
    }
    
    handleClickDriver(){
        let wwdate=this.state.date
        console.log(wwdate)
        this.setState({
            wwdate
        })
        this.props.history.push("/driver")

    }

    handleClickWW(){
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
                            <DateSelect handleSelectDate={date=>this.handleSelectDate(date)} />
                                      
                            <Button type="primary" style={{ marginLeft: '16px' }} onClick={this.handleClickDriver}>Driver</Button>
                            
                            <Button type="primary" danger style={{ marginLeft: '8px' }} onClick={this.handleClickWW}>Send to Workwave</Button>
                        </div>
                        <br />
                        <Order date={this.state.date}/>
                    </div>
                </div>
                <BotFooter />
            </div>
        );
    }
}

export default Index;
