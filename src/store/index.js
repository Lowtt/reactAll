/*
 * @Description: 
 * @Version: 0.1
 * @Autor: Lowt
 * @Date: 2020-07-13 10:23:07
 * @LastEditors: Lowt
 * @LastEditTime: 2020-07-13 10:29:21
 */ 

 import {createStore} from 'redux'
 import reducer from './reducer'

 const store = createStore(reducer)

 export default store