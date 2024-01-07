import { FC } from "react";
import { ButtonStyle } from "./ButtonStyle";

type propsType = {
  typeStyle: string;
  onClick?: () => void;
  addToCar?: boolean;
  color?: string;
  type?: any;
  active?: boolean;
};

const Button: FC<propsType> = (props) => {
  return (
    <ButtonStyle
      type={props.type}
      onClick={props.onClick}
      typeStyle={props.typeStyle}
      addToCar={props.addToCar}
      color={props.color}
      active={props.active}
    >
      {props.children}
    </ButtonStyle>
  );
};
export default Button;
