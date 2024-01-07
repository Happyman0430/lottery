import styled from "styled-components";
import { theme } from "@GlobalStyle/theme";

export const HeaderStyle = styled.header`
  > div {
    width: 80%;
    height: 100%;
    display: flex;
    padding: 15px;
    justify-content: space-between;

    a {
      font-weight: bold;
      font-style: italic;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      font-size: 25px;
      color: ${theme.textPrimary};
      text-decoration: none;
    }
    > div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .logo {
        position: relative;
        display: inline-block;
        text-align: center;
        &::after {
          content: "";
          position: absolute;
          top: 110%;
          left: -5px;
          width: 110%;
          border-radius: 10px;
          height: 0.2em;
          background-color: ${theme.greenLemon};
        }
      }
    }
  }
  .linkMenu {
    color: ${theme.textPrimary};
    cursor: pointer;
    margin-left: 20px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 20px;
    }
  }
  .active {
    border-bottom: 2px solid ${theme.textPrimary};
  }
  @media screen and (max-width: 1015px) {
    > div {
      width: 90%;
    }
  }
`;
