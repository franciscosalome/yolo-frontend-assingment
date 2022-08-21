import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ICoin } from "../global/interfaces";
import { fetchCoin, fetchListCoins } from "../services/coins-service";
import { ICoinContext } from "./interface";

const CoinContext = createContext({}as ICoinContext)

export default function CoinProvider({children}: {children: ReactNode}){

  const [textSearch, setTextSearch] = useState('')
  const [trackedCoins, setTrackedCoins] = useState<ICoin[]>([])
  const [isLoadingCoins, setIsLoadingCoins] = useState(false)
  const [listCoinNames, setListCoinNames] = useState<string[]>([])

  useEffect(()=>{
    getCoinsFromLocalStorage()
  }, [])

  useEffect(()=>{
    setListCoinNames([])
    if(textSearch.length > 0) getCoinsList()
  }, [textSearch])

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

  async function getCoinsList(){
    addLoading()
    try{
      const {data, error} = await fetchListCoins(textSearch)
      if(error) return
      const {markets} = data
      if(markets.length > 0) {
        const setOfCoins = new Set(markets.map(coin => coin.baseSymbol))
       setListCoinNames([...setOfCoins])
      }
    }catch(err){
      
    }finally{
      removeLoading()
    }

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
      if(!markets.length) {
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
        getCoin,
        getCoinsList,
        listCoinNames
      }}>
        {children}
      </CoinContext.Provider>
  )
}

export const useCoin = ()=> useContext(CoinContext)