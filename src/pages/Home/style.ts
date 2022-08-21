import styled from "styled-components";
import bg from '../../assets/bg.png'
import hero from '../../assets/figure.png'

export const Container = styled.div`
  display: grid;
  height: 100vh;
  margin: 0;
  background-image: url(${bg});
  background-position-x: 70vw;
  background-position-y: -50px;
  background-size: 80%;
  background-repeat: no-repeat;

  @media (max-width: 768px){
    background-image: none;
  }

  header {
    margin: 0 5rem;
    padding: 2rem 0;
  }

  main {
    margin: 0 5rem;
    min-height: 70vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    background-image: url(${hero});
    background-position: center bottom;
    background-size: auto 90%;
    background-repeat: no-repeat;

    @media (max-width: 768px){
      margin: 0 2rem;
      background-image: none;
    }
  }

  footer{
    width: 1fr;
    padding: 2rem 5rem;
    background: var(--white);
    color: var(--secondary);
    font-size: 0.75rem;
  }

`