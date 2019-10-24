import React, { Component } from 'react'
export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            a:''
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.add(e.target.value);
            this.state.a=''
        }

    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentDidMount(){
        this.a.focus();
    }
    render() {
        return (
            <div className='header'>
                <div className='inner'>
                <h2 className ='ToDoList'>ToDoList</h2>
                <input className='Todolist' ref={(inp)=>{this.a=inp}} name="a" onChange={this.handleChange} value={this.state.a} onKeyDown={this.handleInput} type="text"/>
                </div>
            </div>
        )
    }
}