import styled from "styled-components";
import { theme } from "@GlobalStyle/theme";

type propsType = {
  typeStyle?: string;
  addToCar?: boolean;
  color?: string;
  active?: boolean;
};

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 20px;
    margin-right: 25px;
  }

  &:hover {
    transform: scale(1.01);
  }

  ${(props: propsType) =>
    props.typeStyle === "actionGame" &&
    `
    justify-content: space-evenly!important;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: ${(props: propsType) => (props.addToCar ? `bold` : `medium`)};
    background-color: ${theme.white};
    color: ${theme.greenLight};
    border:2px solid ${theme.greenLight};
   
  `}

  ${(props: propsType) =>
    props.addToCar &&
    `background-color: ${theme.greenLight};
    color: ${theme.white};
    border: 1px solid ${theme.greenLight};
  `}

  ${(props: propsType) =>
    props.typeStyle === "large" &&
    ` background-color: transparent;
      width: 100%;
      height: 42px;
      border: none;
      opacity: 1;
      outline: none;
      margin-top: 10px;
      font-weight: bold;
      font-style: italic;
      font-size: 24px;
      letter-spacing: 0px;
      opacity: 1;
      color:${theme.textPrimary}
  `}


  ${(props: propsType) =>
    props.color === "green" &&
    ` background-color: transparent;
      color:${theme.greenLemon}
  `}


  ${(props: propsType) =>
    props.typeStyle === "litle" &&
    `
      width: 113px;
      height: 34px;
      font-style: italic;
      border-radius: 15px;
      margin-right: 10px;

      border-width: 2px;
      border-style: solid;
      border-color: ${props.color};
      color: ${props.color} ;
      background-color: ${theme.white};
            
  `} 
  
  ${(props: propsType) =>
    props.typeStyle === "litle" &&
    props.active &&
    `
    color:white;
    background-color: ${props.color};             
  `}
`;
