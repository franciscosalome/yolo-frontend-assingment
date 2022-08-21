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

  const {handleTextSearch, textSearch, handleTrackedCoins, trackedCoins} = useCoin()

  async function getCoin(){
    const { error, loading, data} = await client.query({query: GET_PRICE, variables: {textSearch}})
    if(error) {
      Swal.fire({
      title: 'Error',
      icon: 'error',
      text: error.message
    })
    return
  }
    const { markets } = data
    if(markets.length === 0) {
      Swal.fire({
      title: 'No coins found!',
      icon: 'error'
    })
    return
  }
    const newCoin = markets[0]
    const newCoinList: ICoin[] =[...trackedCoins, {name: textSearch, value: newCoin?.ticker?.lastPrice}]
    handleTrackedCoins(newCoinList)
  }

  function verifyIfCoinAlreadyTracked(coinName: string){
    return trackedCoins.some(coin => coin.name === coinName)
  }

  async function handleGetAndAddCoin(){
    setLoadingButton(true)
    try{
      const coinIsAlreadyTracked = verifyIfCoinAlreadyTracked(textSearch)
      if(!coinIsAlreadyTracked) await getCoin()
    }catch(err){
      Swal.fire({
        title: 'Unknown Error',
        text: 'Please try again',
        icon: 'error'
      })
    }finally{
      handleTextSearch('')
      setLoadingButton(false)
    }
    
  }

  return(
    <Card>
      <InputSearch 
        tabIndex={1}
        onChangeText={(e)=> handleTextSearch(e)} 
        value={textSearch}
        />
      <Button 
        text="Add" 
        onClick={handleGetAndAddCoin}
        tabIndex={2}
        loading={loadingButton}
        />
      <h6>Use of this service is subject to terms and conditions</h6>
      
    </Card>
  )
}