import React, { Component, Fragment } from 'react';
import { Table, Switch } from 'antd';
import axios from 'axios'

export default class DriverStatus extends Component {
	constructor(props) {
		super(props);

		this.handleDriverData = this.handleDriverData.bind(this)
		this.trans = this.trans.bind(this)

		this.state = {
			len: null,
			driver: [],
			// driverId: [],
			// driverName: [],
			// driverStatus: [],
			// driverData: [],
			isLoaded: false,
			pagination: {
				pageSize: 100,
			},

			//table header
			columns: [
				{
					title: 'SN.',
					dataIndex: 'id',
					key: 'driverId',
					render:(id, record, index)=>
						
						<div>{index+1}</div>
					,
					width: 20,
					align: 'left',
				},
				{
					title: 'Name',
					dataIndex: 'name',
					key: 'driverName',

					width: 100,
					align: 'left',
				},
				{
					title: 'Email',
					dataIndex: 'email',
					key: 'driverEmail',

					width: 100,
					align: 'left',
				},

				// {
				// 	title: 'License Type',
				// 	dataIndex: 'License',
				// 	key: 'driverLicense',
				// 	filters: [{ text: 'c3', value: 'c3' }, { text: 'c4', value: 'c4' }],
				// 	filterMultiple: false,
				// 	onFilter: (value, record) => record.License.indexOf(value) === 0,
				// 	width: 100,
				// 	align: 'center',
				// },

				{
					title: 'Status',
					dataIndex: 'Status',
					key: 'driverStatus',
					width: 100,
					align: 'center',
					render: (status, record, index) =>
						<div >
							<span>
								{/* {this.trans(status).bind(this)} */}
								<Switch checkedChildren="✔" unCheckedChildren="❌" defaultChecked={this.trans(status)} onClick={this.handleDriverData.bind(this, status, record, index)} />
							</span>
							<br />
						</div>


				}


			]
		}
	};

	//trans status=1/0 to stuats=true/false
	trans(status) {
		if (status != null) {
			if (status = 1) {
				return status = true
			} else if (status = 0) {
				return status = false
			}
			else {
				return Error
			}
		}
		else {
			return Error
		}
	}

	handleDriverData = (status, record, index) => {
		//TODO
		let driver = this.state.driver
		const driverData = this.state.driver.map(d => {
			if (d.Id === driver[index].Id) {
				if (d.Status === 1) { d.Status = 0 }
				else if (d.Status === 0) { d.Status = 1 }
			}
			return d
		})
		this.setState({
			driverData: driverData
		})
		// this.porps.handleDriverData(driverData)

	}

	//get driver data from database
	// componentDidMount() {
	// 	const _this = this;
	// 	axios.get('http://localhost:4000/api/drivers/data')
	// 		.then(function (response) {
	// 			//get value without UUID
	// 			const driverData = response.data
	// 			console.log('axios driver data', driverData)
	// 			_this.setState({
	// 				driver: driverData,
	// 				isLoaded: true
	// 			});
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error);
	// 			_this.setState({
	// 				isLoaded: false,
	// 				error: error
	// 			})
	// 		})
	// }

	//fetch driver data from database
	// componentDidMount() {
	// 	fetch('http://localhost:4000/api/drivers/data')
	// 		.then(res => res.json())
	// 		.then(json => {

	// 			// jsonData is parsed json object received from url
	// 			console.log(json)
	// 			const pagination = { ...this.state.pagination };
	// 			// Read total count from server
	// 			pagination.total = 200;
	// 			this.setState({
	// 				loading: false,
	// 				driver: json,
	// 				pagination
	// 			});
	// 			let len=json.length
	// 			let driverId=[]
	// 			let driverName=[] 
	// 			let driverStatus=[]
	// 			for (let i = 0; i < len; i++) {
	// 				driverId[i] = json[i]['Id']
	// 				driverName[i] = json[i]['Name']
	// 				driverStatus[i] = json[i]['Status']
	// 			};
	// 			this.setState(
	// 				{	
	// 					len,
	// 					driverId,
	// 					driverName,
	// 					driverStatus
	// 				}
	// 			)
	// 			// console.log(driverId,driverName,driverStatus);
	// 			// console.log('state',this.state.driverId,this.state.driverName,this.state.driverStatus)
	// 		})
	// 		.catch((error) => {
	// 			// handle your errors here
	// 			console.error(error)
	// 		})
	// };


	//get driver data from workwave
	componentDidMount(){
		const _this=this;
		axios.get('http://localhost:4000/api/drivers/workwave')
		.then(function (response) {
			//get value without UUID
			let data = Object.keys(response.data).map(function (key) {return response.data[key]});
			console.log('axios data', data)
		  _this.setState({
			driver:data,
			isLoaded:true
		  });
		})
		.catch(function (error) {
		  console.log(error);
		  _this.setState({
			isLoaded:false,
			error:error
		  })
		})
	  }

	componentWillUnmount() {
		this.setState = () => {
			return;
		};
	}


	render() {
		let driver = this.state.driver
		console.log('driver data', driver)
		return (
			<Fragment>
				<div className="shadow-radius">
					<Table
						bordered
						columns={this.state.columns}
						dataSource={this.state.driver}
						loading={this.state.loading}

					// these two for page change
					// onChange={this.handleTableChange} 
					// pagination={this.state.pagination}

					// this for row selected
					// rowKey={record => record.location.postcode}
					/>
				</div>

			</Fragment>
		);
	}
}



