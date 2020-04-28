import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {  Row, Col } from 'antd';
import WWTimeSlider from './WWTimeSlider'

// const fRT = 7;
// const fPT = fRT + 1;
// const fRE = 12;
// const fDT = fRE - 1;
// const marks = {
//     5: '5:00',
//     6: '6:00',
//     7: '7:00',
//     8: '8:00',
//     9: '9:00',
//     10: '10:00',
//     11: '11:00',
//     12: '12:00',
//     13: '13:00',
//     14: '14:00',
//     15: '15:00',
//     16: '16:00',
//     17: '17:00',
//     18: '18:00',
//     19: '19:00',
//     20: '20:00',
//     21: '21:00',
// };



export default class WWRoutePlan extends Component {


    render() {
        return (
            <div className='timeSlider'>
                <Row>
                    {/* <Col span={2}>
                        {hour} : {min}
                    </Col> */}
                    <Col span={24}>
                        <WWTimeSlider 
                        style={{
                        paddingTop: 8,
                        paddingLeft: 8,
                        paddingRight: 8}}
                        content={this.props.content}/>

                    </Col>



                </Row>

            </div>

        );
    }
}
