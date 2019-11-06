import './Header.css'
import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import All from './home/All';
import Comm from './home/Comm';
import Jinghua from './home/Jinghua';
import Share from './home/Share';
import Recruit from './home/recruit'
export default class Home extends Component {
    render() {
        let {url} = this.props.match
        // console.log(this.props)
        return (
            <div>
                <div className='Home'>
                    <Link to={`${url}/all`}>全部</Link>
                    <Link to={`${url}/jinghua`}>精华</Link>
                    <Link to={`${url}/share`}>分享</Link>
                    <Link to={`${url}/communication`}>问答</Link>
                    <Link to={`${url}/recruit`}>招聘</Link>
                    <Link to={`${url}/test`}>客户端测试</Link>
                </div>
                <div>
                    <Route path={url+'/all'} component={All}/>
                    <Route path={url+'/jinghua'} component={Jinghua}/>
                    <Route path={url+'/share'} component={Share}/>
                    <Route path={url+'/communication'} component={Comm}/>
                    <Route path={url+'/recruit'} component={Recruit}/>
                </div>
                
               
            </div>
            
        )
    }
}