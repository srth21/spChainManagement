import React, { Component } from 'react';
import Footer from "./footer";
import './userbody.css';
import Header from './header';
import Ubody from './userloginbody';
class ULogin extends Component {
    render(){
        return(
            <div>
                <Header></Header>
                <Ubody></Ubody>
                <Footer></Footer>
            </div>
        );
    }
}
 
export default ULogin;