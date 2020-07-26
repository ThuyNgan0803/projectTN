import React, { Component } from 'react';
import { Carousel } from 'antd';
import "./style.css"

class Carl extends Component {
    render() {
        return (
            <Carousel autoplay className = "ant-carousel">
                <div className = "slick-slide">
                    <img src="" 
                    alt="Adidas"
                    style={{width:"100%",height:"50vh", objectFit:"cover"}}
                    />
                </div>
                <div className = "slick-slide">
                <img src="" 
                    alt="Converse"
                    style={{width:"100%",height:"50vh", objectFit:"cover"}}
                    />
                </div>
                <div className = "slick-slide">
                    <img src="" 
                    alt="Nike"
                    style={{width:"100%",height:"50vh", objectFit:"cover"}}
                    />
                </div>
                <div className = "slick-slide">
                    <img src="" 
                    alt="Puma"
                    style={{width:"100%",height:"50vh", objectFit:"cover"}}
                    />
                </div>
                <div className = "slick-slide slide5">
                    <img src="" 
                    alt="Vans"
                    style={{width:"100%",height:"50vh", objectFit:"cover"}}
                    />
                </div>
            </Carousel>
        );
    }
}

export default Carl;