import 'rc-slider/assets/index.css';
import React  from 'react';
import Slider from 'rc-slider';
import '../../assets/css/index.css'
import Tooltip from 'rc-tooltip';

const Range = Slider.Range;
const Handle = Slider.Handle;
const style = { width: '107%', marginLeft: 16, marginTop:4};

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  const time=value
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={time}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={time} {...restProps} />
    </Tooltip>
  );
};

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

function log(value) {
  console.log(value); //eslint-disable-line
}


// var setVlue1 = 0;
// var changeValue1 = 0;
// var changeValue2 = 0;
// var setVlue2 = 0;

export default class WWTimeSlider extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      sliderValues: null,
      fRT: null,
      fPT: null,
      fDT: null,
      fRE: null,
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (value) => {
    console.log(value[0])
    console.log(value[1])
    console.log(value[2])
    console.log(value[3])
    if (value[1] < (this.state.fRE - 2.5)) {
      value[1] = this.state.fRE - 2.5
    }
    else if (value[1] > (this.state.fRE - 1.15)) {
      value[1] = this.state.fRE - 1.15
    }

    if (value[2] > (this.state.fRE - 0.5)) {
      value[2] = this.state.fRE - 0.5
    }
    else if (value[2] < (this.state.fRE - 1.5)) {
      value[2] = this.state.fRE - 1.5
    }
    this.setState({
      fRE: this.state.fRE,
      fRT: this.state.fRT,
      fPT: value[1],
      fDT: value[2]
    })

    // let value=[]
    // this.setState({ 
    //   sliderValues:[fixFRT,value[1],value[2],fixFRE]
    // });
    console.log([this.state.fRT, this.state.fPT, this.state.fDT, this.state.fRE])
  };

  onSliderChange = (value) => {
    log(value);
    this.setState({
      value: '',
    });
  }
  componentWillMount() {
    console.log('componentWillMount: ')
    const time = this.props.content;
    const hour = time.slice(11, 13);
    const min = time.slice(14, 16);
    // Food ready to eat time
    this.setState({
      fRE: parseInt(hour) + parseInt(min) / 60,
      fDT: parseInt(hour) + parseInt(min) / 60 - 0.75,
      fPT: parseInt(hour) + parseInt(min) / 60 - 2.5,
      fRT: parseInt(hour) + parseInt(min) / 60 - 3
    })
  }
  render() {


    var value = [this.state.fRT, this.state.fPT, this.state.fDT, this.state.fRE]

    let sliderHeight = '20px'
    let handerlBorder = 'solid 2px'
    let handerMargin = '2px '
    let handerWidth = ''
    let bottom = '-2px'
    let trackBGColor='#1890ff'
 
    
    //consider bento set 

    return (

      <div>

        <div style={style} >
          <Range
          
            // tipFormatter={convertFloatToTime}
            tipProps={{ placement: "top", prefixCls: "rc-slider-tooltip" }}
            onChange={(value) => this.handleChange(value)}
            count={3}
            handle={handle}
            marks={marks}
            min={5}
            max={21}
            step={0.25}
            allowCross={false}
            value={value}
            // value={[fRT, fPT, fDT, fRE]}
            pushable={0.25}
            trackStyle={[
              { backgroundColor:trackBGColor, height: sliderHeight, bottom: bottom },
              { backgroundColor: 'gray', height: sliderHeight, bottom: bottom },
              { backgroundColor: trackBGColor, height: sliderHeight, bottom: bottom },

            ]}
            handleStyle={[
              { backgroundColor: 'gray',width: handerWidth, margin: handerMargin, border: handerlBorder, bottom: bottom },
              { backgroundColor: 'white',width: handerWidth,  margin: handerMargin, border: handerlBorder, bottom: bottom },
              { backgroundColor: 'white',width: handerWidth, margin: handerMargin, border: handerlBorder, bottom: bottom },
              { backgroundColor: 'orange',width: handerWidth, margin: handerMargin, border: handerlBorder, bottom: bottom }]
            }
            railStyle={{ backgroundColor: '', height: sliderHeight, bottom: bottom }}

          />
        </div>


      </div>
    );
  }
}
