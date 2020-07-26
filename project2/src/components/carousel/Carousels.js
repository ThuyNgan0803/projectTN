import React, { Component } from 'react';
import { Carousel } from 'antd';
import "./style.css"

class Carousels extends Component {
    render() {
        return (
            <Carousel autoplay className="ant-carousel ">
                <div className="slick-slide">
                <h3>1</h3>
                </div >
                <div className="slick-slide">
                <h3>2</h3>
                </div >
                <div className="slick-slide">
                <h3>3</h3>
                </div>
                <div className="slick-slide">
                <h3>4</h3>
                </div>
            </Carousel>
        );
    }
}

export default Carousels;