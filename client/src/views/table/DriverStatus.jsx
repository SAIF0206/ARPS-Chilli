import React, { Component } from 'react';
import { Table,Switch } from 'antd';
import $axios from '../../axios/$axios';

class DriverStatus extends Component {
	state = {
		data: [],
		pagination: {
			pageSize: 100,
			current: 1
		},
		loading: false,
		selectedRowKeys: [],
		columns: [
			{
				title: 'Name',
				dataIndex: 'name',
				sorter: true,
				render: name => `${name.first} ${name.last}`,
				width: 100,
				align: 'left',
			},
			{
				title: 'License Type',
				dataIndex: 'License Type',
				filters: [{ text: 'C3', value: 'C3' }, { text: 'C4', value: 'C4' }],
				width: 100,
				align: 'center',
			},
			{
				title: 'Status',
				dataIndex: 'Status',
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
	};

	componentWillMount() {
		this.fetch();
	}

	componentWillUnmount() {
		// componentWillMount进行异步操作时且在callback中进行了setState操作时，需要在组件卸载时清除state
		this.setState = () => {
			return;
		};
	}

	handleTableChange = (pagination, filters, sorter) => {
		const pager = { ...this.state.pagination };
		pager.current = pagination.current;
		this.setState({
			pagination: pager
		});
		this.fetch({
			results: pagination.pageSize,
			page: pagination.current,
			sortField: sorter.field,
			sortOrder: sorter.order,
			...filters
		});
	};

	//fetch data here
	fetch = () => {
		this.setState({ loading: true });
		$axios({
			url: 'https://randomuser.me/api?results=10',
			method: 'get',
			type: 'json'
		}).then(data => {
			const pagination = { ...this.state.pagination };
			// Read total count from server
			// pagination.total = data.totalCount
			pagination.total = 200;
			this.setState({
				loading: false,
				data: data.data.results,
				pagination
			});
		});
	};
	render() {
		return (
			<div className="shadow-radius">
				<Table
					bordered
					columns={this.state.columns}
					dataSource={this.state.data}
					loading={this.state.loading}
					onChange={this.handleTableChange}
					pagination={this.state.pagination}
					rowKey={record => record.location.postcode}
				/>
			</div>
		);
	}
}

export default DriverStatus;
