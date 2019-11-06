import React, { Component } from 'react'
import './H.css'
import {NavLink} from 'react-router-dom';
import Content from '../../Router/ContentComm'
import {Route} from 'react-router-dom';

export default class Comm extends Component {
    render() {
        return (
            <div>
                <Route exact path='/home/communication' component={Content}/>
                <Route path='/home/communication/content/:id' component={Content}/>
                <div className='out'> 
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <div key={item} className='page'>
                                <NavLink activeStyle={
                                    {background:'red',
                                    color:'#fff'}
                                } to={'/home/communication/content/'+item}>{item}</NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
