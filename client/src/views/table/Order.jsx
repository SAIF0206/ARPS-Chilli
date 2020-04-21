import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Row, Col, Tag, Modal, Popover } from 'antd';
import TimeSlider from '../../components/TimeSlider.js'
import { Link } from 'react-router-dom';
import OrderInfo from './OrderInfo'

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
const clickContent = <div>This is click content.</div>;
const hoverContent = <div>This is hover content.</div>;

class OrderIndex extends Component {
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

	state = {
		Id: '',
		EventType: '',
		OrderDate: '',
		FunctionDate: '',
		ContactPerson: '',
		ContactNumber: '',
		MenuName: '',
		MenuRate: '',
		MenuPax: '',
		MenuSection: '',
		Block: '',
		Street: '',
		Level: '',
		Unit: '',
		Building: '',
		Postal: 0,
		DeliveryNote: '',
		errors: {},
	};
	constructor(props) {
		super(props);
		this.handleClickOrder = this.handleClickOrder.bind(this);
		this.state = {
			orderId: "",
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
					render: orderId =>
						<center>
							<Popover placement="right"

								content={
									clickContent,
									<div>
										<OrderInfo orderId={orderId} />
									</div>
								}
								title={'Order ID: ' + orderId}
								trigger="click"
							>
								<Button type="link" >{orderId}</Button>
								{/* <Button size='small' onClick={this.showModal}>{orderId}</Button>
						<Modal
							title="Basic Modal"
							visible={this.state.visible}
							onOk={this.handleOk}
							onCancel={this.handleCancel}
						>
						</Modal> */}
							</Popover></center>,


					width: 60,
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
									<TimeSlider content={time} />
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


	handleClickOrder(order) {
		this.setState({
			order
		})
		// console.log(record)
		// const { Id,
		// 	EventType,
		// 	OrderDate,
		// 	FunctionDate,
		// 	ContactPerson,
		// 	ContactNumber,
		// 	MenuName,
		// 	MenuRate,
		// 	MenuPax,
		// 	MenuSection,
		// 	Block,
		// 	Street,
		// 	Level,
		// 	Unit,
		// 	Building,
		// 	Postal,
		// 	DeliveryNote } = this.state

		// const selectOrder = {
		// 	Id,
		// 	EventType,
		// 	OrderDate,
		// 	FunctionDate,
		// 	ContactPerson,
		// 	ContactNumber,
		// 	MenuName,
		// 	MenuRate,
		// 	MenuPax,
		// 	MenuSection,
		// 	Block,
		// 	Street,
		// 	Level,
		// 	Unit,
		// 	Building,
		// 	Postal,
		// 	DeliveryNote
		// }
	}

	// handleToggle = prop => enable => {
	// 	this.setState({ [prop]: enable });
	// };

	//
	componentDidMount() {
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
					items: json,
					pagination
				});

			})
			.catch((error) => {
				// handle your errors here
				console.error(error)
			})
	};

	handleSelectDate(orderId) {
		this.setState({
			orderId
		})
	}

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
		let selectDate = this.props.date
		return (
			<div className="table">

				<Table

					bordered
					columns={this.state.columns}
					dataSource={this.state.items.filter(d => d.FunctionDate.slice(0, 10) === selectDate)}
					loading={this.state.loading}
					// onChange={this.handleTableChange}
					pagination={this.state.pagination}
					// rowKey={record => record.location.postcode}
					scroll={{ x: '140%', y: 500 }}
				/>

			</div>
		);
	}
}

export default OrderIndex;
