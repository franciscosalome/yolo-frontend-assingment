import { useCoin } from "../../../context/CoinContext";
import CoinPanelItem from "../../atoms/CoinPanelItem";
import { Container } from "./styles";



export default function CoinPanel(){

  const {trackedCoins, handleTrackedCoins} = useCoin()

  function removeCoin(coinName: string){
    const newTrackedCoinsList = trackedCoins.filter(c => c.name !== coinName)
    handleTrackedCoins(newTrackedCoinsList)
  }

  return(
    <Container>
      {trackedCoins && trackedCoins.map(coin => (
        <CoinPanelItem 
          coin={coin}
          removeCoin={removeCoin}
          />
      ))}
    </Container>
  )
}