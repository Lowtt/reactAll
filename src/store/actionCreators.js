/*
 * @Author: your name
 * @Date: 2020-07-13 20:32:08
 * @LastEditTime: 2020-07-13 21:42:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactAll\src\store\actionCreators.js
 */

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