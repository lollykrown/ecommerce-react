import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Title({name, title, see}){
    return (
        <TitleContainer pos className="">
            <div className="row mx-auto my-2 ">
                <h4 className="text-capitalize text col-9 pl-0 mt-2 ">
                    {name} <strong className="text-blue">{title}</strong>
                </h4>
                <Link className="col-3 mt-3 sp">
                    <span className="sp">{see}</span>
                </Link>
            </div>
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
    text-transform:capitalize;
    font-size:1.125rem;
    .sp{
        text-align: right;
        font-size: 1rem;
        color: var(--mainBlue) !important;
    }
`;
