import React, { Component } from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import "./style.css"

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="contact-left">
                    <ul>
                        <li>Home</li>
                        <li>Shop Collection</li>
                        <li>Our Story</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="contact-left">
                    <ul>
                        <li>Home</li>
                        <li>Shop Collection</li>
                        <li>Our Story</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="contact-left">
                    <ul>
                        <li>Home</li>
                        <li>Shop Collection</li>
                        <li>Our Story</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;