import { FC } from "react";
import { ContainerStyle } from "./ContainerStyle";

type propsType = {
  type: string;
  newGame?: boolean;
  isHome?: boolean;
};

const Container: FC<propsType> = (props) => {
  return (
    <ContainerStyle type={props.type} newGame isHome>
      {props.children}
    </ContainerStyle>
  );
};
export default Container;
