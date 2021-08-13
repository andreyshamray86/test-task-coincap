import styled from "styled-components";

export const MarketItemStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    p {
        width: 20%;
        text-align: left;
    }
    &:hover {
        background-color: #ececec;
        transition: all 0.3s;
    }
`;

export const ExchangesItemStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    p {
        width: 20%;
        text-align: left;
    }
    &:hover {
        background-color: #ececec;
        transition: all 0.3s;
    }
`;