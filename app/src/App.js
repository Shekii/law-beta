/* Import statements */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js';

import ManageCases from './components/ManageCases/ManageCases';



// import { Breadcrumbs, BreadcrumbsItem } from 'react-breadcrumbs-dynamic'


/* App component */
class App extends Component {
  render() {
    return (
      <div>
        
         <Header/>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/manage" exact component={ManageCases}/>
            <Route component={Home}/>
          </Switch>

      </div>
    )
  }
}
export default App;

