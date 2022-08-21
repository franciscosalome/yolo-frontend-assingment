import { gql } from '@apollo/client'

export const GET_PRICE = gql`
query price($coinName: String) {
  markets(filter:{ baseSymbol: {_eq: $coinName} quoteSymbol: {_eq:"EUR"}}) {
    marketSymbol
    ticker {
      lastPrice
    }
  }
}
`

export const LIST_COINS = gql`
query price($textSearch: String) {
  markets(filter:{ baseSymbol: {_like: $textSearch} quoteSymbol: {_eq:"EUR"}}) {
    baseSymbol
  }
}`