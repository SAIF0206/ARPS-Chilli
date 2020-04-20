import React, { Component } from 'react';
import { Table, Button, Divider } from 'antd';
import {
	BrowserRouter as Router,
	// Switch,
	// Route,
	Link,
	Redirect,
	// useParams,
	// useHistory
} from "react-router-dom";
import TimeSlider from '../../components/TimeSlider'

export default class OrderTime extends Component {
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

	render() {

		return (
            <div>
                <TimeSlider/>
            </div>
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

