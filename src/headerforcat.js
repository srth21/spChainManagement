import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import './app.css';
class Headercat extends Component {
    render() {
        return (
            <header>
                <div className="container1">
			        <div id="branding">
                        <h1>Enterprise Hub</h1>
                    </div>
                    <nav>
            	        <ul>
                            <li><Link to="/loadcataloguepage">My Account</Link></li>
            		        <li><Link to="/cataloguePage">Check Products</Link></li>
                            <li><Link to="/homepage">Log out</Link></li>
            		        
            	        </ul>
                    </nav>
                </div>
            </header>
        );s
    }
}
export default Headercat;