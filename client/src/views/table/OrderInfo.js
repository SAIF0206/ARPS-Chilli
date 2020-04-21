import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Descriptions, Button } from 'antd';

export default class OrderInfo extends Component {

  constructor(props) {
    super(props)
    this.SelectOrder = this.SelectOrder.bind(this);
    this.state = {
      order: [],
    }
  }
  SelectOrder(orderId) {

    console.log('Order Id: ', orderId);
    this.props.handleSelectOrder(orderId)

  }


  state = {
    size: 'small',

  };
  componentDidMount() {
    fetch('http://localhost:4000/api/order/orderdata')
      .then(res => res.json())
      .then(json => {

        // jsonData is parsed json object received from url

        const pagination = { ...this.state.pagination };
        // Read total count from server
        pagination.total = json.totalCount
        pagination.total = 200;
        // var orderByDate=[]
        // var orderTemp=json.filter(function(i){
        // 	return i.dataType.includes(this.props.date)
        // }),
        // orderByDate=orderByDate.concat(orderTemp)
        // console.log(orderByDate)

        this.setState({
          loading: false,
          order: json,
          // items: json.filter(d=>d.FunctionDate.slice(0,10)=="2021-01-09"),

          pagination
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

    let orderInfo = {
      Id: '150171',
      EventType: '1st Mth Celebration ,满月',
      OrderDate: '2020-01-15',
      FunctionDate: '2021-01-19',
      ContactPerson: 'CiCi',
      ContactNumber: '82698260',
      MenuName: 'Contemporary Ala-Carte Buffet Menu',
      MenuRate: '15.00',
      MenuPax: '45',
      MenuSection: '1',
      Block: '11',
      Street: 'tampines central 7',
      Level: '04',
      Unit: '03',
      Building: 'the tampines trilliant',
      Postal: 'S ' + 528769,
      DeliveryNote: 'None'
    }

    const selectOrderId = this.props.orderId;
    const selectOrder= this.state.order.filter(function (i) {
      return i.Id ==selectOrderId
    })
    return (
      <div>
        {console.log(selectOrder)}
        {console.log(selectOrder.Id)}
        <Descriptions bordered title="Order Info." size={this.state.size}>
          <Descriptions.Item label="Id" span={3} >{selectOrder.Id}</Descriptions.Item>
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

      </div>
    );
  }
}