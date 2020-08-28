import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import style from '@/compontens/Nav/Nav.module.less';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navList: [
        {
          id: 1001,
          name: '报价对比',
          url: '/duibi'
        },
        {
          id: 1002,
          name: '去报价',
          url: '/baojia'
        },
        {
          id: 1003,
          name: 'ToDoList',
          url: '/todolist'
        }, {
          id: 1004,
          name: 'supplier',
          url: '/supplier'
        },
      ]
    }
  }
  toClick = (item) => {
    this.props.history.push(item.url)
  }
  render() {
    const { navList } = this.state;
    return (
      <div className={`${style.nav} clearfix`}>
        <div className={style.navBox}>
          <span className={`${style.navList} fl`} onClick={this.toNavList}>商品分类</span>
          <ul className={`${style.navListUl} fl`}>
            {
              navList.map((item, index) => {
                return (
                  <li className={style.navItem} key={item.id} onClick={() => this.toClick(item)}>
                    {item.name}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div >
    )
  }
}

export default withRouter(Header);