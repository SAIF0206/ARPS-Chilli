import React, { Component, Fragment } from 'react';
import { Table, Switch, Button } from 'antd';

function transe(e) {
	if (e = 1) {
		return e = true
	} else if (e = 0) {
		return e = false
	}
	else {
		return Error
	}
}
export default class DriverStatus extends Component {
	constructor(props) {
		super(props);

		this.handleDriverData = this.handleDriverData.bind(this);

		this.state = {
			len:null,
			driver:[],
			driverId: [],
			driverName: [],
			driverStatus: [],
			driverData:[],
			isLoaded: false,
			pagination: {
				pageSize: 100,
			},

			//table header
			columns: [
				{
					title: 'Id',
					dataIndex: 'Id',
					key: 'driverId',

					width: 20,
					align: 'left',
				},
				{
					title: 'Name',
					dataIndex: 'Name',
					key: 'driverName',

					width: 100,
					align: 'left',
				},
				{
					title: 'Email',
					dataIndex: 'Email',
					key: 'driverEmail',

					width: 100,
					align: 'left',
				},

				{
					title: 'License Type',
					dataIndex: 'License',
					key: 'driverLicense',
					filters: [{ text: 'c3', value: 'c3' }, { text: 'c4', value: 'c4' }],
					filterMultiple: false,
					onFilter: (value, record) => record.License.indexOf(value) === 0,
					width: 100,
					align: 'center',
				},

				{
					title: 'Status',
					dataIndex: 'Status',
					key: 'driverStatus',
					width: 100,
					align: 'center',
					render: (status, record,index) =>
						<div >
							<span>
								{transe(status)}
								<Switch checkedChildren="✔" unCheckedChildren="❌" defaultChecked={status} onClick={this.handleDriverData.bind(this,status,record,index)} />
							</span>
							<br />
						</div>


				}


			]
		}
	};
	handleDriverData=(status,record,index)=> {
		//TODO
		// let len=this.state.len

		// let driverId =this.state.driverId
		// let driverName= this.state.driverName
		// let driverStatus=this.state.driverStatus
		let driver=this.state.driver
		// console.log('len: ',len)
		// console.log('driver id: ',driverId)
		// console.log('driver name:', driverName)
		// console.log('driver status:', driverStatus)

		// driver[index].Status=status
		// console.log('select driver: ',driver[index])
		// console.log('select driver status: ',driver[index].Status)
		// this.setState({
		// 	driver:driver
		// })

		const driverData = this.state.driver.map(d => {
			// console.log('name1',d.Name)
			// console.log('d.Id: ',d.Id)
			// console.log('driver.Id: ',driver[index].Id)
			// console.log('driver.status: ',d.Status)
			
			if(d.Id===driver[index].Id)
			{
				if(d.Status===1)
				{d.Status=0}
				else if(d.Status===0)
				{d.Status=1}
			}
			return d})
			this.setState({
				driverData:driverData
			})
			// this.porps.handleDriverData(driverData)

	}

	//fetch driver data
	componentDidMount() {
		fetch('http://localhost:4000/api/drivers/data')
			.then(res => res.json())
			.then(json => {

				// jsonData is parsed json object received from url
				console.log(json)
				const pagination = { ...this.state.pagination };
				// Read total count from server
				pagination.total = 200;
				this.setState({
					loading: false,
					driver: json,
					pagination
				});
				let len=json.length
				let driverId=[]
				let driverName=[] 
				let driverStatus=[]
				for (let i = 0; i < len; i++) {
					driverId[i] = json[i]['Id']
					driverName[i] = json[i]['Name']
					driverStatus[i] = json[i]['Status']
				};
				this.setState(
					{	
						len,
						driverId,
						driverName,
						driverStatus
					}
				)
				// console.log(driverId,driverName,driverStatus);
				// console.log('state',this.state.driverId,this.state.driverName,this.state.driverStatus)
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


	render() {
		let driverData=this.state.driverData
		console.log('driver data',driverData)
		return (
			<Fragment>
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
				
			</Fragment>
		);
	}
}



