import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import style from '@/compontens/Header/header.module.less';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 23, 4, 5],
      isHover: false,
    }
  }
  render() {
    const { list, isHover } = this.state;
    console.log(list)
    return (
      <div className={`${style.header} clearfix`}>
        <span>你好，欢迎来到阳光e购物资交易平台</span>
        <BrowserRouter>
          <Link to='/user/login' className={`${style.linkf6} ml20`}>登陆</Link>
          <Link to='/user/login' className={`${style.linkf6} ml20`}>新用户注册</Link>
          <ul className={`${style.header_nav} `}>
            <li className='ml20'>
              <Link to='/user/login' className={`${style.link00}`}>首页</Link>
            </li>
            <li className='ml20'>
              <Link to='/user/login' className={`${style.link00}`}>企业工作台</Link>
            </li>
            <li className='ml20'>
              <Link to='/user/login' className={`${style.link00}`}>长购清单</Link>
            </li>
            <li className='ml20'>
              <Link to='/user/login' className={`${style.link00}`}>采购单</Link>
            </li>
            <li className='ml20'>
              <Link to='/user/login' className={`${style.link00}`}>客户服务</Link>
            </li>
            <li className='ml20'>
              <Link to='/user/login' className={`${style.link00}`}>App下载</Link>
            </li>
          </ul>
        </BrowserRouter>
      </div >
    )
  }
}

export default Header;