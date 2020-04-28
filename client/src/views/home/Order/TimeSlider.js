import React, { Component } from 'react';
import 'antd/dist/antd.css';
// import { Row, Col } from 'antd';
import Slider from 'rc-slider';


const Range = Slider.Range;


const style = {};


const marks = {
    5: '',
    5.5: '',
    6: '',
    6.5: '',
    7: '',
    7.5: '',
    8: '',
    8.5: '',
    9: '',
    9.5: '',
    10: '',
    10.5: '',
    11: '',
    11.5: '',
    12: '',
    12.5: '',
    13: '',
    13.5: '',
    14: '',
    14.5: '',
    15: '',
    15.5: '',
    16: '',
    16.5: '',
    17: '',
    17.5: '',
    18: '',
    18.5: '',
    19: '',
    19.5: '',
    20: '',
    20.5: '',
    21: '',
    // 5: '5:00',
    // 5.5: '|',
    // 6: '6:00',
    // 6.5: '|',
    // 7: '7:00',
    // 7.5: '|',
    // 8: '8:00',
    // 8.5: '|',
    // 9: '9:00',
    // 9.5: '|',
    // 10: '10:00',
    // 10.5: '|',
    // 11: '11:00',
    // 11.5: '|',
    // 12: '12:00',
    // 12.5: '|',
    // 13: '13:00',
    // 13.5: '|',
    // 14: '14:00',
    // 14.5: '|',
    // 15: '15:00',
    // 15.5: '|',
    // 16: '16:00',
    // 16.5: '|',
    // 17: '17:00',
    // 17.5: '|',
    // 18: '18:00',
    // 18.5: '|',
    // 19: '19:00',
    // 19.5: '|',
    // 20: '20:00',
    // 20.5: '|',
    // 21: '21:00',
};



export default class TimeSlider extends Component {


    render() {

        let time = this.props.content;
        let hour = time.toString().substring(11, 13);
        let min = time.toString().substring(14, 16);

        // Food ready to eat time
        let fRE = parseInt(hour) + parseInt(min) / 60;
        // Food deliveried time: -1 hour to food ready to eat time

        let fDT = fRE - 0.75;
        // Food ready time: -3 hour to food ready to eat time
        let fPT = fRE - 2.5;
        // Food pick up time: -1.15~2.5 to food ready to eat time
        let fRT = fRE - 3
        let value = [fRT,fRE]
        //consider bento set 

        let sliderHeight = '20px'
        let handerlBorder = 'solid 2px'
        let handerMargin = '2px '
        let handerWidth = ''
        let bottom = '-2px'
        let trackBGColor='#1890ff'
     
        return (

            <div className='timeSlider'>
                
                <div style={style} className="customSlider">

                    <Range 
                        tipFormatter={value => value}
                        // tipFormatter={convertFloatToTime}
                        style={{ marginleft: 40, maginright: 40 }}
                        tipProps={{
                            placement: 'top',
                            prefixCls: 'rc-slider-tooltip',
                
                        }}
                        count={3}
                        marks={marks}
                        min={5}
                        max={21}
                        
                        value={value}
                        // value={[fRT, fPT, fDT, fRE]}

                        trackStyle={[
                            {  backgroundColor:  trackBGColor,height: sliderHeight, bottom: bottom },
                            // {  backgroundColor:  trackBGColor,height: sliderHeight, bottom: bottom },
                            // {  backgroundColor:  trackBGColor,height: sliderHeight, bottom: bottom },

                        ]}
                        handleStyle={[
                            { backgroundColor: 'gray', width: handerWidth, margin: handerMargin, border: handerlBorder, bottom: bottom },
                            { backgroundColor: 'gray', width: handerWidth, bordercolor: 'black', margin: handerMargin, border: handerlBorder, bottom: bottom },
                            { backgroundColor: 'gray', width: handerWidth, bordercolor: 'black', margin: handerMargin, border: handerlBorder, bottom: bottom },
                            { backgroundColor: 'orange', width: handerWidth, margin: handerMargin, border: handerlBorder, bottom: bottom }]
                        }
                        railStyle={{ backgroundColor: '', height: sliderHeight, bottom: bottom, magtinleft: 30, }}

                    />

                    {/* <Col span={11}>
                        <Slider
                            range
                            style={{ marginTop: 0 }}
                            min={fRE - 1.25}
                            max={21}
                            step='0.05'
                            // defaultValue={[fDT, fRE]} 
                            value={[fDT, fRE]}
                        />
                    </Col> */}




                </div>
            </div>
        );
    }
}
