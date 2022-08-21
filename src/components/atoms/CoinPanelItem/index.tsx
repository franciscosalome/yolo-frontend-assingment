import { CoinPanelItemContainer } from "./styles";

import icon from '../../../assets/icon.svg'
import CloseButton from "../CloseButton";
import { ICoinPanelItemProps } from "./interface";
import { formatCurrency } from "../../../utils";

export default function CoinPanelItem({coin, removeCoin}: ICoinPanelItemProps){

  return(
    <CoinPanelItemContainer>
      <div>
        <img src={icon} />
        <div className="coin-panel-item__coin-container">
          <span className="coin-panel-item__coin-name">{coin.name}</span>
          <span className="coin-panel-item__coin-price">{formatCurrency(coin.value, 'EUR')}</span>
        </div>
        <CloseButton onClick={()=> removeCoin(coin.name)} />
      </div>
      
    </CoinPanelItemContainer>
  )
}