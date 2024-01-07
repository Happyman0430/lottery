import { FC } from "react";
import { BallStyles } from "./BallStyles";

type propsType = {
  color?: string;
  onClick: () => void;
  content: string;
};

const Title: FC<propsType> = (props) => {
  return (
    <BallStyles color={props.color} onClick={props.onClick}>
      <span>{props.content}</span>
    </BallStyles>
  );
};
export default Title;
