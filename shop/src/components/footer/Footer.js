import React, { Component } from 'react';
import { 
    createFromIconfontCN,
    GithubOutlined,
    SkypeOutlined, 
} from '@ant-design/icons';
import { Button } from 'antd';
import "./style.css"

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadings: [],
        }
    }
    enterLoading = index => {
        this.setState(({ loadings }) => {
          const newLoadings = [...loadings];
          newLoadings[index] = true;
    
          return {
            loadings: newLoadings,
          };
        });
        setTimeout(() => {
          this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = false;
    
            return {
              loadings: newLoadings,
            };
          });
        }, 1000);
      };
    
    render() {
        const { loadings } = this.state;
        return (
            <div className="footer">
            <div className="footer1">
                welcome
            </div>
            <div className="footer2">
                <div className="contact contact-left">
                    <ul>
                        <li>Home</li>
                        <li>Shop Collection</li>
                        <li>Our Story</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="contact list-icon">
                    <ul >
                        <li><a target="_blank" href="https://github.com/ThuyNgan0803"><GithubOutlined /></a></li>
                        <li><a href="https://www.facebook.com/thuyngan.duong.33" target="_blank" rel="noopener noreferrer"><IconFont type="icon-facebook" /></a></li>
                        <li><a target="_blank" href="https://join.skype.com/invite/VyhVRYTpd7dv"><SkypeOutlined /></a></li>
                    </ul>
                </div>
                <div className="contact contact-right">
                    <ul> 
                        <li>Shipping & Returns</li>
                        <li>Store Policy</li>
                        <li>Payment Methods</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
            <div className="footer3">
                <div className="title-footer3">
                    Join Our Mailing List
                </div>
                <div className="subcribe">
                <input type="email" id="email" name="email" placeholder = "Enter your mail..."></input>
                <Button
                className="sub-now"
                    type="primary"
                    loading={loadings[1]}
                    onClick={() => this.enterLoading(1)}
                    >
                    Subcribe Now
                </Button>
                </div>
            </div>
            </div>
        );
    }
}

export default Footer;