import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Body from './homebody';
import './app.css';
import { render } from '@testing-library/react';

class Home extends Component{

  render(){
    return (
      <div className='App'>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
    }
  }
export default Home;


