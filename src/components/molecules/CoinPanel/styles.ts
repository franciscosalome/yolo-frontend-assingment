import styled from "styled-components";

export const Container = styled.section`
  overflow-y: auto;
  max-height: 30vh;
  margin-bottom: 25px;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: rgba(0,0,0,0.2);
   }
   
  ::-webkit-scrollbar-thumb { 
    background-color: var(--secondary); 
    border-radius: 3px;
  }
`