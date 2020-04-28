// import React, { Component } from 'react';
// import '../../assets/css/index.css'
// import 'antd/dist/antd.css';
// import { Table, Button, Row, Col, Tag, Popover } from 'antd';
// import TimeSlider fro../views/home/Order/TimeSlider.js.js'
// import OrderInfo from './OrderInfo'
// // import axios from 'axios'


// function eventTag(eventType) {
// 	//For mini buffet or bento set, tag would be special color 'volcano'
// 	if (eventType === 'Mini Buffet, 迷你套餐' || eventType === 'Bento Set, 套餐打包') { return <Tag color='volcano'>{eventType}</Tag> }
// 	//TODO add if more eventType label we need
// 	// else if(eventType== 'Corporate Function, 公司') 
// 	// {return <Tag  color='green'>{eventType}</Tag>}
// 	else { return <Tag color='geekblue'>{eventType}</Tag> }
// }

// function paxCap(MenuPax) {
// 	//For menupax (0,65],(65,100] and [100,...] seperate with different color 
// 	if (MenuPax <= 65) { return <Tag color='#009933'>{MenuPax}</Tag> }
// 	else if (MenuPax > 65 && MenuPax <= 100) { return <Tag color='#ff9900'>{MenuPax}</Tag> }
// 	else { return <Tag color='#cc0000'>{MenuPax}</Tag> }
// }


// function paxVol(MenuPax) {
// 	let n=parseInt(MenuPax)
// 	// console.log(n)
// 	// switch(n){
// 	// 	case(n>=1 && n<=30):return '80'
// 	// 	case(n>=31 && n<=60):return '140'
// 	// 	case(n>=61 && n<=90):return '220'
// 	// 	case(n>=91 && n<=120):return '280'
// 	// 	case(n>=120 && n<=200):return '350'
// 	// 	default:return n;
// 	// }
// 	if(n>=1 && n<=30){return '80'}
// 	else if (n>=31 && n<=60){return '140'}
// 	else if	(n>=61 && n<=90){return '220'}
// 	else if	(n>=91 && n<=120){return '280'}
// 	else if	(n>=120 && n<=200){return '350'}
// 	else{return null}
// }
// const mystyle = {
// 	margin: '-8px',
// 	width: '101.8%'
// };

// class OrderIndex extends Component {
// 	//hide or show the popover of order detail
// 	state = {
// 		clicked: false,
// 		//table size
// 		size: 'small',
// 	};
// 	hide = () => {
// 		this.setState({
// 			clicked: false,

// 		});
// 	};
// 	handleClickChange = visible => {
// 		this.setState({
// 			clicked: visible,

// 		});
// 	};

// 	state = {
// 		orders: null,
// 		Id: '',
// 		EventType: '',
// 		OrderDate: '',
// 		FunctionDate: '',
// 		ContactPerson: '',
// 		ContactNumber: '',
// 		MenuName: '',
// 		MenuRate: '',
// 		MenuPax: '',
// 		MenuSection: '',
// 		Block: '',
// 		Street: '',
// 		Level: '',
// 		Unit: '',
// 		Building: '',
// 		Postal: 0,
// 		DeliveryNote: '',
// 		errors: {},
// 	};

// 	constructor(props) {
// 		super(props);
// 		this.handleClickOrder = this.handleClickOrder.bind(this);
// 		this.onShowDetail=this.onShowDetail.bind(this);
// 		this.state = {
// 			Id: '',
// 			EventType: '',
// 			OrderDate: '',
// 			FunctionDate: '',
// 			ContactPerson: '',
// 			ContactNumber: '',
// 			MenuName: '',
// 			MenuRate: '',
// 			MenuPax: '',
// 			MenuSection: '',
// 			Block: '',
// 			Street: '',
// 			Level: '',
// 			Unit: '',
// 			Building: '',
// 			Postal: 0,
// 			DeliveryNote: '',
// 			record:[],
// 			orders: [],
// 			isLoaded: false,
// 			pagination: {
// 				pageSize: 999999,
// 				hideOnSinglePage: true,
// 			},
// 			loading: false,

// 			// selectedRowKeys: [],

// 			//table header
// 			columns: [
// 				{
// 					title: 'OrderID',
// 					dataIndex: 'Id',
// 					key: 'orderId',
// 					render:  (text,record,index) =>
// 						<div>
// 						<center>
// 							<Popover 
// 								onClick={this.onShowDetail.bind(this,record,index)}
// 								placement="right"
// 								content={
// 									//clickContent,
// 									<div>
// 										<OrderInfo data={record} />
// 									</div>
// 								}
// 								// title={'Order ID: ' + text}
// 								trigger="click"
// 							>
// 								<Button type="link" ><b>{text}</b></Button>
// 							</Popover>
// 						</center>
// 						</div>,
// 					width: 60,

