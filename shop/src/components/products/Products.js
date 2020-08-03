import React, { Component } from 'react';
import {  Row, Col, Divider } from 'antd';
import "./style.css"
const Product = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Products extends Component {
    render() {
        return (
            <div className="product">
                <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
                Products
                </Divider>
                <Row justify="space-around" align="middle">
                <Col span={4}>
                    <Product className="product-item" value={100}>
                        col-4
                    </Product>
                </Col>
                <Col span={4}>
                    <Product className="product-item" value={100}>
                        col-4
                    </Product>
                </Col>
                <Col span={4}>
                    <Product className="product-item" value={100}>
                        col-4
                    </Product>
                </Col>
                <Col span={4}>
                    <Product className="product-item" value={80}>
                        col-4
                    </Product>
                </Col>
                </Row>
                <Row justify="space-around" align="middle">
                <Col span={4}>
                    <Product className="product-item" value={100}>
                        col-4
                    </Product>
                </Col>
                <Col span={4}>
                    <Product className="product-item" value={100}>
                        col-4
                    </Product>
                </Col>
                <Col span={4}>
                    <Product className="product-item" value={100}>
                        col-4
                    </Product>
                </Col>
                <Col span={4}>
                    <Product className="product-item" value={80}>
                        col-4
                    </Product>
                </Col>
                </Row>
            </div>
        );
    }
}

export default Products;