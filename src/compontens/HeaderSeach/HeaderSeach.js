import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import style from '@/compontens/HeaderSeach/headerSeach.module.less';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className={`${style.headerSeach} clearfix`}>
        <div className={style.headerSeachBox}>
          <span>你好，欢迎来到阳光e购物资交易平台</span>
        </div>
      </div >
    )
  }
}

export default Header;