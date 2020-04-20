import React from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Row, Col, Popover } from 'antd';
import {
	BrowserRouter as Router,
	// Switch,
	// Route,
	Link,
	// Redirect,
	// useParams,
	// useHistory,
	withRouter
} from "react-router-dom";
// import TimeSlider from '../../components/TimeSlider';
import WWRoutePlan from '../../components/WWRoutePlan'

const clickContent = <div>This is click content.</div>;

class RoutePlanTable extends React.Component {
	state = {
		clicked: false,
		hovered: false,
	  };

	  hide = () => {
		this.setState({
		  clicked: false,
		  hovered: false,
		});
	  };
	
	  handleHoverChange = visible => {
		this.setState({
		  hovered: visible,
		  clicked: false,
		});
	  };
	
	  handleClickChange = visible => {
		this.setState({
		  clicked: visible,
		  hovered: false,
		});
	  };

	constructor() {
		super();
		this.handleClickId = this.handleClickId.bind(this)
		this.state = {
			selectedOrder: [],
			items: [],
			isLoaded: false,
			pagination: {
					// disabled:true,
					pageSize: 9999,
					hideOnSinglePage:true,
			},
			loading: false,
			// selectedRowKeys: [],

			//table header
			columns: [
				{
					title: 'OrderID',
					dataIndex: 'Id',
					key: 'wworderId',
					// render: orderId => <Button type="link" onClick={this.handleClickId.bind(this)}>{orderId}</Button>,
					// render: orderId=><Link to={{ path : '//OrderDetailPage' , state : testData}}>{orderId} </Link>,
					// render: orderId=><Link to="/OrderDetailPage">{orderId} </Link>,
					//value:orderId, row:record, index:index)
					// render: (orderId, order) => (
					// 	<span>
					// 		{/* <Button type="link" onClick={() => { this.handleClickId(order)}}>{orderId}</Button> */}

					// 	</span>),
					render: orderId =>
						<Popover
							content={
							<div>
							<div>{clickContent }</div>
							{/* <Divider dashed/> */}
							<Link to='/OrderDetailPage'>More Detail</Link>
						
							</div>
						}
							title={'Order ID: ' + orderId}
							trigger="click"
							// visible={this.state.visible}
							// onVisibleChange={this.handleVisibleChange}
						>
							<Button type="primary" ghost>{orderId}</Button>
							{/* <Button size='small' onClick={this.showModal}>{orderId}</Button>
							<Modal
								title="Basic Modal"
								visible={this.state.visible}
								onOk={this.handleOk}
								onCancel={this.handleCancel}
							>
							</Modal> */}
						</Popover>,


					width: 100,
					align: 'center',
					fixed: 'left',
				},
				// {
				// 	title: 'EventType',
				// 	dataIndex: 'EventType',
				// 	key: 'eventType',
				// 	width: 250,
				// 	align: 'center',
				// },
				// {
				// 	title: 'Address',
				// 	dataIndex: 'Street',
				// 	key: 'address',
				// 	width: 300,
				// 	align: 'center',
				// },
				// {
				// 	title: 'MenuPax',
				// 	dataIndex: 'MenuPax',
				// 	key: 'menuPax',
				// 	width: 80,
				// 	align: 'center',
				// },
				{
					title: 'Time',
					dataIndex: 'FunctionDate',
					key: 'wwfunctionDate',
					render: (e) =>
						<div className='timeSlider'>
							<Row>

								<Col span={24}>
									<WWRoutePlan  content={e}/>
								</Col>
								{/* <Col span={i2}>
								<Slider range step='3.125' defaultValue={[37.5, 50]} />
							</Col> */}


							</Row>

						</div>
					,
					width: 1000,
					align: 'left',

				}
			],
			currentRow: null
		};

	}


	handleClickId(order) {
		console.log(order)
		console.log(this.props.history)
		this.props.history.push({ pathname: '/OrderDetailPage', query: { order } })
	}

	handleToggle = prop => enable => {
		this.setState({ [prop]: enable });
	};

	//
	componentDidMount() {
		fetch('http://localhost:4000/api/order/orderdata')
			.then(res => res.json())
			.then(json => {

				// jsonData is parsed json object received from url
				console.log(json)
				const pagination = { ...this.state.pagination };
				// Read total count from server
				pagination.total = json.totalCount
				pagination.total = 200;
				this.setState({
					loading: false,
					items: json,
					pagination
				});
			})
			.catch((error) => {
				// handle your errors here
				console.error(error)
			})
	};

	handleSelectDate() {
	};


	componentWillUnmount() {
		this.setState = () => {
			return;
		};
	}

	// handleTableChange = (pagination, filters, sorter) => {
	// 	const pager = { ...this.state.pagination };
	// 	pager.current = pagination.current;
	// 	this.setState({
	// 		pagination: pager
	// 	});
	// 	this.fetch({
	// 		page: pagination.current,
	// 		sortField: sorter.field,
	// 		sortOrder: sorter.order,
	// 		...filters
	// 	});
	// };

	render() {


		return (
			<Router>
				<div className="shadow-radius">
					<Table
						bordered
						columns={this.state.columns}
						dataSource={this.state.items}
						loading={this.state.loading}
						// onChange={this.handleTableChange}
						pagination={this.state.pagination}
					// rowKey={record => record.location.postcode}

					/>
					{/* <Switch>
						<Route path="/OrderDetailPage/:Id" children={<Child />} />
					</Switch> */}
				</div></Router>
		);
	}
}

export default withRouter(RoutePlanTable)