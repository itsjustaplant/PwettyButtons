/* eslint-disable max-len */
import styled from 'styled-components';

const TextColors = {
  default: '#3F3F3F',
  primary: '#FFFFFF',
  secondary: '#FFFFFF',
  danger: '#FFFFFF',
};
const BackgroundColors = {
  default: '#E0E0E0',
  primary: '#2962FF',
  secondary: '#455A64',
  danger: '#D32F5F',
};
const HoverColors = {
  default: '#AEAEAE',
  primary: '#0039CB',
  secondary: '#1C313A',
  danger: '#9A0007',
};
const PaddingTop = {
  sm: '6px',
  md: '8px',
  lg: '11px',
};
const PaddingSide = {
  sm: '12px',
  md: '16px',
  lg: '22px',
};
export const DefaultButton = styled.button`
        font-size: 14px;
        font-weight: 500;
        font-family: 'Noto Sans JP', sans-serif;
        text-align: center;
        line-height: 20px;
        outline: none;
        border: none;
        padding: ${(props) => (PaddingTop[props.specs.size])} ${(props) => (PaddingSide[props.specs.size])};
        border-radius: 6px;
        color: ${(props) => (TextColors[props.specs.color])};
        background-color: ${(props) => (BackgroundColors[props.specs.color])};
        transition: background-color 0.4s ease-in-out;
        box-shadow: ${(props) => ((props.specs.disableShadow) ? 'none' : '0px 2px 3px rgba(51, 51, 51, 0.2)')};
        display: flex;
        :hover, :focus{
            background-color: ${(props) => (HoverColors[props.specs.color])}
        } 
        .startIcon{
          padding-right: 8px;          
          font-size: 20px;
          line-height: 20px;
        }
        .endIcon{
          padding-left: 8px;
          font-size: 20px;
          line-height: 20px;
        }
    `;
