import styled from "styled-components"

const PaddingTop = {
    sm: "6px",
    md: "8px",
    lg: "11px"
};
const PaddingSide = {
    sm: "12px",
    md: "16px",
    lg: "22px"
}

export const TextButton = styled.button`
    font-size: 14px;
        font-weight: 500;
        font-family: 'Noto Sans JP', sans-serif;
        text-align: center;
        line-height: 20px;
        outline: none;
        border: none;
        padding: ${props => (PaddingTop[props.specs.size])} ${props => (PaddingSide[props.specs.size])};
        border-radius: 6px;
        color: #3D5AFE;
        background-color: transparent;
        transition: background-color 0.4s ease-in-out;
        :hover, :focus{
            background-color: rgba(41, 98, 255, 0.1);
        }
    `