import Loader from "../Loader"
import { ButtonProps } from "./interfaces"
import { ButtonStyle } from "./styles"

export function Button({text, tabIndex, loading, onClick}: ButtonProps){

  return(
    <ButtonStyle tabIndex={tabIndex} disabled={loading} onClick={onClick}>
      {text}
      {loading && <Loader />}
    </ButtonStyle>
  )
}