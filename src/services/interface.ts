
export interface IFetchCoinResponse {
  markets: [{
    ticker: {
      lastPrice: number
    }
  }]
}

export interface IFetchListCoinsResponse {
  markets: [{ baseSymbol: string }]
}