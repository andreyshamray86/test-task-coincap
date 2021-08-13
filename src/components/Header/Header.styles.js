import { Link } from 'react-router-dom'
import styled from "styled-components";

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between ;
    align-items: center;
    height: 70px;
    color: #a5a58d;

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        width: 200px;
    }
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #a5a58d;
    padding: 10px;
    margin-left: 20px;
    &:hover {
        border: 1px solid #a5a58d;
    }
`;

export const LinkItemStyled = styled(Link)`
    text-decoration: none;
    color: #a5a58d;
    padding: 10px;
    margin-left: 20px;
    &:hover {
        font-weight: 600;
    }
`;

