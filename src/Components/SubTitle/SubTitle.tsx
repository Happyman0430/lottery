import { FC } from "react";
import { SubTitleStyle } from "./SutitleStyles";

type propsType = { fontStyle?: string };

const SubTitle: FC<propsType> = (props) => {
  return <SubTitleStyle {...props}>{props.children}</SubTitleStyle>;
};
export default SubTitle;
