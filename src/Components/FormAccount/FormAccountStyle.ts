import styled from "styled-components";
import { theme } from "@GlobalStyle/theme";

export const FormAccountStyle = styled.form`
  width: 100%;
  background-color: ${theme.white};
  margin-top: 25px;
  padding: 30px;
  box-sizing: ${theme["box-shadow-cards"]};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  > div {
    margin-top: 10px;
    width: 60%;
  }
`;
