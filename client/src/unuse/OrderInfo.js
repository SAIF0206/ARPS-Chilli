// import React, { Component } from 'react';
// import 'antd/dist/antd.css';
// import { Descriptions } from 'antd';
// // import axios from 'axios'

// // function setStateAsync(nextState) {
// //   return new Promise(resolve => {
// //     this.setState(nextState, resolve);
// //   });
// // }

// export default class OrderInfo extends Component {
//   state = {
//     size: 'small',

//   };
//   constructor(props) {
//     super(props)
//     this.SelectOrder = this.SelectOrder.bind(this);
//     this.getOrder = this.getOrder.bind(this);
//     this.state = {
//       // orderObject:null,
//       record: [],
//       arr: [],
//       order: [],
//       orders: [],
//       orderData: [],
//       // OrderId: null,
//       // EventType: null,
//       // orderDate: null,
//       selectOrderData: []

//     }
//   }

//   SelectOrder(orderId) {
//     console.log('Order Id: ', orderId);
//     this.props.handleSelectOrder(orderId)
//   }
//   // getOrder() {

//   //   const selectOrderId = this.props.orderId;
//   //   console.log(selectOrderId)
//   //   const selectOrder= this.state.orderData.find(function (i) {
//   //     return this.state.orderData[i].Id ==selectOrderId
//   //   });
//   //   console.log('order', selectOrder)
//   //   return selectOrder
//   // };

//   //fetch data from API by axios
//   // async componentWillMount() {
//   //   console.log('componentWillMount')
//   //   let result = await axios.get('http://localhost:4000/api/order/orderdata')
//   //   let orderData = (result.data)
//   // let orderObject = {}
//   // result.data.forEach((item,i) => {
//   //   orderObject[i] = {
//   //     Id:item.Id,
//   //     EventType: item.EventType,
//   //     OrderDate: item.OrderDate,
//   //     Status: item.Status,
//   //     FunctionDate: item.FunctionDate,
//   //     ContactPerson: item.ContactPerson,
//   //     ContactNumber: item.ContactNumber,
//   //     MenuName:item.MenuName,
//   //     MenuRate:item.MenuRate,
//   //     MenuPax: item.MenuPax,
//   //     MenuSection: item.MenuSection,
//   //     Block: item.Block,
//   //     Street: item.Street,
//   //     Level: item.Level,
//   //     Unit: item.Unit,
//   //     Building: item.Building,
//   //     Postal: item.Postal,
//   //     DeliveryNote: item.DeliveryNote,
//   //   }

//   // })




//   // this.setState({
//   //   orderObject:orderObject
//   // })
//   // console.log('axios date:', orderObject)
//   //   this.setState({
//   //     order:result,
//   //     orderData:orderData
//   //   })
//   // }

//   componentDidMount = () => {
//     fetch('http://localhost:4000/api/order/orderdata')
//       .then(res => res.json())
//       .then(json => {

//         // jsonData is parsed json object received from url

//         const pagination = { ...this.state.pagination };
//         // Read total count from server
//         pagination.total = json.totalCount
//         pagination.total = 200;
//         this.setState({
//           loading: false,
//           order: json,
//           pagination
//         });

//       })

//       .catch((error) => {
//         // handle your errors here
//         console.error(error)
//       })

//   };

//   // componentWillUnmount() {
//   //   fetch('http://localhost:4000/api/order/orderdata')
//   //     .then(res => res.json())
//   //     .then(json => {

//   //       // jsonData is parsed json object received from url

//   //       const pagination = { ...this.state.pagination };
//   //       // Read total count from server
//   //       pagination.total = json.totalCount
//   //       pagination.total = 200;
//   //       this.setState = () => ({
//   //         loading: false,
//   //         orders:json,
//   //         pagination
//   //       });

//   //     })

//   //     .catch((error) => {
//   //       // handle your errors here
//   //       console.error(error)
//   //     })


//   // }

//   getOrder() {
//     var that = this
//     let allOrder = that.state.order
//     // let allOrder2=that.state.orders
//     // console.log('order2',allOrder2)
//     let orderInfo = allOrder.filter(d => d.Id === parseInt(this.props.orderId))
//     console.log(orderInfo)
//     return orderInfo
//   }

//   render() {

//     // let orderInfo = {
//     //   Id: '150171',
//     //   EventType: '1st Mth Celebration ,满月',
//     //   OrderDate: '2020-01-15',
//     //   FunctionDate: '2021-01-19',
//     //   ContactPerson: 'CiCi',
//     //   ContactNumber: '82698260',
//     //   MenuName: 'Contemporary Ala-Carte Buffet Menu',
//     //   MenuRate: '15.00',
//     //   MenuPax: '45',
//     //   MenuSection: '1',
//     //   Block: '11',
//     //   Street: 'tampines central 7',
//     //   Level: '04',
//     //   Unit: '03',
//     //   Building: 'the tampines trilliant',
//     //   Postal: 'S ' + 528769,
//     //   DeliveryNote: 'None'
//     // };
//     const orderInfo = this.props.data
//     console.log(this.props.data)
//     // console.log('select order',this.state.orderData)
//     // let orderInfo=this.getOrder()

//     return (
//       <div>
//         <Descriptions bordered title="Order Info." size={this.state.size} >
//           <Descriptions.Item label="Id" span={3} ><b>{orderInfo.Id}</b></Descriptions.Item>
//           <Descriptions.Item label="EventType"  ><b>{orderInfo.EventType}</b></Descriptions.Item>
//           <Descriptions.Item label="FunctionDate" ><b>{orderInfo.FunctionDate.slice(0, 10)}</b></Descriptions.Item>
//           <Descriptions.Item label="OrderDate" ><b>{orderInfo.OrderDate.slice(0, 10)}</b></Descriptions.Item>
//           <Descriptions.Item label="ContactPerson" span={3}><b>{orderInfo.ContactPerson}</b></Descriptions.Item>
//           <Descriptions.Item label="ContactNumber" span={3}><b>{orderInfo.ContactNumber}</b></Descriptions.Item>
//           <Descriptions.Item label="Menu" span={3}>
//             MenuName: <b>{orderInfo.MenuName}</b>
//             <br />
//               MenuRate: <b>{orderInfo.MenuRate}</b>
//             <br />
//               MenuPax: <b>{orderInfo.MenuPax}</b>
//             <br />
//               MenuSection: <b>{orderInfo.MenuSection}</b>
//             <br />
//           </Descriptions.Item>
//           <Descriptions.Item label="Address" span={3}>
//             Block: <b>{orderInfo.Block}</b>
//             <br />
//               Street: <b>{orderInfo.Street}</b>
//             <br />
//               Level: <b>{orderInfo.Level}</b>
//             <br />
//               Unit: <b>{orderInfo.Unit}</b>
//             <br />
//               Building: <b>{orderInfo.Building}</b>
//             <br />
//               Postal:<b>{orderInfo.PostalCode}</b>
//             <br />
//           </Descriptions.Item>
//           <Descriptions.Item label="DeliveryNote" span={3}>{orderInfo.DeliveryNote}</Descriptions.Item>


//         </Descriptions>


//         <br />
//         <br />
//       </div>
//     );
//   }
// }