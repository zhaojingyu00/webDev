(this.webpackJsonpmyapp1=this.webpackJsonpmyapp1||[]).push([[0],{11:function(t,e,n){t.exports=n(17)},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(9),l=n.n(c),i=n(1),r=n(2),s=n(4),u=n(3),h=n(5),d=(a.Component,n(7)),p=n(10),m=n(6),b=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).handleInput=function(e){13===e.keyCode&&t.props.add(e.target.value)},t.handleChange=function(e){t.setState(Object(p.a)({},e.target.name,parseInt(""===e.target.value?0:e.target.value)))},t.handleInput=t.handleInput.bind(Object(m.a)(t)),t.state={a:"",b:"",c:""},t}return Object(h.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.a.focus()}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("input",{ref:"{(inp)=>{this.a=inp}}",name:"a",onChange:this.handleChange,value:this.state.a,onKeyDown:this.handleInput,type:"text"}),"+",o.a.createElement("input",{name:"b",onChange:this.handleChange,value:this.state.b,onKeyDown:this.handleInput,type:"text"}),"+",o.a.createElement("input",{name:"c",onChange:this.handleChange,value:this.state.c,onKeyDown:this.handleInput,type:"text"}),"=",o.a.createElement("p",null,this.state.a+this.state.b+this.state.c),o.a.createElement("input",{ref:function(e){t.inp=e},type:"text"}),o.a.createElement("button",{onClick:function(){console.log(t.inp.value)}},"\u63d0\u4ea4"))}}]),e}(a.Component),f=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).delItem=function(t,e){console.log(e),n.props.del(t)},n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this,e=this.props.todo;return o.a.createElement("div",null,e.map((function(e,n){return o.a.createElement("li",{key:n},e,"-----",o.a.createElement("button",{onClick:t.delItem.bind(t,n)},"\u5220\u9664"))})))}}]),e}(a.Component);f.defaultProps={todo:[1,2,3,4,4]};var v=function(t){function e(){var t;Object(i.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).addItem=function(e){t.setState({todo:[].concat(Object(d.a)(t.state.todo),[e])})},t.delItem=function(e,n){console.log(e);var a=Object(d.a)(t.state.todo);a.splice(e,1),t.setState((function(t,e){return console.log(t.props),{todo:a}}))},t.state={todo:[1,2,3]};var n={a:100,b:[1,2,3]},a=Object.assign({},n,{c:300});return a.b[0]=200,console.log(a===n),Object.keys(n).forEach((function(t){console.log(t),console.log(n[t])})),t}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,{add:this.addItem}),o.a.createElement(f,{del:this.delItem,todo:this.state.todo}))}}]),e}(a.Component);n(16);l.a.render(o.a.createElement(v,null),document.getElementById("root")),document.getElementById("root").className="active"}},[[11,1,2]]]);
//# sourceMappingURL=main.7d3ffa82.chunk.js.map