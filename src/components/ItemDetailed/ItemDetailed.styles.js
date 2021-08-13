import styled from "styled-components";

const ItemDetailedStyled = styled.div`
    width: 100%;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        p {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ececec;;
            width: 200px;
            height: 100px;
            font-weight: bold;
            cursor: pointer;
            overflow: hidden;
            &:hover {
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                transition: all 0.5s;
            }
        }
    }
`;

export default ItemDetailedStyled;