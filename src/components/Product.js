import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer} from "../context";


class Product extends Component {
  
  render(){
    const{ id, title, img, price, inCart } = this.props.product;
    return (
        <ProductWrapper className="col-9 mx-auto col-md col-lg-3 my-3">
            <div className="card">
              <div className="img-container" onClick={console.log('clicked')}>
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top"/>
                </Link>
              </div>
            </div>
        </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
    text-transform:capitalize;
    font-size:1.4rem;
    background:transparent;
    border:0.125rem solid var(--lightBlue);
    color:var(--lightBlue);
    border-radius: 0.5rem;
    padding: 0.2rems 0.5rem
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
    background: var(--lightBlue);
    color: var(--mainBlue);
    }
    &:focus{
    outline:none;
    }
`;
export default Product;
