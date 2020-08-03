import React, { Component } from 'react'
import Sider from '../sider/Sider'
import Products from '../products/Products'

export default class Home extends Component {
    render() {
        return (
            <div className= "home">
            <div className="sider">
                <Sider/>
            </div>
            <div className="products">
                <Products/>
            </div>
            </div>
        )
    }
}
