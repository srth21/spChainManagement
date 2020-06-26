import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container1">
			        <div id="branding">
                        <h1>Enterprise Hub</h1>
                    </div>
                    <nav>
            	        <ul>
                            <li><Link to="/homepage.js">Home</Link></li>
            		        <li><Link to="/loginpage">Register</Link></li>
            		        <li><a href="usrlogin">Log in</a></li>
            	        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
export default Header;