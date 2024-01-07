import styled from "styled-components";
import { theme } from "@GlobalStyle/theme";
export const SectionLogin = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  & div:first-child {
    button {
      width: 144px;
      height: 39px;
      background: ${theme.greenLemon};
      border-radius: 100px;
      border: none;
      opacity: 1;
      margin: 30px 0;

      font-size: 22px;
      color: ${theme.white};
      font-weight: bold;
      font-style: italic;
    }
    div {
      width: 300px;
      height: 224px;
      text-align: center;
    }
  }
  @media screen and (max-width: 786px) {
    display: flex;
    justify-content: center;

    & > div:first-child {
      display: none;
    }
  }
`;
type propsType = {
  height?: string;
};
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 352px;
  height: ${(props: propsType) => props.height || "337"}px;
  padding: 20px;
  margin: 10px;
  background-color: ${theme.white};
  box-shadow: ${theme["box-shadow-cards"]};
  text-align: right;
  border-radius: 14px;
  button {
    width: 100%;
  }
  a {
    font-weight: bold;
    font-style: italic;
    font-size: 17px;
    letter-spacing: 0px;
    color: ${theme.textLight};
    border: none;
    cursor: pointer;
    text-decoration: none;
    margin: 20px 0;
  }
  > span {
    text-align: center;
    color: ${theme.error};
    font-weight: bold;
    font-size: 1rem;
  }
`;
