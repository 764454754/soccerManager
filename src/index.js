// // const show = require('./utils/say');
// import { show, say } from './utils/say';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './pages/index';
// require('./index.css');

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );
// // show();
// say();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import PlayerModal from './playerModal.js'
// 1.创建虚拟DOM两种方式
// const VDOM= <h1>Hello,React</h1>
//使用js创建
// const VDOM=React.createElement('h1',{id:'title'},'Hello,React')
//使用jsx来创建
// JSX语法规则:
// 1.定义虚拟DOM时,不要写引号
// 2。标签中混入JS表达式的时候要使用()
// 3.样式的类名指定不要用class，要用className
// 4.内敛样式，要用style={{key:value}}的形式去写。
// 5.只要一个跟标签
// 6.标签必须闭合
// 7.标签首字母（1).若为小写字母开头，则将改标签转为html中同名元素，若html中无改标签对应的同名元素则报错。
		// (2).若大写字母开头,react就去渲染对应的组件，若组件没有定义，则报错
// const VDOM = (
// 	<h1 id="title">
// 		<span>123</span>
// 	</h1>
// )
// 注意区分[js语句(代码)][与js表达式]
// 1.表达式:一个表达式会产生一个值.可以放在任何一个需要值的地方
// 下面这些都是表达式:
// (1). a
// (2). a+b
// (3) demo(1)
// (4) arr.map()
// (5) function test (){}
// 2.语句代码:
// 	下面这些都是语句(代码):
// 		(1).if(){}
// 		(2)for(){}
// 		(3)switch(){}
//简单组件用函数式组件
// function Demo(){
// 	console.log(this)//此处的this是undefined，因为babel编译编译后开启了严格模式
// 	return <h2>我是函数定义的组件</h2>
// }
// class Person{
// 		constructor(name,age){
// 			this.name = name
// 			this.age = age
// 		}
// 		speak(){
// 			console.log(this.name)
// 			console.log(this.age)
// 			console.log(`我叫${this.name},我年龄是${this.age}`)
// 		}
// }
// class Student extends Person{
// 	constructor(name,age,grade){
// 		super(name,age)
// 		this.grade = grade
// 		this.newref = React.createRef()
// 		console.log(this.newref)
// 	}
// 	showInfo=()=>{
// 		const{input1}=this
// 		alert(input1.value)
// 	}
// }
// const s1 = new Student('张大哥',15,'高一')
// const p1 = new Person('tom',18)
// const p2 = new Person('jerry',18)
// const data =['Angular','React',19]
// const data2=['An','Vue',18]
// const VDOM = (
// 	<div ref={(currentNode)=>{this.input1=currentNode;console.log('@',currentNode)}}>
// 		<h1 id="title">
// 			前端js框架列表
// 		</h1>
// 		<ul>
// 		{
// 			data.map((item,index)=>{
// 				return <li key={index}>{item}</li>
// 			})
// 		}
// 		</ul>
// 	</div>
// )
// 关于虚拟DOM
// 1.本质是object类型的对象(一般对象)
// 2.虚拟DOM属性没有真实DOM这么多.因为只是React内部在用
// 3.虚拟DOM最终会被React转化为真实DOM,呈现在页面上
// ReactDOM.render(VDOM,document.getElementById('root'))
// console.log(p1)
// console.log(p2)
// console.log(s1)
// p1.speak()
// p2.speak()
// ReactDOM.render(VDOM,document.getElementById('root'))
// ReactDOM.render(<PlayerModal/>,document.getElementById('root'))
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
class Demo extends React.Component{
	
	// state = {isHot:false}
	
	// showInfo = ()=>{
	// 	console.log(this)
	// 	const {input1} = this
	// 	alert(input1.value)
	// }
	// chengeWeather =()=>{
	// 	//获取原来的状态
	// 	const {isHot} = this.state
	// 	//更新状态
	// 	this.setState({isHot:!isHot})
	// }
	state={
		username:'',
		password:''
	}
	// saveusername = (event) =>{
	// 	this.setState({username:event.target.value})
	// }
	// saveusername = (event) =>{
	// 	this.setState({password:event.target.value})
	// }
	saveFormData = (dataType) =>{
		return (event)=>{
			console.log(event)
			this.setState({[dataType]:event.target.value})
		}
	}
	handleSubmit = (e) =>{
		e.preventDefault()//阻止表单提交
		const {username,password} = this.state
		alert(`用户名：${username},密码：${password}`)
	}
	render(){
		/*const {isHot}=this.state*/
		return(
			<div>
				{/*<h2>今天天气很{isHot ? '炎热':'凉爽'}</h2>
				<input ref={(currentNode)=>{this.input1=currentNode;console.log('@',currentNode);}} type="text"/><br/><br/>
				<button onClick={this.showInfo}>点我提示输入的数据</button>
				<button	onClick={this.chengeWeather}>点我切换天气</button>*/}
				{/*<form onSubmit={this.handleSubmit}>
					用户名:<input ref={c => this.username = c} type="text" name="username"/>
					密码:<input ref={c => this.password = c} type="text" name="password"/>
					<button>登录</button>
				</form>*/}
				{/*<form onSubmit={this.handleSubmit}>
					用户名:<input onChange={this.saveusername} type="text" name="username"/>
					密码:<input onChange={this.savepassword} type="text" name="password"/>
					<button>登录</button>
				</form>*/}
				<form onSubmit={this.handleSubmit}>
					用户名:<input onChange={this.saveFormData('username')} type="text" name="username"/>
					密码:<input onChange={this.saveFormData('password')} type="text" name="password"/>
					<button>登录</button>
				</form>
			</div>
		)
	}
}
//渲染组件到页面
ReactDOM.render(<Demo/>,document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
