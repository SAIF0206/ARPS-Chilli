import React, { Component } from 'react';
import { Table } from 'antd';

export default class OrderIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
			pagination: {
				pageSize: 200,
				current: 1
			},
			loading: false,
			// selectedRowKeys: [],

			//table header
			columns: [
				{
					title: 'OrderID',
					dataIndex: 'Id',
					key: 'id',
					width: 100,
					align: 'center',
					fixed: 'left',
				},
				{
					title: 'EventType',
					dataIndex: 'EventType',
					key: 'eventType',
					width: 250,
					align: 'center',
				},
				{
					title: 'Address',
					dataIndex: 'Street',
					key: 'address',
					width: 300,
					align: 'center',
				},
				{
					title: 'MenuPax',
					dataIndex: 'MenuPax',
					key: 'menuPax',
					width: 80,
					align: 'center',
				},
				{
					title: 'Time',
					dataIndex: 'FunctionDate',
					key: 'functionDate',
					width: 1000,
					align: 'left',

				}
			],
			currentRow: null
		};
	}
	handleToggle = prop => enable => {
		this.setState({ [prop]: enable });
	};

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
			<div>
				<Table
					bordered
					columns={this.state.columns}
					dataSource={this.state.items}
					loading={this.state.loading}
					// onChange={this.handleTableChange}
					pagination={this.state.pagination}
					// rowKey={record => record.location.postcode}
				/>
			</div>
		);
	}
}



