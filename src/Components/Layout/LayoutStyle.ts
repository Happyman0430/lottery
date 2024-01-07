import styled from "styled-components";
import { theme } from "@GlobalStyle/theme";

type propsType = {
  account?: boolean;
};
export const LayoutStyle = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-rows: 72px 1fr 72px;
  > header,
  footer {
    width: 100%;
    height: 72px;
    opacity: 1;
    display: flex;
    justify-content: center;
    background-color: ${theme.background};
  }
  > header {
    border-bottom: 2px solid ${theme.line};
  }
  > footer {
    border-top: 2px solid ${theme.line};
    align-items: center;
    > p {
      font: normal normal normal 15px/70px Helvetica Neue;
      color: ${theme.textPrimary};
    }
    @media screen and (max-width: 888px) {
      position: initial;
    }
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 72px -72px);
    max-height: calc(100% - 72px -72px);
    overflow: auto;

    > div {
      width: 80%;
      height: 100%;
      display: grid;
      > section {
        padding-top: 50px;
      }
      ${(props: propsType) =>
        props.account
          ? `          
          padding-top: 40px;
          `
          : `grid-template-columns: 60% 40%;`}
    }
    @media screen and (max-width: 1015px) {
      > div {
        width: 90%;
      }
    }
    @media screen and (max-width: 901px) {
      > div {
        grid-template-columns: 65% 35%;
      }
    }
    @media screen and (max-width: 888px) {
      > div {
        display: flex;
        flex-direction: column;
        > section {
          padding: 10px;
        }
      }
    }
  }
`;
