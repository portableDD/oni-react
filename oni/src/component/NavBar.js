import React from 'react'
import logo from '../logo.oni.png'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return(
        <header>
            <div className="site-header">
                <div className = "site-logo">
                    <a href= "/">
                        <img src= {logo} alt= "the logo"/>
                    </a>
                </div>

                <nav className="site-menu">
                    <form className= "search">
                        <input type="text" id= "try" value="search"/>
                        <button>Submit</button>
                    </form>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/shoes">Shoes</NavLink></li>
                        <li><NavLink to="/sandal">Sandals</NavLink></li>
                        <li><NavLink to="/slipper">Slippers</NavLink></li>
                        <li><NavLink to="/contact">Contact Us </NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className = "toggle-menu">
                
                <span></span>
            
            </div>
        </header>
    )
}

export default withRouter(Navbar)