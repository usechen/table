import React, { Component } from "react";
import { Table, Input } from 'antd';
import './TableC.css';
import 'antd/dist/antd.css';

class TableC extends Component {
  InputOnChange = (e, item) => {
    console.log(e.target.value, item)
    item.macode = e.target.value
  }
  render() {
    const columns = [
      {
        title: '物料名称',
        dataIndex: 'name',
        width: 200,
        fixed: 'left',
      }
    ];
    const biaotou = [
      {
        company: '石家庄公司',
        children: [
          {
            bidConst: 0,
          },
          {
            bidConst: 1,
          },
          {
            bidConst: 2,
          }
        ]
      },
      {
        company: '重庆公司',
        children: [
          {
            bidConst: 3,
          },
          {
            bidConst: 4,
          }
        ]
      },
      {
        company: '北京公司',
        children: [
          {
            bidConst: 5,
          },
          {
            bidConst: 6,
          }
        ]
      },
    ]
    const data = [
      {
        key: '1',
        name: '这是第一个物料',
        const0: 100,
        const1: 101,
        const2: 85,
        const3: 103,
        const4: 104,
        const5: 105,
        const6: 100,
      },
      {
        key: '2',
        name: '这是第二个物料',
        const0: 1123,
        const1: 123,
        const2: 123123,
        const3: 123,
        const4: 44214,
        const5: 4123,
        const6: 66,
      },
      {
        key: '3',
        name: '这是第三个物料',
        const0: 91923,
        const1: 919239,
        const2: 123,
        const3: 4124,
        const4: 123523,
        const5: 1235234,
        const6: 434534,
      },
      {
        key: '4',
        name: '这是第四个物料',
        const0: 10,
        const1: 101,
        const2: 85,
        const3: 103,
        const4: 104,
        const5: 105,
        const6: 107,
      },
    ];
    biaotou.forEach((item, index) => {
      let diyici;
      let children = item.children.map((items, i) => {
        if (i === 0) {
          diyici = items.bidConst
          return {
            title: `第${i + 1}次报价`,
            dataIndex: `const${items.bidConst}`,
            width: 150,
            sorter: (a, b) => a[`const${items.bidConst}`] - b[`const${items.bidConst}`],
            render: (text) => {
              return (
                <span>{text}</span>
              )
            }
          }
        } else {
          return {
            title: `第${i + 1}次报价`,
            dataIndex: `const${items.bidConst}`,
            width: 150,
            sorter: (a, b) => a[`const${items.bidConst}`] - b[`const${items.bidConst}`],
            render: (text, textitem) => {
              console.log(textitem, diyici)
              return (
                <span className={text >= textitem[`const${diyici}`] ? 'spanred' : 'spanyellow'}>{text}</span>
              )
            }
          }
        }
      })
      columns.push({
        title: item.company,
        children
      })
    })
    return (
      <div className='tableBox'>
        <Table
          pagination={false}
          columns={columns}
          dataSource={data}
          bordered
          size="middle"
          scroll={{ y: 240 }}
        />,
      </div>
    )
  }
}


export default TableC;
