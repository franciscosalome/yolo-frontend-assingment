import { ICoin } from "../global/interfaces"

export interface ICoinContext {
  isLoadingCoins: boolean
  addLoading: () => void
  removeLoading: () => void
  handleTextSearch: (newText: string) => void
  trackedCoins: ICoin[]
  textSearch: string
  handleTrackedCoins: (newCoins: ICoin[]) => void
  getCoin: () => void
}