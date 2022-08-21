import { ApolloQueryResult } from "@apollo/client";
import { GET_PRICE, LIST_COINS } from "../GraphQL/Queries";
import { client } from "./api";
import { IFetchCoinResponse, IFetchListCoinsResponse } from "./interface";

export const fetchCoin = async (coinName: string): Promise<ApolloQueryResult<IFetchCoinResponse>> => {
  return await client.query({ query: GET_PRICE, variables: { coinName } })
}

export const fetchListCoins = async (textSearch: string): Promise<ApolloQueryResult<IFetchListCoinsResponse>> => {
  return await client.query({ query: LIST_COINS, variables: { textSearch: `%${textSearch}%` } })
}