import React from 'react';

export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[],
            title:[]
        }
        
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topic/'+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data: res.data.content,
                    title:res.data.title
                });
            })
    }
    render(){
        return (
                <div>
                    <div dangerouslySetInnerHTML={{__html:this.state.title}}></div>
                    <div dangerouslySetInnerHTML={{__html:this.state.data}}></div>
                </div>
        )
    }
}