// import React from 'react';
// import 'antd/dist/antd.css';
// import { Table, Button, Row, Col, Popover ,Tooltip} from 'antd';
// import { BrowserRouter as Router, withRouter } from "react-router-dom";
// // import TimeSlider from '../../components/TimeSlider';
// import WWRoutePlan from '../views/routePlan/WWRoutePlan'
// import AddHelper from '../components/AddHelper'
// import OrderInfo from './OrderInfo'

// // const { Option } = Select;
// const clickContent = <div>This is click content.</div>;
// const mystyle = {
// 	width: '100.1%', margin: '2px'
// 	// margin: 
// }
// const getOrder =
// {
// 	"orders": {
// 		"4516b2e1-43dc-49a8-8bfb-7190fa60df21": {
// 			"id": "4516b2e1-43dc-49a8-8bfb-7190fa60df21",
// 			"name": "Order 1",
// 			"eligibility": {
// 				"type": "on",
// 				"onDates": [
// 					"20151204",
// 					"20151205",
// 					"20151206"
// 				]
// 			},
// 			"forceVehicleId": null,
// 			"priority": 0,
// 			"loads": {},
// 			"pickup": null,
// 			"delivery": {
// 				"depotId": null,
// 				"location": {
// 					"address": "3101-3199 Florida Ave, Jasper, AL 35501, USA",
// 					"latLng": [
// 						33817872,
// 						-87266893
// 					],
// 					"status": "OK"
// 				},
// 				"timeWindows": [
// 					{
// 						"startSec": 30600,
// 						"endSec": 37800
// 					},
// 					{
// 						"startSec": 45000,
// 						"endSec": 55800
// 					}
// 				],
// 				"notes": "demonstrate the concept of multiple time windows as well as eligibility date range",
// 				"serviceTimeSec": 600,
// 				"tagsIn": [],
// 				"tagsOut": [],
// 				"customFields": {}
// 			},
// 			"isService": false
// 		},
// 		"0d56e7a3-c737-472e-bec9-e2f19d4865d3": {
// 			"id": "0d56e7a3-c737-472e-bec9-e2f19d4865d3",
// 			"name": "Order 2",
// 			"eligibility": {
// 				"type": "on",
// 				"onDates": [
// 					"20151204"
// 				]
// 			},
// 			"forceVehicleId": null,
// 			"priority": 20,
// 			"loads": {},
// 			"pickup": null,
// 			"delivery": {
// 				"depotId": null,
// 				"location": {
// 					"address": "701-799 Birmingham Ave, Jasper, AL 35501, USA",
// 					"latLng": [
// 						33845214,
// 						-87273604
// 					],
// 					"status": "OK"
// 				},
// 				"timeWindows": [
// 					{
// 						"startSec": 32400,
// 						"endSec": 43200
// 					}
// 				],
// 				"notes": "Demonstrate the concept of priority and notes (Driver must use the back door to enter the building)",
// 				"serviceTimeSec": 1800,
// 				"tagsIn": [],
// 				"tagsOut": [],
// 				"customFields": {}
// 			},
// 			"isService": false
// 		}
// 	},
// 	"depots": {}
// }

// function orderAssign(orderId) {
// 	if (orderId === 150171) {
// 		return '#f50';
// 	}
// 	else if (orderId === 150175) {
// 		return '#ff9933';
// 	}
// 	else {
// 		return '#87d068'
// 	}
// }

// function toopTip(orderId){
// 	if (orderId === 150171) {
// 		return 'Unassigned';
// 	}
// 	else if (orderId === 150175) {
// 		return 'Need Helper';
// 	}
// 	else {
// 		return 'Assigned'
// 	}
// }

// class RoutePlanTable extends React.Component {
// 	state = {
// 		clicked: false,
// 		hovered: false,
// 	};

// 	hide = () => {
// 		this.setState({
// 			clicked: false,
// 			hovered: false,
// 		});
// 	};

// 	handleHoverChange = visible => {
// 		this.setState({
// 			hovered: visible,
// 			clicked: false,
// 		});
// 	};

// 	handleClickChange = visible => {
// 		this.setState({
// 			clicked: visible,
// 			hovered: false,
// 		});
// 	};

// 	constructor() {
// 		super();
// 		this.handleClickId = this.handleClickId.bind(this)
// 		this.onShowDetail=this.onShowDetail.bind(this)

// 		this.state = {
// 			record:[],
// 			selectedOrder: [],
// 			driver: [],
// 			items: [],
// 			isLoaded: false,
// 			pagination: {
// 				// disabled:true,
// 				pageSize: 9999,
// 				hideOnSinglePage: true,
// 			},
// 			loading: false,
// 			// selectedRowKeys: [],

// 			//table header
// 			columns: [
// 				{
// 					title: 'OrderID',
// 					dataIndex: 'Id',
// 					key: 'wworderId',
// 					// render: orderId => <Button type="link" onClick={this.handleClickId.bind(this)}>{orderId}</Button>,
// 					// render: orderId=><Link to={{ path : '//OrderDetailPage' , state : testData}}>{orderId} </Link>,
// 					// render: orderId=><Link to="/OrderDetailPage">{orderId} </Link>,
// 					//value:orderId, row:record, index:index)
// 					// render: (orderId, order) => (
// 					// 	<span>
// 					// 		{/* <Button type="link" onClick={() => { this.handleClickId(order)}}>{orderId}</Button> */}

