import React from 'react';
import {Link,Route} from 'react-router-dom';
import allContent from '../container/Content/allContent'

export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
        
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data: res.data
                });
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data: res.data
                    });
                })
        }
    }
    render(){
        let {url} = this.props.match;
        return (
            <div>
                <div>
                    {
                        this.state.data.map((item)=>(
                            <div style={{border:'1px solid black',width:900,overflow:'hidden'}} key={item.id}>
                                <img src={item.author.avatar_url} style={{width:30,height:30,marginRight:30}}/>
                                <span>{item.reply_count}/{item.visit_count}</span>
                                <Link to={`/author/`+item.id}>{item.title}</Link>
                                <span style={{paddingRight:15,float:'right'}}>一天前</span>
                                <img src={'https://avatars2.githubusercontent.com/u/227713?v=4&s=120'} style={{width:30,height:30,marginRight:30,float:"right"}}/>    
                            </div>
                        ))
                    }
                </div>
                <div>
                    <Route path={url+'/author/:id'} component={allContent}/>
                </div>
            </div>
            
        )
    }
}