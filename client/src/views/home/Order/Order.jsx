import React, { Component } from "react";
import "../../../assets/css/index.css";
import "antd/dist/antd.css";
import { Table, Button, Row, Col, Tag, Popover } from "antd";
import TimeSlider from "./TimeSlider.js";
import OrderInfo from "./OrderInfo";
import axios from "axios";

//handel order tags
function eventTag(eventType) {
  //For mini buffet or bento set, tag would be special color 'volcano'
  if (
    eventType === "Mini Buffet, 迷你套餐" ||
    eventType === "Bento Set, 套餐打包"
  ) {
    return <Tag color="volcano">{eventType}</Tag>;
  }

  //TODO add if more eventType label we need
  // else if(eventType== 'Corporate Function, 公司')
  // {return <Tag  color='green'>{eventType}</Tag>}
  else {
    return <Tag color="geekblue">{eventType}</Tag>;
  }
}

//handle menu pax color
function paxCap(MenuPax) {
  //For menupax (0,65],(65,100] and [100,...] seperate with different color
  if (MenuPax <= 65) {
    return <Tag color="#009933">{MenuPax}</Tag>;
  } else if (MenuPax > 65 && MenuPax <= 100) {
    return <Tag color="#ff9900">{MenuPax}</Tag>;
  } else {
    return <Tag color="#cc0000">{MenuPax}</Tag>;
  }
}

const mystyle = {
  margin: "-8px",
  width: "101.8%",
};

class OrderIndex extends Component {
  //hide or show the popover of order detail
  state = {
    clicked: false,
    //table size
    size: "small",
  };
  hide = () => {
    this.setState({
      clicked: false,
    });
  };
  handleClickChange = (visible) => {
    this.setState({
      clicked: visible,
    });
  };

  state = {
    orders: null,
  };

  constructor(props) {
    super(props);
    this.handleClickOrder = this.handleClickOrder.bind(this);
    this.onShowDetail = this.onShowDetail.bind(this);
    this.state = {
      record: [],
      orders: [],
      isLoaded: false,
      pagination: {
        pageSize: 999999,
        hideOnSinglePage: true,
      },
      loading: false,

      // selectedRowKeys: [],

      //table header
      columns: [
        {
          title: "OrderID",
          dataIndex: "Id",
          key: "orderId",
          render: (text, record, index) => (
            <div>
              <center>
                <Popover
                  onClick={this.onShowDetail.bind(this, record, index)}
                  placement="right"
                  content={
                    //clickContent,
                    <div>
                      <OrderInfo data={record} />
                    </div>
                  }
                  // title={'Order ID: ' + text}
                  trigger="click"
                >
                  <Button type="link">
                    <b>{text}</b>
                  </Button>
                </Popover>
              </center>
            </div>
          ),
          width: 60,

          align: "center",
          // fixed: 'left',
        },
        {
          title: "EventType",
          dataIndex: "EventType",
          key: "eventType",
          render: (eventType) => <span>{eventTag(eventType)}</span>,
          width: 100,
          align: "center",
        },
        {
          title: "Address",
          dataIndex: "Street",
          key: "address",
          render: (e) => (
            <span>
              <b>{e}</b>
            </span>
          ),
          width: 100,
          align: "center",
        },
        {
          title: "Pax",
          dataIndex: "MenuPax",
          key: "menuPax",
          render: (menuPax) => (
            <span>
              <b>{paxCap(menuPax)}</b>
            </span>
          ),
          width: 40,
          align: "center",
        },
        {
          title: "Volume",
          dataIndex: "Volume",
          key: "Volme",
          // render: menuPax =>
          // 	<span>
          // 		<p><b>{paxVol(menuPax)}</b></p>
          // 	</span>,
          width: 40,
          align: "center",
        },
        {
          title: (
            <div className="timeScaler">
              <img
                src={require("../../../assets/img/time scale.png")}
                alt="time scaler"
                style={mystyle}
              />
            </div>
          ),
          dataIndex: "FunctionDate",
          key: "functionDate",
          render: (date) => (
            <div className="timeSlider">
              <Row>
                <Col span={24}>
                  <TimeSlider content={date} />
                </Col>
              </Row>
            </div>
          ),
          width: 600,
          align: "left",
        },
      ],
      currentRow: null,
    };
  }

  showDetailOrder = (orderId, e) => {
    console.log("OrderId", orderId);
    console.log("Event", e);
  };

  handleClickOrder(order) {
    this.setState({
      order,
    });
  }

  //fetch data from API by axios
  async componentWillMount() {
    console.log("componentWillMount");
    let result = await axios.get("http://localhost:4000/api/order/orderdata");
    // console.log(result)
    let data = result.data;
    console.log(data);
    this.setState({
      orders: data,
    });
  }

  componentWillUnmount() {
    this.setState = () => {
      return;
    };
  }

  onShowDetail(record, index) {
    console.log(record);
    console.log(index);
    this.setState({
      record: record,
    });
  }

  render() {
    let selectDate = this.props.date;

    return (
      <div className="table">
        <Table
          bordered
          columns={this.state.columns}
          dataSource={this.state.orders.filter(
            (d) => d.FunctionDate.slice(0, 10) === selectDate
          )}
          loading={this.state.loading}
          // onChange={this.handleTableChange}
          pagination={this.state.pagination}
          // rowKey={record => record.location.postcode}
          scroll={{ x: "160%", y: 500 }}
        />
      </div>
    );
  }
}

export default OrderIndex;
