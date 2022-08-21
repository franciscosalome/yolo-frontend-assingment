import { ButtonContainer } from "./styles";
import closeIcon from './close-icon.svg'
import { ICloseButtonProps } from "./interface";


export default function CloseButton({onClick}:ICloseButtonProps){

  return(
    <ButtonContainer onClick={onClick}>
      x
    </ButtonContainer>
  )
}