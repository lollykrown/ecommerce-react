import styled from "styled-components";

export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size:1rem;
    background:var(--mainGreen);
    border:0.125rem solid var(--lightBlue);
    border-color:${props => props.cart?"var(--mainYellow)":"var(--mainGreen)"};
    color:${prop => prop.cart?"var(--mainYellow)":"var(--mainWhite)"};
    border-radius: 0.5rem;
    padding: 0.25rem 1rem !important;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
    background:${prop => prop.cart?"var(--mainYellow)":"var(--mainGreen)"};
    color: var(--mainWhite);
    }
    &:focus{
    outline:none;
    }
`;
