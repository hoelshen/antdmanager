import React from 'react';

import Child from './Child'

export default class Life extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }


  handleAdd = ()=> {
    this.setState({count:  this.state.count +1})
  }


  handlClick(){
    alert('1')
  }

  render(){
    let vStyle = {
      padding: 50,
    }
    return <div style={vStyle}>
      <p>React 生命周期介绍</p> 
      <button onClick={this.handleAdd}>点击一下</button>  
      <button onClick={this.handlClick.bind(this)}>点击一下</button>  
      <p>{this.state.count}</p>
      <Child name={this.state.count}></Child>
    </div>
  }
}