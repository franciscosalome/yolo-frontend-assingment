import styled from "styled-components";

export const LoaderContainer = styled.div`
    border: 3px solid #f3f3f3; /* Light grey */
    border-top: 3px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    margin: -20px 20px;
    max-height: 100%;
    max-width: 100%;
    animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`