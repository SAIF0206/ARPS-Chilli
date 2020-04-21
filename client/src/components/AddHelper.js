import React from 'react';
import 'antd/dist/antd.css';
import { Form,Select,Input } from 'antd';

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
            driverName:[],
        }
    }
    formRef = React.createRef();

    onNameChange = value => {
     
    };

    onFinish = values => {
        console.log(values);
    };

    render() {
        return (
            
<Form  ref={this.formRef}  onFinish={this.onFinish}>
       
        <Form.Item
          name="helper"
          label=""
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Select
            placeholder="Helper"
            onChange={this.onGenderChange}
            allowClear
          >
            <Option value="helper1">Jonah</Option>
            <Option value="helper2">Chong Lee</Option>
            <Option value="helper3">CC</Option>
            <Option value="helper4">Saif</Option>
            {/* <Option value="driverName">{driverName}</Option> */}

          </Select>
        </Form.Item>
        {/* <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.helper !== currentValues.helper}
        >
          {({ getFieldValue }) =>
            getFieldValue('helper') === 'other' ? (
              <Form.Item
                name="customizeHelper"
                label="Helper"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item> */}
            </Form>
        );
    }
}

export default AddHelper;