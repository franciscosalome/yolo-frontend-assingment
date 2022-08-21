import { useState } from "react";
import { useCoin } from "../../../context/CoinContext";
import { ICoin } from "../../../global/interfaces";
import { GET_PRICE } from "../../../GraphQL/Queries";
import { Button } from "../../atoms/Button";
import InputSearch from "../InputSearch";
import { Card } from "./style";
import Swal from 'sweetalert2'
import { client } from "../../../services/api";

export default function CryptoSearchForm(){

  const [loadingButton, setLoadingButton] = useState(false)

  const {handleTextSearch, textSearch, getCoin} = useCoin()

  async function handleGetCoin(){
    setLoadingButton(true)
    await getCoin()
    setLoadingButton(false)
  }

  return(
    <Card>
      <InputSearch 
        tabIndex={1}
        onKeyDown={(e) => e.key === 'Enter' && handleGetCoin()}
        onChange={(e) => handleTextSearch(e.currentTarget.value)}
        value={textSearch}
        />
      <Button 
        text="Add" 
        onClick={handleGetCoin}
        tabIndex={2}
        loading={loadingButton}
        />
      <h6>Use of this service is subject to terms and conditions</h6>
      
    </Card>
  )
}