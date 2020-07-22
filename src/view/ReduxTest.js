/*
 * @Description: 
 * @Version: 0.1
 * @Autor: Lowt
 * @Date: 2020-07-13 10:36:51
 * @LastEditors: Lowt
 * @LastEditTime: 2020-07-22 15:47:25
 */

import React, { Component } from 'react'
import { Input, Button, List, message } from 'antd'
import store from '../store'

import axios from 'axios'

//  import {INPUT_CHANGE,ITEM_ADD,ITEM_DELETE} from '../store/actionTypes'

import {getData, inputChangeAction, itemAddAction, itemDeleteAction,getItemList } from '../store/actionCreators'

class ReduxTest extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    //  订阅store，监听store的state变化
    store.subscribe(this.storeChange.bind(this))
  }
  componentDidMount(){
    this.getListData()
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.inputChange.bind(this)}
            value={this.state.inputValue}
          />
          <Button type="primary" onClick={this.itemAdd.bind(this)}>增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            //关键代码-----------start
            dataSource={this.state.list}
            //关键代码-----------end
            renderItem={(item, index) => (<List.Item onClick={this.itemDelete.bind(this, index)} style={{ cursor: 'pointer' }}>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
  inputChange(e) {
    // const action = {
    //     type:INPUT_CHANGE,
    //     value:e.target.value
    // }
    const action = inputChangeAction(e.target.value)
    store.dispatch(action)
  }

  itemAdd() {
    if (store.getState().inputValue) {
      // const action = {
      //     type:ITEM_ADD
      // }
      const action = itemAddAction()
      store.dispatch(action)
    } else {
      message.warning('请先输入!')
    }

  }

  itemDelete(index) {
    // const action = {
    //     type:ITEM_DELETE,
    //     index
    // }
    const action = itemDeleteAction(index)
    store.dispatch(action)
  }

  getListData() {
    const action = getData()
    store.dispatch(action)
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(res => {
    //   const action = getItemList(res.data.data)
      
    // })
  }

  //store变化时重新渲染页面数据
  storeChange() {
    this.setState(store.getState())
  }
}

export default ReduxTest;