/*
 * @Description: 
 * @Version: 0.1
 * @Autor: Lowt
 * @Date: 2020-07-13 10:28:05
 * @LastEditors: Lowt
 * @LastEditTime: 2020-07-13 14:46:56
 */
import {
    INPUT_CHANGE,
    ITEM_ADD,
    ITEM_DELETE
} from './actionTypes'
const defaultStore = {
    inputValue: 'Write Something',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}

export default (state = defaultStore, action) => {

    // state的值只能传递,不能进行任何操作,因此需要深拷贝第三方变量
    let newState = JSON.parse(JSON.stringify(state))
    if (action.type === INPUT_CHANGE) {
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ITEM_ADD) {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === ITEM_DELETE) {
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}