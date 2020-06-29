
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Main extends React.Component{
  render(){
    return (
      <div>
        this is main page
        <h2>{this.props.children}</h2>
      </div>
    );
  }
}