// 					align: 'center',
// 					// fixed: 'left',
// 				},
// 				{
// 					title: 'EventType',
// 					dataIndex: 'EventType',
// 					key: 'eventType',
// 					render: eventType =>
// 						<span>
// 							{eventTag(eventType)}
// 						</span>
// 					,
// 					width: 100,
// 					align: 'center',
// 				},
// 				{
// 					title: 'Address',
// 					dataIndex: 'Street',
// 					key: 'address',
// 					render:e=>
// 					<span><b>{e}</b></span>,
// 					width: 100,
// 					align: 'center',
// 				},
// 				{
// 					title: 'Pax',
// 					dataIndex: 'MenuPax',
// 					key: 'menuPax',
// 					render: menuPax =>
// 						<span><b>
// 							{paxCap(menuPax)}
// 						</b></span>,
// 					width: 40,
// 					align: 'center',
// 				},
// 				{
// 					title: 'Volume',
// 					dataIndex: 'MenuPax',
// 					key: 'paxToVol',
// 					render: menuPax =>
// 						<span>
// 							<p><b>{paxVol(menuPax)}</b></p>
// 						</span>,
// 					width: 40,
// 					align: 'center',
// 				},
// 				{
// 					title:
// 						<div className="timeScaler" >
// 							<img src={require('../../assets/img/time scale.png')} alt="time scaler" style={mystyle} />
// 						</div>,
// 					dataIndex: 'FunctionDate',
// 					key: 'functionDate',
// 					render: (date) =>

// 						<div className='timeSlider'>
// 							<Row>
// 								<Col span={24}>
// 									<TimeSlider content={date} />
// 								</Col>
// 							</Row>
// 						</div>,
// 					width: 600,
// 					align: 'left',

// 				}
// 			],
// 			currentRow: null
// 		};

// 	}

// 	// handleSelectDate(orderId) {
// 	// 	this.setState({
// 	// 		selectOrderId:orderId
// 	// 	})
// 	// }

// 	showDetailOrder = (orderId, e) => {
// 		console.log('OrderId', orderId)
// 		console.log('Event', e)
// 	}



// 	handleClickOrder(order) {
// 		this.setState({
// 			order
// 		})
// 	}


// 	//fetch data from API by axios
// 	// async componentWillMount(){
// 	// 	console.log('componentWillMount')
// 	// 	let result= await axios.get('http://localhost:4000/api/order/orderdata')
// 	// 	// console.log(result)
// 	// 	let data=(result.data)
// 	// 	console.log(data)
// 	// 	this.setState({
// 	// 		selectOrderData:data
// 	// 	})
// 	// }

// 	componentDidMount() {
// 		fetch('http://localhost:4000/api/order/orderdata')
// 			.then(res => res.json())
// 			.then(json => {

// 				// jsonData is parsed json object received from url
// 				const pagination = { ...this.state.pagination };
// 				// Read total count from server
// 				pagination.total = json.totalCount
// 				// pagination.total = 200;
// 				this.setState({
// 					loading: false,
// 					orders: json,
// 					pagination
// 				});
// 				console.log("Show Orders",this.state.orders)
// 			})
// 			.catch((error) => {
// 				// handle your errors here
// 				console.error(error)
// 			})
// 	};

// 	// handleSelectDate(orderId) {
// 	// 	this.setState({
// 	// 		orderId
// 	// 	})
// 	// }

// 	componentWillUnmount() {
// 		this.setState = () => {
// 			return;
// 		};
// 	}


// 	// handleTableChange = (pagination, filters, sorter) => {
// 	// 	const pager = { ...this.state.pagination };
// 	// 	pager.current = pagination.current;
// 	// 	this.setState({
// 	// 		pagination: pager
// 	// 	});
// 	// 	this.fetch({
// 	// 		page: pagination.current,
// 	// 		sortField: sorter.field,
// 	// 		sortOrder: sorter.order,
// 	// 		...filters
// 	// 	});
// 	// };

// 	onShowDetail(record,index){
// 		console.log(record)
// 		console.log(index)
// 		this.setState({
// 			record:record
// 		})
// 	}

// 	render() {
// 		let selectDate = this.props.date

// 		return (
// 			<div className="table">

// 				<Table
					
// 					bordered
// 					columns={this.state.columns}
// 					dataSource={this.state.orders.filter(d => d.FunctionDate.slice(0, 10) === selectDate)}
// 					loading={this.state.loading}
// 					// onChange={this.handleTableChange}
// 					pagination={this.state.pagination}
// 					// rowKey={record => record.location.postcode}
// 					scroll={{ x: '160%', y: 500 }}
// 				/>



// 			</div>
// 		);
// 	}
// }

// export default OrderIndex;
