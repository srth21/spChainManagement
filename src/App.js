import React, { Component } from 'react';
import Login from './loginpage';
import Home from "./homepage";
import ULogin from "./usrlogin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {browserHistory} from "react-router-dom";
import { render } from '@testing-library/react';
import CataloguePage from './cataloguePage';
import Loadcatalogue from './loadcataloguepage';
import history from './history';

class App extends Component{

  render() {
    return (
      <Router history={history}>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/homepage.js" component={Home} />
        <Route exact path="/loginpage" component={Login} />
        <Route  exact path="/usrlogin" component={ULogin} /> 
        <Route exact path="/loadcataloguePage" component={Loadcatalogue}/>
        </Switch>
      </Router>
      /*<CataloguePage></CataloguePage>*/
    );
    }
  }


export default App;
