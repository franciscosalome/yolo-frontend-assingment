import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ICoin } from "../global/interfaces";
import { fetchCoin } from "../services/coins-service";
import { ICoinContext } from "./interface";

const CoinContext = createContext({}as ICoinContext)

export default function CoinProvider({children}: {children: ReactNode}){

  const [textSearch, setTextSearch] = useState('')
  const [trackedCoins, setTrackedCoins] = useState<ICoin[]>([])
  const [isLoadingCoins, setIsLoadingCoins] = useState(false)

  useEffect(()=>{
    getCoinsFromLocalStorage()
  }, [])

  function getCoinsFromLocalStorage(){
    const storage = localStorage.getItem('trackedCoins')
    if(!storage || storage.length === 0) return
    const storedTrackedCoins: ICoin[] = JSON.parse(storage)
    handleTrackedCoins(storedTrackedCoins)
  }

  function addLoading(){
    setIsLoadingCoins(true)
  }

  function removeLoading(){
    setIsLoadingCoins(false)
  }

  function handleTextSearch(newText: string){
    setTextSearch(String(newText).toUpperCase())
  }

  function handleTrackedCoins(newTrackedCoins: ICoin[]){
    localStorage.setItem('trackedCoins', JSON.stringify(newTrackedCoins))
    setTrackedCoins(newTrackedCoins)
  }


  async function getCoin(){
    const isCoinAlreadyTracked = verifyIfCoinAlreadyTracked(textSearch)
    try{
      if(isCoinAlreadyTracked) return
      const {data, error} = await fetchCoin(textSearch)
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
    }catch(err){
      Swal.fire({
        title: 'Unknown Error',
        text: 'Please try again',
        icon: 'error'
      })
    }finally{
      handleTextSearch('')
    }
  }

  function verifyIfCoinAlreadyTracked(coinName: string){
    return trackedCoins.some(coin => coin.name === coinName)
  }

  return(
    <CoinContext.Provider
      value={{
        isLoadingCoins,
        addLoading,
        removeLoading,
        handleTextSearch,
        trackedCoins,
        textSearch,
        handleTrackedCoins,
        getCoin

      }}>
        {children}
      </CoinContext.Provider>
  )
}

export const useCoin = ()=> useContext(CoinContext)