import React from 'react';
import styled from "styled-components";

export default function Title({name, title}){
    return (
        <TitleContainer pos className="row">
            <div className="col-12 mx-auto my-2">
                <h3 className="text-capitalize text">
                    {name} <strong className="text-blue">{title}</strong>
                </h3>
            </div>
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
    text-transform:capitalize;
    font-size:1.125rem;
`;