// 					// 	</span>),
// 					render: (orderId, record, index) =>
// 					<Tooltip title={`${toopTip(orderId)}`}>
// 						<Popover
// 						onClick={this.onShowDetail.bind(this, record, index)}
// 						placement="right"
// 						content={
// 							//clickContent,
// 							<div>
// 								<OrderInfo data={record} />
// 							</div>
// 						}
// 						// title={'Order ID: ' + text}
// 						trigger="click"
// 						>
// 						{/* <Button type="link" ><b>Order Detail</b></Button> */}
// 						{/* <Divider type="vertical" />
// 						<Button type="link" ><b>Delivery Detail</b></Button> */}


// 							<Button className='wwOrderId' type="primary" style={{ background: `${orderAssign(orderId)}`, borderColor: `${orderAssign(orderId)}` }}><b>{orderId}</b></Button>
// 							{/* <Button size='small' onClick={this.showModal}>{orderId}</Button>
// 							<Modal
// 								title="Basic Modal"
// 								visible={this.state.visible}
// 								onOk={this.handleOk}
// 								onCancel={this.handleCancel}
// 							>
// 							</Modal> */}
// 						</Popover>
// 					</Tooltip>,		

// 					width: 70,
// 					align: 'center',
// 					fixed: 'left',
// 				},
// 				{
// 					title: 'Driver',
// 					dataIndex: 'Driver',
// 					key: 'driver',
// 					render: driver =>
// 						<div>
// 							{driver}Driver
// 						</div>,
// 					width: 80,
// 					align: 'center',
// 				},
// 				{
// 					title: 'Helper',
// 					key: 'driver',
// 					render: () =>
// 						<div>
// 							<AddHelper />
// 						</div>,
// 					width: 90,
// 					align: 'center',
// 				},
// 				// {
// 				// 	title: 'Address',
// 				// 	dataIndex: 'Street',
// 				// 	key: 'address',
// 				// 	width: 300,
// 				// 	align: 'center',
// 				// },
// 				// {
// 				// 	title: 'MenuPax',
// 				// 	dataIndex: 'MenuPax',
// 				// 	key: 'menuPax',
// 				// 	width: 80,
// 				// 	align: 'center',
// 				// },
// 				{
// 					title:
// 						<div className="timeScaler" >
// 							<img src={require('../../assets/img/time scale.png')} alt="time scaler" style={mystyle} />
// 						</div>,
// 					dataIndex: 'FunctionDate',
// 					key: 'wwfunctionDate',
// 					render: (e) =>
// 						<div >
// 							<Row>

// 								<Col span={24}>
// 									<WWRoutePlan content={e} />
// 								</Col>
// 								{/* <Col span={i2}>
// 								<Slider range step='3.125' defaultValue={[37.5, 50]} />
// 							</Col> */}


// 							</Row>

// 						</div>
// 					,
// 					width: 1000,
// 					align: 'left',

// 				}
// 			],
// 			currentRow: null
// 		};

// 	}

// 	onShowDetail(record,index){
// 		this.setState({
// 			record:record
// 		})
// 	}

// 	handleClickId(order) {
// 		console.log(order)
// 		console.log(this.props.history)
// 		this.props.history.push({ pathname: '/OrderDetailPage', query: { order } })
// 	}

// 	handleToggle = prop => enable => {
// 		this.setState({ [prop]: enable });
// 	};

// 	//
// 	componentDidMount() {
// 		fetch('http://localhost:4000/api/order/orderdata')
// 			.then(res => res.json())
// 			.then(json => {

// 				// jsonData is parsed json object received from url
// 				console.log(json)
// 				const pagination = { ...this.state.pagination };
// 				// Read total count from server
// 				pagination.total = json.totalCount
// 				pagination.total = 200;
// 				this.setState({
// 					loading: false,
// 					items: json,
// 					pagination
// 				});
// 			})
// 			.catch((error) => {
// 				// handle your errors here
// 				console.error(error)
// 			})
// 		fetch('http://localhost:4000/api/drivers/data')
// 			.then(res => res.json())
// 			.then(json => {
// 				// jsonData is parsed json object received from url
// 				console.log(json)
// 				this.setState({
// 					loading: false,
// 					driver: json,
// 				});
// 			})
// 			.catch((error) => {
// 				// handle your errors here
// 				console.error(error)
// 			})
// 	};

// 	handleSelectDate() {
// 	};


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

// 	render() {


// 		return (

// 			<Router>
// 				<div className="shadow-radius">


// 					<Table
// 						bordered
// 						columns={this.state.columns}
// 						dataSource={this.state.items}
// 						loading={this.state.loading}
// 						// onChange={this.handleTableChange}
// 						pagination={this.state.pagination}
// 						// rowKey={record => record.location.postcode}
// 						scroll={{ x: '140%', y: '100%' }}
// 					/>
// 					{/* <Switch>
// 						<Route path="/OrderDetailPage/:Id" children={<Child />} />
// 					</Switch> */}
// 				</div>
// 			</Router>
// 		);
// 	}
// }

// export default withRouter(RoutePlanTable)