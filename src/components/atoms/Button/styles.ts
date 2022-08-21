import styled from "styled-components";

export const ButtonStyle = styled.button`
  height: 2.25rem;
  border-radius: 1.15rem;
  border: none;
  margin: 10px 0;
  background: var(--orange);
  min-width: 100%;
  color: var(--white);
  transition: 400ms;
  &:hover{
    filter: brightness(1.2)
  }
`