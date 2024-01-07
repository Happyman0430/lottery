import styled from "styled-components";

type propsType = {
  color?: string;
  isHome?: boolean;
};
export const CardGamesStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  height: 80px;
  min-height: 80px;

  justify-content: start;
  align-items: center;
  margin-bottom: 20px;

  svg {
    font-size: 30px;
    margin: 0 15px 0 0;
    cursor: pointer;
    &:hover {
      color: ${(props: propsType) => props.color};
    }
  }
  div:last-child {
    width: ${(props: propsType) => (props.isHome ? 100 : 80)}%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${(props: propsType) =>
      props.isHome ? `space-between` : "center"};
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    p {
      margin-left: ${(props: propsType) => (!props.isHome ? `10px` : null)};
    }

    ::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0px;
      top: 0px;
      border-color: ${(props: propsType) => props.color};
      border-style: solid;
      border-radius: ${(props: propsType) =>
        props.isHome ? `10px` : `10px 0 0 10px`};
    }
  }
`;
