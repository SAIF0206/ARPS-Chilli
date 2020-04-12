import React, { Component } from 'react';
import { Table } from 'antd';


class Order extends Component {

	state = {
		data: [],
		pagination: {
			pageSize: 200,
			current: 1
		},
		loading: false,
		selectedRowKeys: [],
		columns: [
			{
				title: 'OrderID',
				dataIndex: 'id',
				width: 100,
				align: 'center',
			},
			{
				title: 'Address',
				dataIndex: 'address',
				width: 200,
				align: 'center',
			},
			{
				title: 'Time',
				dataIndex: 'time',
				width: 1000,
				align: 'left',

			}
		],
		currentRow: null
	};

	componentWillMount() {
		const { pageSize, current } = this.state.pagination;
		this.fetch(current, pageSize);
	}

	componentWillUnmount() {
		// componentWillMount进行异步操作时且在callback中进行了setState操作时，需要在组件卸载时清除state
		this.setState = () => {
			return;
		};
	}


	//fetch data
	fetch = (pageCurrent, pageSize) => {
		this.setState({ loading: true });
		setTimeout(() => {
			const pager = { ...this.state.pagination };
			pager.total = 100;
			const data = [];
			for (let i = (pageCurrent - 1) * pageSize; i < pageSize * pageCurrent; i++) {
				data.push({
					key: i,
					id: `A00000${i}`,
					address: `MBS, DBS No.${i}`,
					time:'9:00'
				});
			}
			this.setState({
				loading: false,
				data,
				pagination: pager
			});
		}, 1000);
	};

	//selet row
	selectRow = record => {
		const selectedRowKeys = [...this.state.selectedRowKeys];
		if (selectedRowKeys.indexOf(record.key) >= 0) {
			selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
		} else {
			selectedRowKeys.push(record.key);
		}
		this.setState({ selectedRowKeys });
	};
	onSelectedRowKeysChange = selectedRowKeys => {
		console.log('selectedRowKeys changed: ', selectedRowKeys);
		this.setState({ selectedRowKeys });
	};



	render() {
		const { selectedRowKeys, loading, pagination, columns, data } = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectedRowKeysChange
		};
		return (
			<div className="shadow-radius">
				<Table
					bordered
					columns={columns}
					dataSource={data}
					loading={loading}
					onChange={this.handleTableChange}
					pagination={pagination}
					rowSelection={rowSelection}
					onRow={record => ({
						onClick: () => {
							this.selectRow(record);
						}
					})}
				/>
			</div>
		);
	}
}

export default Order;
