import { createContext, ReactNode, useContext, useState } from "react";
import { ICoin } from "../global/interfaces";
import { ICoinContext } from "./interface";

const CoinContext = createContext({}as ICoinContext)

export default function CoinProvider({children}: {children: ReactNode}){

  const [textSearch, setTextSearch] = useState('')
  const [trackedCoins, setTrackedCoins] = useState<ICoin[]>([])
  const [isLoadingCoins, setIsLoadingCoins] = useState(false)

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