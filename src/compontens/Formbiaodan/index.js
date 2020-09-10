import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import style from '@/compontens/Formbiaodan/header.module.less';
import { Form, Input, InputNumber, Button, Popover, Select } from 'antd';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const obj = {
  provinceData: [
    {
      channelId: 1,
      channelName: '阳光e购',
      channelkey: 'yangguang'
    }, {
      channelId: 7,
      channelName: '新地e购',
      channelkey: 'xindi'
    }, {
      channelId: 8,
      channelName: '新能e购',
      channelkey: 'xinneng'
    },
  ],
  cityData: {
    yangguang: ['北京结算商', '上海结算商'],
    xindi: ['无结算商'],
    xinneng: ['无结算商'],
  },
}
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 23, 4, 5],
      isHover: false,
      cities: obj.cityData[obj.provinceData[0]['channelkey']],
      secondCity: obj.cityData[obj.provinceData[0]['channelkey']][0],
    }
  }
  onFinish = (values) => {
    console.log(values);
  }
  onFieldsChange = () => {
    console.log(123)
  }
  handleProvinceChange = value => {
    let val;
    obj.provinceData.map((item) => {
      if (item.channelId === value) {
        val = item.channelkey;
      }
    })
    this.setState({
      cities: obj.cityData[val],
      secondCity: obj.cityData[val][0],
    }, () => {
      console.log(value, this.state.cities, this.state.secondCity);
    });
  };
  onSecondCityChange = value => {
    this.setState({
      secondCity: value,
    });
  };
  render() {
    const { list, isHover, cities } = this.state;
    console.log(obj.cityData[obj.provinceData[0].channelkey])
    const content = (
      <div className={style.popoverBox}>
        <p className={style.aaa}>Content</p>
        <p>Content</p>
      </div>
    );
    return (
      <div className={`${style.header} clearfix`}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          validateMessages={validateMessages}
          onFieldsChange={this.onFieldsChange}>
          <Form.Item
            name={['chen', 'name']}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input autoComplete='off' />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
              {
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'age']}
            label="Age"
            rules={[
              {
                type: 'number',
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={['user', 'website']} label="Website">
            <Input autoComplete='off' />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Select
          style={{ width: 200 }}
          defaultValue={obj.provinceData[0].channelId}
          onChange={this.handleProvinceChange}
        // value={}
        >
          {obj.provinceData.map(province => (
            <Option key={province.channelId} value={province.channelId}>{province.channelName}</Option>
          ))}
        </Select>
        <Select
          style={{ width: 200 }}
          value={this.state.secondCity}
          onChange={this.onSecondCityChange}
        >
          {cities.map(city => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
        <Popover content={content} trigger="hover" overlayClassName={style.bbb}>
          <Button className={style.bbb}>Hover me</Button>
        </Popover>
      </div >
    )
  }
}

export default Header;