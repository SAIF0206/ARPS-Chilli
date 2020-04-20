import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Row, Col, Tag } from 'antd';
import {
	BrowserRouter as Router,
} from "react-router-dom";
import TimeSlider from '../../components/TimeSlider.js'

// function onDateChange(value, dateString) {
// 	console.log('Selected Time: ', value);
// 	console.log('Formatted Selected Time: ', dateString);
// }

function eventTag(eventType) {
	if (eventType === 'Mini Buffet, 迷你套餐' || eventType === 'Bento Set, 套餐打包') { return <Tag color='volcano'>{eventType}</Tag> }
	// else if(eventType== 'Corporate Function, 公司') 
	// {return <Tag  color='green'>{eventType}</Tag>}
	else { return <Tag color='geekblue'>{eventType}</Tag> }
}

function paxCap(MenuPax) {
	if (MenuPax <= 65) { return <Tag color='#009933'>{MenuPax}</Tag> }
	else if (MenuPax > 65 && MenuPax <= 100) { return <Tag color='#ff9900'>{MenuPax}</Tag> }
	else { return <Tag color='#cc0000'>{MenuPax}</Tag> }
}
export default class OrderIndex extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			isLoaded: false,
			pagination: {
				// disabled:true,
				pageSize: 9999,
				hideOnSinglePage: true,
			},
			loading: false,
			// selectedRowKeys: [],

			//table header
			columns: [
				{
					title: 'OrderID',
					dataIndex: 'Id',
					key: 'orderId',
					// render: orderId => <Button type="link" onClick={() => { this.handleClickId(orderId) }}>{orderId}</Button>,
					// render: orderId=><Link to={{ path : '/OrderInfo' , state : { from:'orderId' }}}>{orderId} </Link>,
					// render: orderId=><Link to="/OrderDetailPage">{orderId} </Link>,
					//value:orderId, row:record, ind
					render: (orderId, record) => (
						<span>
							<Button type="link" onClick={() => this.handleClickId(record)}>
								{orderId}
							</Button>
						</span>),


					width: 50,
					align: 'center',
					fixed: 'left',
				},
				{
					title: 'EventType',
					dataIndex: 'EventType',
					key: 'eventType',
					render: eventType =>
						<span>
							{eventTag(eventType)}
						</span>
					,
					width: 100,
					align: 'center',
				},
				{
					title: 'Address',
					dataIndex: 'Street',
					key: 'address',
					width: 100,
					align: 'center',
				},
				{
					title: 'Pax',
					dataIndex: 'MenuPax',
					key: 'menuPax',
					render: menuPax =>
						<span>
							{paxCap(menuPax)}
						</span>
					,
					width: 40,
					align: 'center',
				},
				{
					title: 'Time',
					dataIndex: 'FunctionDate',
					key: 'functionDate',
					render: (time) =>

							<div className='timeSlider'>
								<Row>
									<Col span={20}>
										<TimeSlider  content={time}/>
									</Col>
								</Row>
							</div>

					,
					width: 600,
					align: 'left',

				}
			],
			currentRow: null
		};

	}


	handleClickId(e) {
		console.log(e)

		// this.props.history.push("/detail", {
		// 	dotData: record
		// 	});
		// this.props.router.push({ pathname:'/OrderInfo ',state:{name : 'Id' } })
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
				<div className="table">
					<Table
						bordered
						columns={this.state.columns}
						dataSource={this.state.items}
						loading={this.state.loading}
						// onChange={this.handleTableChange}
						pagination={this.state.pagination}
						// rowKey={record => record.location.postcode}
						scroll={{ x: '140%', y: 500 }}
					/>
					{/* <Switch>
						<Route path="/OrderDetailPage/:Id" children={<Child />} />
					</Switch> */}
				</div></Router>
		);
	}
}

// function Child() {
// 	// We can use the `useParams` hook here to access
// 	// the dynamic pieces of the URL.
// 	let { id } = useParams();

// 	return (
// 	  <div>
// 		<h3>ID: {id}</h3>
// 	  </div>
// 	);
//   }

