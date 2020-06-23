import React from 'react';

export default class Info extends React.Component{


  render(){

    return <div className={'vStyle'}>
      <p>这里是测试动态路由功能</p> 
      { this.props.match.params.value}
    </div>
  }
}