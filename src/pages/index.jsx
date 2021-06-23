import React from 'react';
import './index.css';
import { Button } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  saveFormData = (dataType) =>{
		return (event)=>{
			console.log(event)
			this.setState({[dataType]:event.target.value})
		}
	}
	handleSubmit = (e) =>{
		e.preventDefault()//阻止表单提交
		const {username,password} = this.state;
		alert(`用户名：${username},密码：${password}`);
	}

  render() {
    return (<>
      <button class='btn'>Button</button>
      <form onSubmit={this.handleSubmit}>
        用户名:<input onChange={this.saveFormData('username')} type="text" name="username"/>
        密码:<input onChange={this.saveFormData('password')} type="text" name="password"/>
        <button>登录</button>
      </form>
    </>);
  }
}

export default App;
