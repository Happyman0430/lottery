import { FC } from "react";
import { TitleStyle } from "./TitleStyle";

type propsType = {
  fontsize?: string;
  color?: string;
  onClick?: () => void;
  className?: string;
};

const Title: FC<propsType> = (props) => {
  return (
    <TitleStyle className={props.className} onClick={props.onClick} {...props}>
      {props.children}
    </TitleStyle>
  );
};
export default Title;
