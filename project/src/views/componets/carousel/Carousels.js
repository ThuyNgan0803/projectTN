import React, { Component } from 'react';
import { Carousel } from 'antd';
import "./style.css"

class Carousels extends Component {
    render() {
        return (
            <>
            <Carousel autoplay className = "ant-carousel">
                <div className = "slick-slide">
                    <img src="https://hinhnenpowerpointdep.com/uploads/images/25-bieu-tuong-adidas-day-mau-sac-day-an-tuong-1487830736-14.jpg" 
                    alt="Adidas"
                    style={{width:"100%",height:"50vh", objectFit:"cover"}}
                    />
                </div>
                <div className = "slick-slide">
                <img src="https://i.pinimg.com/originals/2e/32/38/2e32384fc091ce2626eed0c2001a00a1.jpg" 
                    alt="Converse"
                    style={{width:"100%",height:"50vh", objectFit:"cover"}}
                    />
                </div>
                <div className = "slick-slide">
                    <img src="https://i.imgur.com/XNQSx0z.jpg" 
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
        </>
        )
    }
}

export default Carousels;