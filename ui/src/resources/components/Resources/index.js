import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from 'react-router-dom';

import Tab from '../Tab';
import MyResources from '../MyResources';
import Purchased from '../Purchased';

class Resources extends React.Component {
  render() {

    return (
      <div className="resources">
          test
          <Tab />

          <Switch>
            <Route path='/resources/myresources' component={MyResources} />
            <Route path='/resources/purchased' component={Purchased} />
          </Switch>
      </div>
    );
  }
}

export default Resources;
