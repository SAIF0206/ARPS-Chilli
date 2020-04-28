import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;
// const layout = {
//     labelCol: {
//         span: 8,
//     },
//     wrapperCol: {
//         span: 16,
//     },
// };
// const tailLayout = {
//     wrapperCol: {
//         offset: 8,
//         span: 16,
//     },
// };

class AddHelper extends React.Component {
    constructor(){
        super()
        this.state={
            driver:"",
        }
    }
    formRef = React.createRef();

    onHelperChange = value => {
      // console.log(value)
    };

    onFinish = values => {
        // console.log(values);
    };
    componentDidMount() {
          fetch('http://localhost:4000/api/drivers/data')
        .then(res => res.json())
        .then(json => {
          // jsonData is parsed json object received from url
          // console.log(json)
          this.setState({
            loading: false,
            driver: json,
          });
        })
        .catch((error) => {
          // handle your errors here
          console.error(error)
        })
      };
    
    render() {
        return (
          <Select
            placeholder="Helper"
            onChange={this.onHelperChange}
            allowClear
          >
            <Option value="helper1">Joanh</Option>
            <Option value="helper2">Chong Lee</Option>
            <Option value="helper3">CC</Option>
            <Option value="helper4">Saif</Option>
            {/* <Option value="driverName">{driverName}</Option> */}

          </Select>


     
        );
    }
}

export default AddHelper;