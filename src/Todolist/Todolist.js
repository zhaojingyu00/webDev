import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
import Todo from './Todo'
import './todo.css';
export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[],
            todoing:[]
        }
    }
    addItem = (data)=>{
        this.setState({
            todoing: [...this.state.todoing,data]
        },()=>{
            localStorage.setItem('todoing',JSON.stringify(this.state.todoing))
        })
    }
    addlist = (data)=>{
        this.setState({
            todo: [...this.state.todo,data]
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        })
    }
    delItem = (idx)=>{
        this.setState((state,props)=>{
            return {
                todoing: state.todoing.filter((item,index)=>idx!==index)
            }
        },()=>{
            localStorage.setItem('todoing',JSON.stringify(this.state.todoing))
        })
    }
    dellist = (idx)=>{
        this.setState((state,props)=>{
            return {
                todo: state.todo.filter((item,index)=>idx!==index)
            }
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        })
    }
    clickChange = (idx)=>{
        this.setState({
            todo: [...this.state.todo,this.state.todoing[idx]]
        
        },()=>{
            localStorage.setItem("todo",JSON.stringify(this.state.todo));
            localStorage.setItem("todoing",JSON.stringify(this.state.todoing));
        })
    }
    clickChange2 = (idx)=>{
        this.setState({
            todoing: [...this.state.todoing,this.state.todo[idx]]
        
        },()=>{
            localStorage.setItem("todo",JSON.stringify(this.state.todo));
            localStorage.setItem("todoing",JSON.stringify(this.state.todoing));
        })
    }
    componentDidMount(){
        let todoingRead = JSON.parse(localStorage.getItem("todoing"));
        let todoRead = JSON.parse(localStorage.getItem("todo"));
        if(1){
            this.setState((state)=>{
                return{
                    todoing:todoingRead,
                    todo:todoRead
                }
            })
        }
    }
    render() {
        
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} todoing={this.state.todoing} add={this.addlist} clickChange = {this.clickChange}/>
                <Todo del={this.dellist} todo ={this.state.todo} add={this.addItem} clickChange2 = {this.clickChange2}/>
            </div>
        )
    }
}