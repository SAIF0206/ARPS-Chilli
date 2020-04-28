import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Descriptions } from 'antd';

export default class OrderInfo extends Component {
  state = {
    //table size
    size: 'small',
  };
  constructor(props) {
    super(props)
    this.SelectOrder = this.SelectOrder.bind(this);
    this.getOrder = this.getOrder.bind(this);
    this.state = {
      record: [],
      arr: [],
      order: [],
      orders: [],
      orderData: [],
      selectOrderData: []

    }
  }

  SelectOrder(orderId) {
    console.log('Order Id: ', orderId);
    this.props.handleSelectOrder(orderId)
  }
  
  componentDidMount = () => {
    fetch('http://localhost:4000/api/order/orderdata')
      .then(res => res.json())
      .then(json => {

        // jsonData is parsed json object received from url

        const pagination = { ...this.state.pagination };
        // Read total count from server
        pagination.total = json.totalCount
        pagination.total = 200;
        this.setState({
          loading: false,
          order: json,
          pagination
        });

      })

      .catch((error) => {
        // handle your errors here
        console.error(error)
      })

  };

  // componentWillUnmount() {
  //   fetch('http://localhost:4000/api/order/orderdata')
  //     .then(res => res.json())
  //     .then(json => {

  //       // jsonData is parsed json object received from url

  //       const pagination = { ...this.state.pagination };
  //       // Read total count from server
  //       pagination.total = json.totalCount
  //       pagination.total = 200;
  //       this.setState = () => ({
  //         loading: false,
  //         orders:json,
  //         pagination
  //       });

  //     })

  //     .catch((error) => {
  //       // handle your errors here
  //       console.error(error)
  //     })


  getOrder() {
    var that = this
    let allOrder = that.state.order
    // let allOrder2=that.state.orders
    // console.log('order2',allOrder2)
    let orderInfo = allOrder.filter(d => d.Id === parseInt(this.props.orderId))
    console.log(orderInfo)
    return orderInfo
  }

  render() {

    let orderInfo = this.props.data
    console.log(this.props.data)
    let functionTime=orderInfo.FunctionDate
    let functionDate=orderInfo.FunctionDate.slice(0,10)
    let deliveryTime=(orderInfo.FunctionDate.slice(11,13)-1).toString()+":"+orderInfo.FunctionDate.slice(14,19)
    return (
      <div>
        <Descriptions bordered title="Order Info." size={"small"} >
          <Descriptions.Item label="Id" span={3} ><b>{orderInfo.Id}</b></Descriptions.Item>
          <Descriptions.Item label="Status" span={3} ><b>{orderInfo.Status}</b></Descriptions.Item>
          <Descriptions.Item label="FunctionDate" span={1.5}><b>{functionDate}</b></Descriptions.Item>
          <Descriptions.Item label="DeveliveryTime" span={1.5}><b>{deliveryTime}</b></Descriptions.Item>
          <Descriptions.Item label="EventType"  span={3}><b>{orderInfo.EventType}</b></Descriptions.Item>
          {/* <Descriptions.Item label="OrderDate" ><b>{orderInfo.OrderDate.slice(0, 10)}</b></Descriptions.Item> */}
          <Descriptions.Item label="ContactPerson" span={1.5}><b>{orderInfo.ContactPerson}</b></Descriptions.Item>
          <Descriptions.Item label="ContactNumber" span={1.5}><b>{orderInfo.ContactNumber}</b></Descriptions.Item>
          <Descriptions.Item label="Address" span={3}>
            Block: <b>{orderInfo.Block}</b>
            <br />
              Street: <b>{orderInfo.Street}</b>
            <br />
              Level: <b>{orderInfo.Level}</b>
            <br />
              Unit: <b>{orderInfo.Unit}</b>
            <br />
              Building: <b>{orderInfo.Building}</b>
            <br />
              Postal:<b>{orderInfo.PostalCode}</b>
            <br />
          </Descriptions.Item>
          <Descriptions.Item label="Delivery Note" span={3}>{orderInfo.DeliveryNote}</Descriptions.Item>
          <Descriptions.Item label="Name" span={3}><b>{orderInfo.name}</b></Descriptions.Item>
          <Descriptions.Item label="Menu Name" span={3}><b>{orderInfo.MenuName}</b></Descriptions.Item>
          <Descriptions.Item label="Menu Section" span={3}><b>{orderInfo.MenuSection}</b></Descriptions.Item>
          <Descriptions.Item label="Alternate Contact Person" span={3}><b>{orderInfo.AlterContactPerson}</b></Descriptions.Item>
          <Descriptions.Item label="Alternate Contact Number" span={3}><b>{orderInfo.AlterContactNumber}</b></Descriptions.Item>
          <Descriptions.Item label="Setup Details" span={3}><b>{orderInfo.Setupdetail}</b></Descriptions.Item>

          {/* <Descriptions.Item label="Menu" span={3}>
             MenuName: <b>{orderInfo.MenuName}</b>
            <br />
              MenuRate: <b>{orderInfo.MenuRate}</b>
            <br />
              MenuPax: <b>{orderInfo.MenuPax}</b>
            <br />
              MenuSection: <b>{orderInfo.MenuSection}</b>
            <br />
          </Descriptions.Item> */}
          


        </Descriptions>


        <br />
        <br />
      </div>
    );
  }
}