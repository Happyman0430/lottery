import { theme } from "@GlobalStyle/theme";
import styled from "styled-components";

type propsType = {
  fontsize?: string;
  color?: string;
};
export const TitleStyle = styled.h1`
  max-width: 90%;
  font-weight: bold;
  font-style: italic;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: ${(props: propsType) => props.fontsize || 25}px;
  color: ${(props: propsType) => props.color || theme.textPrimary};
  span {
    font-weight: lighter;
    margin-left: 10px;
  }
`;
