import { useState } from "react";
import { useCoin } from "../../../context/CoinContext";
import { InputSearchProps } from "./interfaces";
import { InputContainer } from "./styles";

export default function InputSearch({ tabIndex, value, ...props }: InputSearchProps) {

  const { listCoinNames, handleTextSearch } = useCoin()

  const [showSelectComponent, setShowSelectComponent] = useState(false)

  function handleShowSelectComponent() {
    setShowSelectComponent(true)
  }

  function handleHideSelectComponent() {
    setTimeout(()=>{
      setShowSelectComponent(false)
    }, 100)
  }

  function CoinsList() {
    return (
      <ul>
        {listCoinNames.map(coin => (
          <li onClick={()=> handleTextSearch(coin)} key={coin}>{coin}</li>
        ))}
      </ul>
    )
  }

  return (
    <InputContainer >
      <label>CRYPTOCURRENCY CODE</label>
      <input
        {...props}
        onFocus={handleShowSelectComponent}
        onBlur={handleHideSelectComponent}
        value={value}
        tabIndex={tabIndex}
      />
      {showSelectComponent ? (
        <CoinsList />
  ) : <></>
}
    </InputContainer >
  )
}