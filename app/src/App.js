/* Import statements */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home.js';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

import ManageCases from './components/ManageCases/ManageCases';

import Case from './components/ViewCase/Case';

import Upload from './components/Upload/UploadCase';

import Search from './components/Search/Search';

import Find from './components/Find/FindAttr';

import Help from './components/Help/Help';

import Statistics from './components/Statistics/Statistics'

import './css/style4.css';

/* App component */
class App extends Component {
  render() {
    return (
      <div>
        
          <Header/> 

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/manage" exact component={ManageCases}/>
            <Route path="/upload" exact component={Upload}/>
            <Route path="/case/:id" exact component={Case}/>
            <Route path="/search" exact component={Search}/>
            <Route path="/search/:text" exact component={Search}/>

            <Route path="/find/concept/:text" 
                    render={(props) => <Find {...props} type={"concept"} />}
              />

            <Route path="/find/category/:text" 
                  render={(props) => <Find {...props} type={"category"} />}
                  />

            <Route path="/stats" exact component={Statistics}/>
            <Route path="/help" exact component={Help}/>

            <Route component={Home}/>
          </Switch>
        
        <Footer/>



      </div>
    )
  }
}
export default App;

