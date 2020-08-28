import React, { Component } from 'react';
import style from './index.module.less';
import { Table, Select } from 'antd';
const { Option } = Select;
class SupplierSelectiion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      data: [
        {
          key: '1',
          name: 'Edward King',
          age: 23,
          address: 'asdasdadas',
          value: 0,
          pri: '',
          toto: '',
          supplier: [
            {
              supname: '第一家公司',
              supid: 1001,
              pri: 200,
              xiaoji: 300,
            }, {
              supname: '第二家公司',
              supid: 1002,
              pri: 400,
              xiaoji: 600,
            }, {
              supname: '第三家公司',
              supid: 1003,
              pri: 600,
              xiaoji: 900,
            }
          ]
        }, {
          key: '2',
          name: 'Edward King',
          age: 23,
          address: 'asdasdadas',
          value: 0,
          supplier: [
            {
              supname: '第一家公司',
              supid: 1001,
              pri: 200,
              xiaoji: 300,
            }, {
              supname: '第三家公司',
              supid: 1003,
              pri: 600,
              xiaoji: 900,
            }
          ]
        }, {
          key: '3',
          name: 'Edward King',
          age: 23,
          address: 'asdasdadas',
          value: 0,
          supplier: [
            {
              supname: '第一家公司',
              supid: 1001,
              pri: 200,
              xiaoji: 300,
            }, {
              supname: '第二家公司',
              supid: 1002,
              pri: 400,
              xiaoji: 600,
            }
          ]
        }
      ],
      zongjia: 0,
    }
  }
  changeAll = (value) => {
    console.log(value)
    let data = JSON.parse(JSON.stringify(this.state.data));
    data = data.map((item) => {
      item.value = 0
      item.supplier.map((supplieritem) => {
        if (supplieritem.supid === value) {

          item.value = value
          console.log(supplieritem, item)
        }
        // return supplieritem
      })
      return item
    })
    this.setState({
      value,
      data,
    })
  }
  changeitem = (value, index) => {
    let data = JSON.parse(JSON.stringify(this.state.data));
    let zongjia = 0;
    if (value === 0) {
      data[index].pri = 0
      data[index].toto = 0
    }
    data[index].value = value;
    data[index].supplier.map((item) => {
      if (item.supid === value) {
        data[index].pri = item.pri
        data[index].toto = item.xiaoji
      }
    })
    data.map((item) => {
      if (item.toto) {
        zongjia = Number(zongjia) + Number(item.toto)
      }
    })
    this.setState({
      data,
      zongjia,
    })
  }
  render() {
    const { value, data } = this.state;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        width: 150,
      },
      {
        title: 'Address',
        dataIndex: 'address',
      }, {
        title: (<Select style={{ width: 120 }} value={value} onChange={this.changeAll}>
          <Option value={0}>请选择</Option>
          <Option value={1001}>第一家公司</Option>
          <Option value={1002}>第二家公司</Option>
          <Option value={1003}>第三家公司</Option>
        </Select>),
        dataIndex: 'supplier',
        render: (text, item, index) => {
          return (
            <Select style={{ width: 120 }} value={item.value} onChange={(value) => this.changeitem(value, index)}>
              <Option value={0}>请选择</Option>
              {
                item.supplier.map((item, index) => {
                  return (
                    <Option value={item.supid} key={item.supid}>{item.supname}</Option>
                  )
                })
              }
            </Select>
          )
        }
      }, {
        title: '单价（元）',
        dataIndex: 'pri',
        render: (text, item) => {
          console.log(text, item)
          return (
            <span>{text}</span>
          )
        }
      }, {
        title: '小记（元）',
        dataIndex: 'toto',
      }
    ];
    return (
      <div className={style.Box}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ y: 480 }}
        />,
        <div>交易总价{this.state.zongjia}</div>
      </div>
    );
  }
}

export default SupplierSelectiion;