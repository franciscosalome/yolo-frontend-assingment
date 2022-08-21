import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: none;
  padding: 3px;
  margin: auto 0;
  background: none;
  color: var(--secondary);
  transition: filter 300ms;

  :hover{
    filter: brightness(1.8);
  }
`