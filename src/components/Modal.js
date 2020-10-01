import React, { useContext } from 'react';
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

import { ProductContext } from "../context";

export default function Modal(){

    const { modalProduct, modalOpen, closeModal} = useContext(ProductContext);
    const { imgUrls, name, price } = modalProduct;
  
    return (
 
                    <ModalContainer>
                    { modalOpen && 
                     (  
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
                    ) 
                }
                </ModalContainer>

    );
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