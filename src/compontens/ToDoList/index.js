import React, { Component } from "react";
import style from '@/compontens/ToDoList/index.module.less'



class TableC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          id: 1001,
          name: '你好',
          is: true
        }, {
          id: 1002,
          name: '我好',
          is: true
        }, {
          id: 1003,
          name: '大家好',
          is: true
        }
      ]
    }
  }
  del = (id) => {
    console.log(id)
    let list = this.state.list;
    // list = JSON.parse(JSON.stringify(list))
    const navList = list.filter((item) => {
      return item.id !== id
    })
    this.setState({
      list: navList,
    })
  }
  render() {
    const { list } = this.state;
    return (
      <div className={style.Box}>
        {
          list.map((item, index) => {
            return (
              <div key={item.id} className={style.items}>
                <span onClick={() => this.del(item.id)}>{item.name}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default TableC;