import { useState } from "react";
import { useCoin } from "../../../context/CoinContext";
import { InputSearchProps } from "./interfaces";
import { InputContainer } from "./styles";

export default function InputSearch({tabIndex, value, onChangeText}: InputSearchProps) {

  return (
    <InputContainer >
      <label>CRYPTOCURRENCY CODE</label>
      <input
        tabIndex={tabIndex}
        onChange={(e) => onChangeText(e.target.value)}
        value={value}
      />
    </InputContainer>
  )
}