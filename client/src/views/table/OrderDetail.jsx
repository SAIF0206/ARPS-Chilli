import React, { Component } from 'react';
import ReactJson from 'react-json-view';

export default class OrderDetails extends Component{
  constructor( props ) {
    super( props );
    this.state = {
      items: [],
      jsonOptions: {
        displayDataTypes: false,
        collapseStringsAfterLength: 20,
        onEdit: ( edit ) => {
          console.log('edit' , edit);
        }
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/order/orderdata')
      .then(res => res.json())
      .then(json => {
        
          // jsonData is parsed json object received from url
          console.log(json)
          this.setState({
            loading: false,
            items: json,
          });
        })
        .catch((error) => {
          // handle your errors here
          console.error(error)
        })


    };
  

  render() {
    return (
      <div>
        <ReactJson { ...this.state.jsonOptions } src={ this.state.items } />
      </div>
    )
  }
}


