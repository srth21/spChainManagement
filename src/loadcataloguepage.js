
import React, { Component } from 'react';
import CataloguePage from './cataloguePage';
import Myacc from './myacc';
import ULogin from './usrlogin';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import history from './history';
export default class Loadcatalogue extends Component{
         render() {
                return(
                        <Router history={history}>
                        <Switch>
                                <Route exact path="/loadcataloguepage" component={Myacc} />
                                <Route exact path="/cataloguePage" component={CataloguePage} />
                                <Route exact path="/usrlogin" component={ULogin} />
                        </Switch>
                        </Router>
                  

                );
        }   
}
  

  