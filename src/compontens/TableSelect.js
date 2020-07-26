import React, { Component, Fragment } from 'react';
import { Table, Select, InputNumber } from 'antd';
const { Option } = Select;
const provinceData = ['厂家1', '厂家2'];
const cityData = {
  厂家1: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  厂家2: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
const dataMoRen = [
  {
    key: '1',
    code: '123456',
    name: '燃气调压箱1',
    sheng: 'sdjfkjsdlf',
    unitPrice: '0.00',
    servePrice: '- -',
    price: '- -'
  }
]




class TableSelect extends Component {
  state = {
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
    data: dataMoRen,
  };
  handleProvinceChange = value => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
    });
  };

  onSecondCityChange = value => {
    console.log(value)
    this.setState({
      secondCity: value,
    });
  };
  onChange = (value) => {
    // console.log('onChange', value)
  }

  render() {
    const { cities, data } = this.state;
    const columns = [
      {
        title: '物料编码',
        dataIndex: 'code',
      },
      {
        title: '物料名称',
        dataIndex: 'name',
      },
      {
        title: '生产商',
        render: (text, items) => {
          return (
            <Select
              defaultValue={provinceData[0]}
              style={{ width: 120 }}
              onChange={this.handleProvinceChange}
            >
              {provinceData.map(province => (
                <Option key={province}>{province}</Option>
              ))}
            </Select>
          )
        }
      },
      {
        title: '品牌名',
        render: () => {
          return (
            <Select
              style={{ width: 120 }}
              value={this.state.secondCity}
              onChange={this.onSecondCityChange}
            >
              {cities.map(city => (
                <Option key={city}>{city}</Option>
              ))}
            </Select>
          )
        }
      },
      {
        title: '单价',
        render: () => {
          return (
            <InputNumber
              min={0}
              max={99999999}
              precision={0.01}
              onChange={this.onChange}
            />
          )
        }
      },
      {
        title: '服务费',
        dataIndex: 'servePrice'
      },
      {
        title: '结算单价',
        dataIndex: 'price'
      }
    ];
    console.log(data)
    return (
      <Fragment>
        <Table
          pagination={false}
          columns={columns}
          dataSource={data}
        />
      </Fragment>
    )
  }
}
export default TableSelect