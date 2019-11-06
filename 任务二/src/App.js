import React, { Component} from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './container/Home';
import API from './container/API';
import Start from './container/Start';
import About from './container/About';
import On from './container/On'
import allContent from './container/Content/allContent'
import './App.css'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                </div>
                <div className='content'>
                    <div className='left'>
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={API}/>
                        <Route path='/about' component={About}/>
                        <Route path='/on' component={On}/>
                        <Route path='/author/:id'component={allContent}/>
                    </div>
                    <div className='right'>
                        
                    </div>
                </div>
            </Router>
            
        )
    }
}