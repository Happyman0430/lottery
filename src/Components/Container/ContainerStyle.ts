import { theme } from "@GlobalStyle/theme";
import styled from "styled-components";

type propsType = {
  type: string;
  newGame?: boolean;
  isHome?: boolean;
};
export const ContainerStyle = styled.div`
  width: 100%;
  max-width: 100%;

  ${(props: propsType) =>
    props.type === "filter" &&
    `
    padding: 15px 0;    
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    > p {
      margin: 0 10px 0 25px;
    }
  `}

  ${(props: propsType) =>
    props.type === "filter" &&
    props.newGame &&
    `      
       > div {
        display: flex;
        justify-content: space-around;
        max-height: 70px;

      > button {
        margin-right: 15px;
      }
  
  `}
  
  ${(props: propsType) =>
    props.type === "car" &&
    `
    position: relative;
    height: 484px;
    max-height: 484px;
    padding-left: 10px;    
    
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 20px;
    box-shadow: ${theme["box-shadow-cards"]};
    margin-left: 10px;
    button {
      color: ${theme.greenBold}!important;
      font-size: 35px;
      height: 96px !important;
      padding: 20px;
      margin-top: 15px;
      border-top: 2px solid ${theme.line};
      &:hover {
        transform: scale(1.01);
      }
    }
  `}

  ${(props: propsType) =>
    props.type === "cardGame" &&
    `
    position: relative;
    height: 484px;    
    display: flex;
    flex-direction: column;
    overflow: auto;   
    margin-top:20px;

    > h1:last-child {
      font-size: 1rem;
      font-style: italic;
      color: ${theme.subTitle};
    }
  `}
   ${(props: propsType) =>
    props.type === "cardGame" && props.isHome && `height: 530px`}
    
    ${(props: propsType) =>
    props.type === "numberGame" &&
    `
      padding: 15px 0;
      
      max-height: 325px;
      overflow: auto;
      display: grid;
      column-gap: 10px;
      row-gap: 15px;
      margin-top: 15px;
      grid-template-columns: repeat(10, 1fr);
      .selected {
        background-color: ${theme.greenLight};
      }

      @media screen and (max-width: 1530px) {
        grid-template-columns: repeat(9, 63px);
      }
      @media screen and (max-width: 1379px) {
        grid-template-columns: repeat(8, 63px);
      }
      @media screen and (max-width: 1326px) {
        grid-template-columns: repeat(7, 63px);
      }
      @media screen and (max-width: 1075px) {
        grid-template-columns: repeat(6, 63px);
      }
      @media screen and (max-width: 1014px) {
        grid-template-columns: repeat(7, 63px);
      }
      @media screen and (max-width: 955px) {
        grid-template-columns: repeat(6, 63px);
      }
      @media screen and (max-width: 888px) {
        grid-template-columns: repeat(10, 63px);
      }
      @media screen and (max-width: 859px) {
        grid-template-columns: repeat(9, 63px);
      }
      @media screen and (max-width: 774px) {
        grid-template-columns: repeat(8, 63px);
      }
      @media screen and (max-width: 691px) {
        grid-template-columns: repeat(7, 63px);
      }
      @media screen and (max-width: 608px) {
        grid-template-columns: repeat(6, 63px);
      }
      @media screen and (max-width: 530px) {
        grid-template-columns: repeat(5, 63px);
      }
        
    `}
`;
