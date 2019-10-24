import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    constructor(){
        super();
        this.clickChange= this.clickChange.bind(this);
        this.state = {
            todo:[]
        }
    }
    clickChange = (idx)=>{
        this.props.clickChange(idx);
        this.delItem(idx);
    }
    handleChange = (idx,e)=>{
        this.state.todo.push=this.state.todoing[idx];
        
    }
    delItem =(idx,e)=>{
        this.props.del(idx);
    }
    render() {
        var {todoing} = this.props;
        return (
            <div className='todoing' >
                <h2>正在进行<span>{todoing.length}</span></h2>
                {
                    todoing.map((item,idx) =>{
                    return <li key={idx}><input checked={0} type='checkbox' onChange={(e)=>{this.clickChange(idx)}}/>
                    {item}-----<button onClick={this.delItem.bind(this,idx)}>删除</button></li>})
                } 
            </div>
        )
    }
}