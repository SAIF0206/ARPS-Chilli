import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
// import { useLocation } from 'react-router-dom';

export default class OrderInfo extends Component {

  state = {
    size: 'small'
  };

  componentDidMount() {
		fetch('http://localhost:4000/api/order/orderdata')
			.then(res => res.json())
			.then(json => {

				// jsonData is parsed json object received from url
				console.log(json)
				
				this.setState({
					loading: false,
					items: json,
				});
			})
			.catch((error) => {
				// handle your errors here
				console.error(error)
			})


	};


	componentWillUnmount() {
		this.setState = () => {
			return;
		};
	}
  render() {
  
    let orderInfo ={
      OrderId:'150171',
      EventType:'1st Mth Celebration ,满月',
      OrderDate:'2020-01-15',
      FunctionDate:'2021-01-19',
      ContactPerson:'CiCi',
      ContactNumber:'82698260',
      MenuName:'Contemporary Ala-Carte Buffet Menu',
      MenuRate:'15.00',
      MenuPax: '45',
      MenuSection: '1',
      Block: '11',
      Street:'tampines central 7',
      Level:'04',
      Unit:'03',
      Building:'the tampines trilliant',
      Postal:'S '+528769,
      DeliveryNote:'None'
  }

    return (
      <div>
        
        {/* <Radio.Group onChange={this.onChange} value={this.state.size}>
          <Radio value="default">default</Radio>
          <Radio value="middle">middle</Radio>
          <Radio value="small">small</Radio>
        </Radio.Group>
        <br /> */}
        <br />
        <Descriptions bordered title="Order Info." size={this.state.size}>
          <Descriptions.Item label="OrderId"span={3} >{orderInfo.OrderId}</Descriptions.Item>
          <Descriptions.Item label="EventType" >{orderInfo.EventType}</Descriptions.Item>
          <Descriptions.Item label="OrderDate" >{orderInfo.OrderDate}</Descriptions.Item>
          <Descriptions.Item label="FunctionDate" >{orderInfo.FunctionDate}</Descriptions.Item>
          
          <Descriptions.Item label="ContactPerson" span={3}>{orderInfo.ContactPerson}</Descriptions.Item>
          <Descriptions.Item label="ContactNumber" span={3}>{orderInfo.ContactNumber}</Descriptions.Item>
          <Descriptions.Item label="Menu" span={3}>
            MenuName: {orderInfo.MenuName}
            <br />
            MenuRate: {orderInfo.MenuRate}
            <br />
            MenuPax: {orderInfo.MenuPax}
            <br />
            MenuSection: {orderInfo.MenuSection}
            <br />
          </Descriptions.Item>
    
          {/* <Descriptions.Item label="MenuName" span={3}>Contemporary Ala-Carte Buffet Menu</Descriptions.Item>
          <Descriptions.Item label="MenuRate">15.00</Descriptions.Item>
          <Descriptions.Item label="MenuPax">45</Descriptions.Item>
          <Descriptions.Item label="MenuSection">1</Descriptions.Item> */}
          <Descriptions.Item label="Address" span={3}>
            Block: {orderInfo.Block}
            <br />
            Street: {orderInfo.Street}
            <br />
            Level: {orderInfo.Level}
            <br />
            Unit: {orderInfo.Unit}
            <br />
            Building: {orderInfo.Building}
            <br />
            Postal:c
            <br />
            </Descriptions.Item>
        <Descriptions.Item label="DeliveryNote" span={3}>{orderInfo.DeliveryNote}</Descriptions.Item>
          
          
        </Descriptions>
        <br />
        <br />
        {/* <Descriptions title="Custom Size" size={this.state.size}>
          <h2>Order Id</h2>
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
        </Descriptions> */}
        {/* <OrderDetails/> */}
      </div>
    );
  }
}