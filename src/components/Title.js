import React from 'react';
import styled from "styled-components";

export default function Title({name, title}){
    return (
        <TitleContainer pos className="">
            <div className="row mx-auto my-2 ">
                <h3 className="text-capitalize text col-9 ">
                    {name} <strong className="text-blue">{title}</strong>
                </h3>
                <span className="col-3 mr-0 sp">see more</span>
            </div>
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
    text-transform:capitalize;
    font-size:1.125rem;
    .sp{
        float:right;
    }
`;
