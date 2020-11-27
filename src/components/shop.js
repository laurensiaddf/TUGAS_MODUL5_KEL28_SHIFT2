import React, { Component } from "react";
import axios from "axios";
import { Card } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;

export default class shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: [],
            name: "",
            price: "",
            brand: "",
            image_link: "",
        };
    }
    componentDidMount() {
        axios({
            method: "get",
            url: "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner",
            headers: {
                accept: "*/*",
            },
        })
        .then((data) => {
            console.log(data.data);
            this.setState({
                shop: data.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
        <div>
            {this.state.shop.map((results) => {
                return (
                    <div key={results.id} style={{textAlign:'center', display:'inline-block'}}>
                        <Card hoverable style={{textAlign:'center', display: 'inline-block', width:350, margin:'30px', boxShadow:'1px 2px 1px 0.1px', borderRadius:'20px'}}
                        cover={<img alt="gambar1" maxWidth="30px" src={results.image_link} />}>
                            <Meta title={results.name} description={results.price} />
                            <div>
                            <p>Brand : {results.brand}</p>
                            </div>
                        </Card>
                        </div>
                );
            })}
        </div>
        );
    }
}