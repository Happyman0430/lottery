import { InputStyle, DivInput } from "./InputStyle";
type propsType = {
  input: {};
  error?: string | null;
};
const Input = (props: propsType) => {
  return (
    <DivInput>
      {props.error ? <span>{props.error}</span> : null}
      <InputStyle error={!!props.error} {...props.input} />
    </DivInput>
  );
};
export default Input;
