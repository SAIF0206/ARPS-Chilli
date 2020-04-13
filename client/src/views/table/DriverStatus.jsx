import React, { Component } from 'react';
import { Table,Switch } from 'antd';

export default class DriverStatus extends Component {

	constructor(props) {
		super(props);
		this.state = {
			driver: [],
			isLoaded: false,
			pagination: {
				pageSize: 100,
				current: 1
			},
			// loading: false,
			// selectedRowKeys: [],

		//table header
		columns: [
			{
				title: 'Id',
				dataIndex: 'Id',
				key: 'id',
				sorter: true,
				width: 20,
				align: 'left',
			},
			{
				title: 'Name',
				dataIndex: 'Name',
				key: 'name',
				sorter: true,
				width: 100,
				align: 'left',
			},
			{
				title: 'Email',
				dataIndex: 'Email',
				key: 'email',
				sorter: true,
				width: 100,
				align: 'left',
			},
			{
				title: 'License Type',
				dataIndex: 'License',
				key: 'license',
				filters: [{ text: 'C3', value: 'c3' }, { text: 'C4', value: 'C4' }],
				width: 100,
				align: 'center',
			},
			{
				title: 'Status',
				dataIndex: 'Status',
				key:'Status',
				filters: [{ text: 'On', value: '1' }, { text: 'Off', value: '0' }],
				width: 100,
				align: 'center',
				render: (text, row, index) => (
					<span>
						<div>
							<Switch checkedChildren="✔" unCheckedChildren="❌" defaultChecked />
						</div>
					</span>
				)
			}


		]
	}};

	componentDidMount() {
		fetch('http://localhost:4000/api/drivers/data')
		.then(res => res.json())
		.then(json => {
		  
				// jsonData is parsed json object received from url
				console.log(json)
				const pagination = { ...this.state.pagination };
				// Read total count from server
				// pagination.total = data.totalCount
				pagination.total = 200;
				this.setState({
					loading: false,
					driver:json,
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
			<div className="shadow-radius">
				<Table
					bordered
					columns={this.state.columns}
					dataSource={this.state.driver}
					loading={this.state.loading}
					// onChange={this.handleTableChange}
					// pagination={this.state.pagination}
					// rowKey={record => record.location.postcode}
				/>
			</div>
		);
	}
}



