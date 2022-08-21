import { InputSearchProps } from "./interfaces";
import { InputContainer } from "./styles";

export default function InputSearch({tabIndex, value, ...props}: InputSearchProps) {

  return (
    <InputContainer >
      <label>CRYPTOCURRENCY CODE</label>
      <input
        {...props}
        value={value}
        tabIndex={tabIndex}
      />
    </InputContainer>
  )
}