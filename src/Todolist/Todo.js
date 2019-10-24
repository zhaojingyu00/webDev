import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    constructor(){
        super();
        this.clickChange2= this.clickChange2.bind(this);
        this.state = {
            todo:[]
        }
    }
    clickChange2 = (idx)=>{
        this.props.clickChange2(idx);
        this.delItem(idx);
    }
    handleChange2 = (idx,e)=>{
        this.state.todoing.push=this.state.todo[idx];
        this.setState({
            todo: [...this.state.todo,this.state.todoing[idx]]
        
        },()=>{
            localStorage.setItem("todo",JSON.stringify(this.state.todo));
        })
    }
    delItem =(idx,e)=>{
        this.props.del(idx);
    }
    render() {
        var {todo} = this.props;
        return (
            <div className='todo'>
                <h2>已经完成<span>{todo.length}</span></h2>
                {
                     todo.map((item,idx) =>{
                        return <li key={idx}><input checked type='checkbox'onChange={(e)=>{this.clickChange2(idx)}}/>
                        {item}-----<button onClick={this.delItem.bind(this,idx)}>删除</button></li>})
                }
            </div>
        )
    }
}