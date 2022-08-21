import CoinPanel from "../../molecules/CoinPanel";
import { Container } from "./style";

export default function LeftContent(){

  return (
    <Container>
    <div id="home__description">
      <h1>
        Now you can track <br />
        all your cryptos here!
      </h1>
      <h2>
        Just enter the <br />
        cryptocurrency code on the <br />
        form to the right.
      </h2>
    </div>
    <div id="home__selected-coins">
      <CoinPanel />
    </div>
  </Container>
  )
}