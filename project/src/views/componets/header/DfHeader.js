import React, { Component } from 'react';
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import "./style.css"
class DfHeader extends Component {
    render() {
        return (
            <>
            <div className="sale">Sale</div>
            <div className = "header">
                <ul className="menu-header">
                    <li className="logo"><a href="#">LOGO</a></li>
                    <li className="home"><a onClick = {<Home/>}>Home</a></li>
                    <li className="shop"><a href="#">Shop Collection</a></li>
                    <li className="contact"><a href="#">Contact</a></li>
                    <li className="login"><a onClick = {<Login/>}>Login</a></li>
                    <li className="cart"><a href="#" className= "cart">Cart </a></li>
                </ul>
            </div>
            </>
        );
    }
}

export default DfHeader;