import { useState } from "react";
import { useCoin } from "../../../context/CoinContext";
import { InputSearchProps } from "./interfaces";
import { InputContainer } from "./styles";

export default function InputSearch({tabIndex, value, ...props}: InputSearchProps) {

  return (
    <InputContainer >
      <label>CRYPTOCURRENCY CODE</label>
      <input
        onChange={props.onChange}
        value={value}
        tabIndex={tabIndex}
      />
    </InputContainer>
  )
}