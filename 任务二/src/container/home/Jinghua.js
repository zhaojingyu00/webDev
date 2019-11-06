import React, { Component } from 'react'
import './H.css'
import {NavLink} from 'react-router-dom';
import Content from '../../Router/ContentJinghua.js'
import {Route} from 'react-router-dom';

export default class Jinghua extends Component {
    render() {
        return (
            <div>
                <Route exact path='/home/Jinghua' component={Content}/>
                <Route path='/home/Jinghua/contentJinghua/:id' component={Content}/>
                <div className='out'> 
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <div key={item} className='page'>
                                <NavLink activeStyle={
                                    {background:'red',
                                    color:'#fff'}
                                } to={'/home/Jinghua/contentJinghua/'+item}>{item}</NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
