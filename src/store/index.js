/*
 * @Description: 
 * @Version: 0.1
 * @Autor: Lowt
 * @Date: 2020-07-13 10:23:07
 * @LastEditors: Lowt
 * @LastEditTime: 2020-07-13 14:48:43
 */

import {
    createStore
} from 'redux'
import reducer from './reducer'

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // 创建数据存储仓库

export default store