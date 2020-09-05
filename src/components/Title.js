import React from 'react';
import styled from "styled-components";

export default function Title({name, title}){
    return (
        <TitleContainer pos className="row">
            <div className="col-12 mx-auto my-2 text-title">
                <h1 className="text-capitalize text">
                    {name} <strong className="text-blue">{title}</strong>
                </h1>
            </div>
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
    text-transform:capitalize;
    font-size:1.125rem;
`;
