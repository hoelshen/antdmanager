
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class Info extends React.Component{


  render(){

    return (
      <div >
            <Link to="/main/test-id">嵌套路由1</Link>
            <Link to="/main/456">嵌套路由2</Link>
          <hr/>
          { this.props.children}
    </div>
    )
  }
}

