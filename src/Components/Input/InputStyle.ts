import { theme } from "@GlobalStyle/theme";
import styled from "styled-components";

export const DivInput = styled.div`
  width: 100%;
  position: relative;
  span {
    position: absolute;
    right: 3px;
    bottom: 5px;
    font-size: 0.7rem;
    color: ${theme.error};
    font-weight: bold;
  }
`;
type inputProps = {
  error?: boolean;
};
export const InputStyle = styled.input`
  width: 100%;
  padding: 20px 5px;
  border: none;
  border-bottom: 2px solid
    ${(props: inputProps) => (props.error ? theme.error : theme.line)};

  text-align: left;
  font-weight: bold;
  font-style: italic;
  font-size: 17px;
  color: ${theme.textSecondary};
  :focus {
    outline: none;
  }
`;
