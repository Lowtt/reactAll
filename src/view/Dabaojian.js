/*
 * @Description: 
 * @Version: 0.1
 * @Autor: Lowt
 * @Date: 2020-07-09 15:42:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-13 21:18:47
 */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

class Dabaojian extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            list: []
        }
    }
    change(e) {
        this.setState({ value: this.input111.value })
    }
    click() {
        let list = this.state.list
        list.push(this.state.value)
        this.setState({ list })
    }
    delete(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({ list })
    }
    render() {
        const { list, value } = this.state
        return (
            <Fragment>
                {this.props.name}
                <Input placeholder='3423423432' />
                <input
                    value={value}
                    onChange={this.change.bind(this)}
                    ref={a => this.input111 = a}
                /> <button onClick={this.click.bind(this)}>点餐</button>
                <ul>
                    {list.map((item, index) => {
                        return (
                            <li key={index + 1} onClick={this.delete.bind(this, index)}>{item}</li>
                        )
                    }
                    )}
                </ul>
            </Fragment>
        )
    }
}


//  传值校验
Dabaojian.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    name: PropTypes.string.isRequired //父组件传递的name为string且为毕传
}

//默认传值
Dabaojian.defaultProps = {
    name: 'ssdadasd'
}

export default Dabaojian