import React, { Component } from 'react';
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

class Default extends Component {
  
  render(){
    return (
        <ProductConsumer>
            {(value) => {
                const {modalOpen, closeModal} = value;
                const { imgUrls, name, price } = value.modalProduct;
                if(!modalOpen){
                    return null
                } else {
                    return(
                    <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4
                                text-center text-capitalize p-5">
                                    <h5>Item added to cart</h5>
                                    <img className="img-fluid" src={imgUrls[0]} alt="product" />
                                    <h5>{name}</h5>
                                    <h5 className="text-muted">price: ${price}</h5>
                                    <Link to='/cart'>
                                        <ButtonContainer cart onClick={()=> closeModal()}>
                                           goto cart
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer onClick={()=> closeModal()}>
                                        close
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </ModalContainer>
                    )
                }
            }}
        </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background: rgba(0,0,0,0.3);
display:flex;
align-items: center;
justify-content:center;
#modal {
    background: var(--mainWhite);
}
`

export default Default;
