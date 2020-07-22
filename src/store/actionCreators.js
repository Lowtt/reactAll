/*
 * @Author: your name
 * @Date: 2020-07-13 20:32:08
 * @LastEditTime: 2020-07-22 15:46:48
 * @LastEditors: Lowt
 * @Description: In User Settings Edit
 * @FilePath: \reactAll\src\store\actionCreators.js
 */
import axios from 'axios'
import {
    INPUT_CHANGE,
    ITEM_ADD,
    ITEM_DELETE,
    GET_LIST_DATA
} from './actionTypes'

export const inputChangeAction = (value) => ({
    type: INPUT_CHANGE,
    value
})

export const itemAddAction = () => ({
    type: ITEM_ADD,

})

export const itemDeleteAction = (index) => ({
    type: ITEM_DELETE,
    index
})

export const getItemList = data => ({
    type: GET_LIST_DATA,
    data
})

export const getData = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(res => {
            const action = getItemList(res.data.data)
            dispatch(action)
        })
    }
}