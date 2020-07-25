import React, { Component } from 'react';
import "./style.css"
import { createFromIconfontCN } from '@ant-design/icons';
import Home from '../pages/Home';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', 
  ],
});

class DfHeader extends Component {
    render() {
        return (
            <div className="page">
                <div className = "header">
                    <ul className="menu-header">
                        <li className="home">
                            <a>Home</a>
                        </li>
                        <li className="shop">
                            <a >Shop Collection</a>
                        </li>
                        <li className="contact">
                            <a>Contact</a>
                        </li>
                        <li className="login">
                            <a>Login</a>
                        </li>
                        <li className="cart">
                            <a><IconFont type="icon-shoppingcart" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default DfHeader;