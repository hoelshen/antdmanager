import React from 'react';

import {HashRouter as Router, Route, Link} from 'react-router-dom'


import Home from './home';
import Main from './main';
import About from './about';
import Topic from './topic';


export default class IRoute extends React.Component{

  render(){
    return (
      <Router>  
        <Home>
          <Route exact path="/" render={()=> <Main>
                <div> this is sub page</div>

            </Main>}></Route>
          <Route path="/about" component={About}></Route>
          <Route  path="/Topics" component={Topic} ></Route>
        </Home>
      </Router>
    )
  }
}