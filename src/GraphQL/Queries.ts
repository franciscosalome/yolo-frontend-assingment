import { gql } from '@apollo/client'

export const GET_PRICE = gql`
query price($textSearch: String) {
  markets(filter:{ baseSymbol: {_eq: $textSearch} quoteSymbol: {_eq:"EUR"}}) {
    marketSymbol
    ticker {
      lastPrice
    }
  }
}
`