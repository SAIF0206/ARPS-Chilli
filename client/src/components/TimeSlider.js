import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Slider, Row, Col } from 'antd';
// import '../assets/css/timeSlider.css'


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



export default class TimeSlider extends Component {


    render() {
            
        let time = this.props.content;
        let hour = time.toString().substring(11, 13);
        let min = time.toString().substring(14, 16);

        // Food ready to eat time
        let fRE = parseInt(hour) + parseInt(min) / 60;
        // Food deliveried time: -1 hour to food ready to eat time
        
        let fDT = fRE - 1;
        // Food ready time: -3 hour to food ready to eat time
        let fPT = fRE - 3;
        // Food pick up time: -1.15~2.5 to food ready to eat time
        let fRT = fRE - 2.5
        
        //consider bento set 

        return (
            <div className='timeSlider'>
                <Row>
                    <Col span={2}>
                        {hour} : {min}
                    </Col>
                    <Col span={11}>

                        <Slider
                            range
                            style={{ marginTop: 0 }}
                            min={5}
                            max={fRE - 1.25}
                            step='0.05'
                            // defaultValue={[fRT, fPT]} 
                            value={[fRT, fPT]}
                        />
                    </Col>
                    <Col span={11}>
                        <Slider
                            range
                            style={{ marginTop: 0 }}
                            min={fRE - 1.25}
                            max={21}
                            step='0.05'
                            // defaultValue={[fDT, fRE]} 
                            value={[fDT, fRE]}
                        />
                    </Col>


                </Row>

            </div>

        );
    }
}
