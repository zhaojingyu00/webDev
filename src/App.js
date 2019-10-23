import React, { Component} from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './container/Home';
import API from './container/API';
import Start from './container/Start';
import About from './container/About';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                </div>
                <div className='content'>
                    <div className='left'>
                        <Route path='/home' Component={Home}/>
                        <Route path='/start' Component={Start}/>
                        <Route path='/api' Component={API}/>
                        <Route path='/about' Component={About}/>
                    </div>
                    <div className='right'>
                        
                    </div>
                </div>
            </Router>
            
        )
    }
}
