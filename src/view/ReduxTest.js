/*
 * @Description: 
 * @Version: 0.1
 * @Autor: Lowt
 * @Date: 2020-07-13 10:36:51
 * @LastEditors: Lowt
 * @LastEditTime: 2020-07-13 13:46:55
 */ 

 import React,{Component} from 'react'
 import {Input,Button,List,message} from 'antd'
 import store from '../store'


 class ReduxTest extends Component {
     constructor(props) {
         super(props);
         this.state = store.getState()
         store.subscribe(this.storeChange.bind(this))
     }
     render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={{ width:'250px', marginRight:'10px'}}
                        onChange={this.inputChange.bind(this)}
                        value={this.state.inputValue}
                    />
                    <Button type="primary" onClick={this.itemAdd.bind(this)}>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        //关键代码-----------start
                        dataSource={this.state.list}
                        //关键代码-----------end
                        renderItem={(item,index)=>(<List.Item onClick={this.itemDelete.bind(this,index)} style={{cursor:'pointer'}}>{item}</List.Item>)}
                    />    
                </div>
            </div>
         );
    }
    inputChange(e){
        const action = {
            type:'inputChange',
            value:e.target.value
        }

        store.dispatch(action)
    }

    itemAdd(){
        if(store.getState().inputValue){
            const action = {
                type:'itemAdd'
            }
            store.dispatch(action)
        }else{
            message.warning('请先输入!')
        }
        
    }

    itemDelete(index){
        const action = {
            type:'itemDelete',
            index
        }
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }
 }
  
 export default ReduxTest;