import styled from "styled-components";

export const InputContainer = styled.div`
  height: 2.5rem;
  width: 100%;
  border-radius: 2px;
  border: thin solid var(--secondary);
  position: relative;

  label {
    position: absolute;
    font-size: 0.5rem;
    display: block;
    background-color: var(--white);
    color: var(--secondary);
    top: -0.25rem;
    left: 0.75rem;
    padding: 0 5px;
  }
  
  input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 0 0.75rem;
    font-weight: 600;
    &:focus{
      outline: none;
    }
  }

  ul {
    width: 100%;
    list-style-type: none;
    li{
      cursor: pointer;
      padding: 0 0.75rem;
      height: 2rem;
      line-height: 2rem;
      border-bottom: thin solid var(--secondary);
      transition: 300ms;
      background: var(--white);
      opacity: 0.9;
      &:hover {
        opacity: 1;
      }
    }
  }

`