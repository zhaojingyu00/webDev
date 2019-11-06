import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class On extends Component {
    render() {
        return (
            <div>
                <div>用户名：<input></input></div>
                <div>密码：<input></input></div>
                <Link to="/home">登录</Link>
            </div>
            
        )
    }
}
