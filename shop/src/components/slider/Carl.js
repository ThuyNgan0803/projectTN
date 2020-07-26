import React, { Component } from 'react';
import { Carousel } from 'antd';
import "./style.css"

class Slider extends Component {
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
                    <img src="https://arvaniv.files.wordpress.com/2013/12/7faa2-puma-logo-wallpaper-5298-hd-wallpapers.jpg" 
                    alt="Puma"
                    style={{width:"100%",height:"50vh", objectFit:"cover"}}
                    />
                </div>
                <div className = "slick-slide slide5">
                    <img src="https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/brand-vans_ncetfc.jpg" 
                    alt="Vans"
                    style={{width:"100%",height:"50vh", objectFit:"cover"}}
                    />
                </div>
            </Carousel>
        );
    }
}

export default Slider;