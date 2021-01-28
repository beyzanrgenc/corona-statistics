import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';



class NavBar extends Component {

    render() {
        return (
            <nav>
                <h3>Corona Statistics in Turkey</h3>
                <ul className="nav-link">
                    <Link className="navStyle" to='/postNews'>
                        <li>Post News</li>
                    </Link>
                    <Link className="navStyle" to='/graphics'>
                        <li>Graphics</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default NavBar;
