import styled from "styled-components";

export const CoinPanelItemContainer = styled.div`
  width: 300px;
  max-width: 90%;

  > div {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: thin solid;
    border-image-slice: 1;
    border-width: 1px;
    border-image-source: linear-gradient(to right, var(--secondary), rgba(0,0,0,0));
  }
  .coin-panel-item__coin-container{
    width: 60%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .coin-panel-item__coin-name{
    color: var(--white);
    font-weight:600;
  }
  .coin-panel-item__coin-price{
    color: var(--secondary);
    font-size: 0.75rem;
  }

`