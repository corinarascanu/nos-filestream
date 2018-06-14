import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from "./root/components/Menu";
import Home from "./root/components/Home";
import About from "./root/components/About";
import Resources from "./resources/components/Resources";

ReactDOM.render(
  <BrowserRouter>
    <div className="app">

      <div className="menu">
        <Menu />
      </div>

      <div className="body">
        <Route exact path='/' component={Home}/>
        <Route path='/resources' component={Resources}/>
        <Route path='/about' component={About}/>
      </div>

    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
