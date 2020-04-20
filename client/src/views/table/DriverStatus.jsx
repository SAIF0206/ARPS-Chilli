import React, { Component } from 'react';
import { Table, Switch } from 'antd';


// function statusSwitch(Status) {
// 	if (Status === 1) { return <Switch checkedChildren="✔" unCheckedChildren="❌" defaultChecked={true}  onChange={(Status) => this.handleClick(Status)}/> }
// 	else if (Status === 0) {
// 		return <Switch checkedChildren="✔" unCheckedChildren="❌" defaultChecked={false} onChange={(Status) => this.handleClick(Status)}/>
// 	}
// }

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

					width: 20,
					align: 'left',
				},
				{
					title: 'Name',
					dataIndex: 'Name',
					key: 'name',

					width: 100,
					align: 'left',
				},
				{
					title: 'Email',
					dataIndex: 'Email',
					key: 'email',

					width: 100,
					align: 'left',
				},

				{
					title: 'License Type',
					dataIndex: 'License',
					key: 'license',
					filters: [{ text: 'c3', value: 'c3' }, { text: 'c4', value: 'c4' }],
					filterMultiple: false,
					onFilter: (value, record) => record.License.indexOf(value) === 0,
					width: 100,
					align: 'center',
				},

				{
					title: 'Status',
					dataIndex: 'Status',
					key: 'Status',
					width: 100,
					align: 'center',
					render: (e) =>
					<div>
						<span>
							{/* {statusSwitch(Status)} */}
							
							<Switch checkedChildren="✔" unCheckedChildren="❌" defaultChecked={e}  onChange={ this.handleChange} />
						</span>
	
					</div>


				}


			]
		}
		this.handleChange=this.handleChange.bind(this);
	};

	handleChange(checked){
		this.setState({checked})
		console.log(checked)

		
	}

	handleClick(status){
		// console.log(this.state.driver)
		console.log('Before: '+this.status)
		if(status===1)
		{this.setState(
			{
				status:this.status=0
			}
		)}
		else if(this.status===0)
		{this.setState(
			{
				status:this.status=1
			}
		)}
		console.log('After: '+status)
	}

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
					driver: json,
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



