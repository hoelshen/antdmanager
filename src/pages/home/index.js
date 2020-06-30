import React from 'react';

import Child from './Child'

import { Button } from 'antd';

import './index.less'
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

     const a = {}

    // 此处同样会报错
    console.log(a.name.name)

    // 抛出错误
    new Error('抛出错误')
  }

  render(){

    return <div className={'vStyle'}>
      <p>React 生命周期介绍</p> 
      <Button type='primary' onClick={this.handleAdd}>点击一下</Button>  
      <button onClick={this.handlClick.bind(this)}>点击一下</button>  
      <p>{this.state.count}</p>
      <Child name={this.state.count}></Child>
    </div>
  }
}