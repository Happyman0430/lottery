import { theme } from "@GlobalStyle/theme";
import styled from "styled-components";

type propsType = {
  fontStyle?: string;
};
export const SubTitleStyle = styled.p`
  font-weight: lighter;
  font-style: ${(props: propsType) => props.fontStyle || "italic"};
  font-size: 17px;
  color: ${theme.subTitle};
`;
