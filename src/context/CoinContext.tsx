import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ICoin } from "../global/interfaces";
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
      }}>
        {children}
      </CoinContext.Provider>
  )
}

export const useCoin = ()=> useContext(CoinContext)