import React, { Component } from "react";
import { Table, Input } from 'antd';
import 'antd/dist/antd.css';

class TableC extends Component {
  InputOnChange = (e,item) => {
    console.log(e.target.value,item)
    item.macode = e.target.value
  }
  render(){
    const columns = [
      {
        title: '物料编码',
        dataIndex: 'macode',
        render: (text,item) => {
          console.log(text,item)
          return (
            <Input
              value={text}
              onChange={(e) => this.InputOnChange(e,item)}
            />
          )
        }
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
    ];
    const data = [
      {
        key: '1',
        macode: '100010',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        macode: '100011',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        macode: '100012',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        macode: '100013',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
      },
    ];
    return(
      <Table
        style={{"width": '500px'}}
        bordered={true}
        pagination={false}
        columns={columns}
        dataSource={data}
      />
    )
  }
}


export default TableC;
