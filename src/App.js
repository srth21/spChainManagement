import React, { Component } from 'react';
import Login from './loginpage';
import CataloguePage from './cataloguePage';
import { render } from '@testing-library/react';

class App extends Component{

  render(){
    return (
    <CataloguePage></CataloguePage>);
  }
}

export default App;
