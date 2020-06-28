import React, {Component} from 'react';
import './app.css';
import micro from './micro.jpg';
import small from './small.webp';
import medium from './medium.jpg';

class Body extends Component {
    render(){
        return (
            <body> 
    	        <section id="showcase">
    	            <div className="container">
    		            <h1>Welcome to Enterprise Hub!</h1>
    	            </div>
                </section>
                <section id="boxes">
                        <div className="Container">
                            <div className="box">
                                <img src={micro}/>
                                <h3>Micro</h3>
                            </div>
                            <div className="box1">
                                <img src={small} height="150px" width="200px"/>
                                <h3>Small </h3>
                            </div>
                            <div className="box12">
                                <img src={medium}/>
                                <h3>Medium </h3>
                            </div>
                        </div>
                </section>
                </body>
         );       
    	    
    } 
}
export default Body;