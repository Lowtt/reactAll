/*
 * @Description: 
 * @Version: 0.1
 * @Autor: Lowt
 * @Date: 2020-07-13 10:23:07
 * @LastEditors: Lowt
 * @LastEditTime: 2020-07-22 15:03:21
 */

import {
    createStore,
    applyMiddleware,
    compose //增强函数
} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
//  const store = createStore(reducer,applyMiddleware(thunk)) 如果第二个位置没有其他的参数,则可以直接这样,如果有则需要增强函数

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
    const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer,enhancer)
// const store = createStore(reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // 创建数据存储仓库

export default store